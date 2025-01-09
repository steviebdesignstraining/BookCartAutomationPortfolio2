import { test } from '@playwright/test';
import homePage from "../pages/homePage";
import registrationPage from "../pages/registrationPage";
// import loginPage from "../pages/loginPage";
require('dotenv').config({ path: './env/.env' });

test.describe.serial("Book cart automation", () => {
  // test.describe.configure({ retries: 2 });

  test.beforeEach(async ({ page, context }) => {
    const url = process.env.URL as string;

    if (!url) {
      throw new Error('URL is not defined in the .env file.');
    }

    console.log('Clearing cookies...');
    await context.clearCookies(); // Clears all cookies in the browser context

    console.log('Navigating to:', url); // Debugging log.

    await page.goto(url); // Navigate to the base URL before each test.
  });

  test('Successful Registration with Valid Data', async ({ page }) => {
    const homePageMain = new homePage(page);
    const regPageMain = new registrationPage(page);
    // const assistantHeader = page.getByText('Create New Assistant',);
    await homePageMain.clickLogin();
    await regPageMain.clickRegister();
    await regPageMain.enterValidUserDetails(page);
  });
  test('Registration with Existing Username', async ({ page }) => {
    const homePageMain = new homePage(page);
    const regPageMain = new registrationPage(page);
    // const assistantHeader = page.getByText('Create New Assistant',);
    await homePageMain.clickLogin();
    await regPageMain.clickRegister();
    await regPageMain.enterInvalidUsername(page);
    console.log('Registration with Existing Username');
  });

  test('Registration with No Password', async ({ page }) => {
    const homePageMain = new homePage(page);
    const regPageMain = new registrationPage(page);
    // const assistantHeader = page.getByText('Create New Assistant',);
    await homePageMain.clickLogin();
    await regPageMain.clickRegister();
    await regPageMain.enterInvalidPassword(page);
    console.log('Registration with No Password');
  });

  test('Registration with mis-matched Password', async ({ page }) => {
    const homePageMain = new homePage(page);
    const regPageMain = new registrationPage(page);
    // const assistantHeader = page.getByText('Create New Assistant',);
    await homePageMain.clickLogin();
    await regPageMain.clickRegister();
    await regPageMain.enterMissmatchedPassword(page);
    console.log('Registration with mis-matched Password');
  });
});
