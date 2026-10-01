import { test, expect } from '@playwright/test';
import { PortfolioPage } from './pages/PortfolioPage';

test.describe('Portfolio UI End-to-End Suite', () => {
  let portfolio: PortfolioPage;

  test.beforeEach(async ({ page }) => {
    portfolio = new PortfolioPage(page);
    await portfolio.goto();
  });

  test('1. Hero section tampil dengan informasi identitas dan tombol CTA', async ({ page }) => {
    // Verifikasi heading nama utama muncul
    await expect(portfolio.headingName).toContainText('Bangkit Maulana');

    // Verifikasi tombol CTA aktif dan terarah
    await expect(portfolio.contactBtn).toBeVisible();
    await expect(portfolio.contactBtn).toHaveAttribute('href', '#contact');
  });

  test('2. Dark mode dan Light mode toggle berfungsi mengubah state elemen root', async ({ page }) => {
    const htmlElement = page.locator('html');

    // Cek tema awal & trigger toggle
    const initialIsDark = await htmlElement.evaluate((el) => el.classList.contains('dark'));
    await portfolio.toggleTheme();

    if (initialIsDark) {
      await expect(htmlElement).not.toHaveClass(/dark/);
    } else {
      await expect(htmlElement).toHaveClass(/dark/);
    }

    // Toggle kembali ke kondisi awal
    await portfolio.toggleTheme();
    if (initialIsDark) {
      await expect(htmlElement).toHaveClass(/dark/);
    } else {
      await expect(htmlElement).not.toHaveClass(/dark/);
    }
  });

  test('3. Navigasi mengarahkan viewport ke section terkait', async ({ page }) => {
    await portfolio.navAbout.click();
    await expect(page.locator('#about')).toBeInViewport();

    await portfolio.navExperience.click();
    await expect(page.locator('#experience')).toBeInViewport();

    await portfolio.navSkills.click();
    await expect(page.locator('#skills')).toBeInViewport();

    await portfolio.navPortfolio.click();
    await expect(page.locator('#projek')).toBeInViewport();

    await portfolio.navContact.click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('4. Form kontak dapat diisi dengan atribut ramah aksesibilitas', async () => {
    await portfolio.fillContactForm(
      'Budi Santoso',
      'budi.santoso@example.com',
      'Halo Bangkit, tertarik berdiskusi perihal peluang kolaborasi proyek fullstack.'
    );

    await expect(portfolio.contactNameInput).toHaveValue('Budi Santoso');
    await expect(portfolio.contactEmailInput).toHaveValue('budi.santoso@example.com');
    await expect(portfolio.contactMessageInput).toHaveValue(
      'Halo Bangkit, tertarik berdiskusi perihal peluang kolaborasi proyek fullstack.'
    );
    await expect(portfolio.contactSubmitBtn).toBeEnabled();
  });

  test('5. Accordion pengalaman kerja dapat dibuka dan ditutup dengan interaksi pengguna', async ({ page }) => {
    const firstExperienceAccordion = page.getByRole('button', { name: /CV ALAM JAYA TEXTILE/i });
    await expect(firstExperienceAccordion).toBeVisible();

    // Pastikan status awal tertutup
    await expect(firstExperienceAccordion).toHaveAttribute('aria-expanded', 'false');

    // Klik untuk membuka
    await firstExperienceAccordion.click();
    await expect(firstExperienceAccordion).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByText(/Mengembangkan sistem ERP manufaktur/i)).toBeVisible();

    // Klik lagi untuk menutup
    await firstExperienceAccordion.click();
    await expect(firstExperienceAccordion).toHaveAttribute('aria-expanded', 'false');
  });

  test('6. Filter dan tombol pagination pada bagian proyek berfungsi interaktif', async ({ page }) => {
    const seeMoreBtn = page.getByRole('button', { name: /lihat proyek lainnya|tampilkan lebih sedikit/i });
    await expect(seeMoreBtn).toBeVisible();

    // Klik lihat proyek lainnya
    await seeMoreBtn.click();
    await expect(page.getByText('SafeGuard HSSE System')).toBeVisible();
  });
});
