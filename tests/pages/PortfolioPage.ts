import { type Page, type Locator, expect } from '@playwright/test';

export class PortfolioPage {
  readonly page: Page;
  readonly headingName: Locator;
  readonly contactBtn: Locator;
  readonly themeToggleBtn: Locator;
  readonly mobileMenuBtn: Locator;
  readonly navHome: Locator;
  readonly navAbout: Locator;
  readonly navExperience: Locator;
  readonly navSkills: Locator;
  readonly navPortfolio: Locator;
  readonly navContact: Locator;

  // Contact Form locators
  readonly contactNameInput: Locator;
  readonly contactEmailInput: Locator;
  readonly contactMessageInput: Locator;
  readonly contactSubmitBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // Headings & CTA
    this.headingName = page.getByRole('heading', { level: 1 });
    this.contactBtn = page.getByRole('link', { name: 'Contact Me' });
    this.themeToggleBtn = page.getByRole('button', { name: /toggle theme/i });
    this.mobileMenuBtn = page.getByRole('button', { name: /toggle navigation menu/i });

    // Nav Links (Desktop & Mobile)
    this.navHome = page.getByRole('link', { name: 'Home' }).first();
    this.navAbout = page.getByRole('link', { name: 'Tentang Saya' }).first();
    this.navExperience = page.getByRole('link', { name: 'Pengalaman' }).first();
    this.navSkills = page.getByRole('link', { name: 'Skills' }).first();
    this.navPortfolio = page.getByRole('link', { name: 'Portfolio' }).first();
    this.navContact = page.getByRole('link', { name: 'Kontak' }).first();

    // Contact Form
    this.contactNameInput = page.getByLabel(/^nama/i);
    this.contactEmailInput = page.getByLabel(/^email/i);
    this.contactMessageInput = page.getByLabel(/^pesan/i);
    this.contactSubmitBtn = page.getByRole('button', { name: /send message|kirim via whatsapp/i });
  }

  async goto() {
    await this.page.goto('/');
    // Tunggu loader selesai (App.jsx ada loader 1.5 detik)
    await expect(this.headingName).toBeVisible({ timeout: 10000 });
  }

  async toggleTheme() {
    await this.themeToggleBtn.click();
  }

  async fillContactForm(name: string, email: string, message: string) {
    await this.contactNameInput.fill(name);
    await this.contactEmailInput.fill(email);
    await this.contactMessageInput.fill(message);
  }
}
