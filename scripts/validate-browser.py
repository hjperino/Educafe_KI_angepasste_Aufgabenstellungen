import os
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
os.environ["PLAYWRIGHT_BROWSERS_PATH"] = str(PROJECT_ROOT / ".playwright-browsers")

from playwright.sync_api import sync_playwright


PAGE_URL = (PROJECT_ROOT / "dist" / "client" / "index.html").as_uri()
EXAMPLE_SELECTOR = (
    "#beispiele .content-accordion:not(.compact-accordion) > details.accordion-item"
)
GATSBY_CHAT_URLS = [
    "https://chatgpt.com/share/6ab4de99-920c-83eb-abb6-661556896915",
    "https://chatgpt.com/share/6ab4dee4-dedc-83eb-9349-829280138517",
]
PROMPT_RESOURCE_URLS = [
    "https://promptmanagerin42.vercel.app/",
    "https://www.manuelflick.de/chatgpt-guide",
    "https://www.aiforeducation.io/prompt-library",
    "https://www.aiforeducation.io/blog/bt106g4jzvoc1hdz5ozqzp8g7jlxc0-mtecx",
    "https://www.moreusefulthings.com/prompts",
]


def check_examples(browser, viewport):
    page = browser.new_page(viewport=viewport)
    console_errors = []
    page_errors = []
    page.on(
        "console",
        lambda message: console_errors.append(message.text)
        if message.type == "error"
        else None,
    )
    page.on("pageerror", lambda error: page_errors.append(str(error)))

    page.goto(PAGE_URL)
    page.wait_for_load_state("networkidle")

    examples = page.locator(EXAMPLE_SELECTOR)
    assert examples.count() == 3, "Es wurden nicht genau drei Kernbeispiele gefunden."
    assert [
        examples.nth(index).evaluate("element => element.open") for index in range(3)
    ] == [False, False, False], "Nicht alle Kernbeispiele laden geschlossen."

    gatsby_links = examples.nth(2).locator(".example-tools a")
    assert gatsby_links.count() == 2, "Die beiden Gatsby-Beispielchats fehlen."
    assert [gatsby_links.nth(index).get_attribute("href") for index in range(2)] == (
        GATSBY_CHAT_URLS
    ), "Die Gatsby-Beispielchats verwenden nicht die öffentlichen Freigabelinks."

    gpt_access_note = examples.first.locator(".example-tool-row .access-note")
    assert gpt_access_note.count() == 1
    assert gpt_access_note.text_content() == "ChatGPT-Konto erforderlich"

    source_access_notes = page.locator("#quellen .source-links .access-note")
    assert source_access_notes.count() == 2, "Die Zugangshinweise bei den Quellen fehlen."
    assert source_access_notes.all_text_contents() == [
        "Abstract öffentlich; Volltext gegebenenfalls kostenpflichtig",
        "Kostenlose Anmeldung erforderlich",
    ]

    prompt_resources = page.locator(".prompt-resources")
    assert prompt_resources.count() == 1, "Der Block mit den Prompt-Ressourcen fehlt."
    prompt_links = prompt_resources.locator("a")
    assert prompt_links.count() == 5, "Es werden nicht alle fünf Prompt-Ressourcen angezeigt."
    assert [prompt_links.nth(index).get_attribute("href") for index in range(5)] == (
        PROMPT_RESOURCE_URLS
    ), "Die Prompt-Ressourcen verwenden nicht die vorgesehenen Links."
    assert "E-Mail-Anmeldung erforderlich" in prompt_resources.text_content()
    prompt_heading_color = prompt_resources.locator("h3").evaluate(
        "element => getComputedStyle(element).color"
    )
    prompt_intro_color = prompt_resources.locator(".prompt-resources-intro").evaluate(
        "element => getComputedStyle(element).color"
    )
    prompt_link_color = prompt_links.first.evaluate(
        "element => getComputedStyle(element).color"
    )
    assert prompt_heading_color == prompt_intro_color
    assert prompt_heading_color != prompt_link_color, (
        "Titel und Links im Prompt-Ressourcenblock sind farblich nicht unterscheidbar."
    )

    preview = page.locator(".english-ai-preview")
    assert preview.count() == 1, "Die Vorankündigung zu «Englisch mit KI» fehlt."
    preview_link = preview.locator("a")
    assert preview_link.get_attribute("href") == (
        "https://dlh.zh.ch/home/innovationsfonds/projektvorstellungen/uebersicht/"
        "997-selbstverantwortliches-lernen-mit-ki-im-englisch"
    ), "Der Link zum Innovationsfondsprojekt ist nicht korrekt."

    access_link = page.locator(".hero-access-link")
    access_link_size = float(
        access_link.evaluate("element => getComputedStyle(element).fontSize.replace('px', '')")
    )
    assert access_link_size >= 20, "Die Kurzadresse ist nicht ausreichend vergrössert."
    qr_width = page.locator(".hero-access-qr").bounding_box()["width"]
    minimum_qr_width = 315 if viewport["width"] >= 1308 or viewport["width"] <= 820 else 250
    assert qr_width >= minimum_qr_width, "Der QR-Code ist nicht ausreichend gross."

    first_example = examples.first
    first_summary = first_example.locator("summary")
    first_content = first_example.locator(".accordion-content")
    assert first_content.is_visible() is False

    first_summary.click()
    assert first_example.evaluate("element => element.open") is True
    assert first_content.is_visible() is True

    first_summary.click()
    assert first_example.evaluate("element => element.open") is False
    assert first_content.is_visible() is False
    assert console_errors == [], f"Konsolenfehler: {console_errors}"
    assert page_errors == [], f"Seitenfehler: {page_errors}"

    page.close()


with sync_playwright() as playwright:
    chromium = playwright.chromium.launch(headless=True)
    check_examples(chromium, {"width": 1440, "height": 1000})
    check_examples(chromium, {"width": 1100, "height": 900})
    check_examples(chromium, {"width": 390, "height": 844})
    chromium.close()

print(
    "Browsercheck bestanden: QR-Code und Kurzadresse vergrössert; "
    "Prompt-Ressourcen, Vorankündigung und Projektlink vorhanden; "
    "drei Praxisbeispiele geschlossen; "
    "Öffnen und Schliessen funktionieren in Desktop-, Zwischen- und Mobilbreite; "
    "keine Konsolenfehler."
)
