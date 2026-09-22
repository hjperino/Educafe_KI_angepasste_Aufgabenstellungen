import os
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
os.environ["PLAYWRIGHT_BROWSERS_PATH"] = str(PROJECT_ROOT / ".playwright-browsers")

from playwright.sync_api import sync_playwright


PAGE_URL = (PROJECT_ROOT / "dist" / "client" / "index.html").as_uri()
EXAMPLE_SELECTOR = (
    "#beispiele .content-accordion:not(.compact-accordion) > details.accordion-item"
)


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
    "Vorankündigung und Projektlink vorhanden; drei Praxisbeispiele geschlossen; "
    "Öffnen und Schliessen funktionieren in Desktop-, Zwischen- und Mobilbreite; "
    "keine Konsolenfehler."
)
