import { Page, expect, Locator } from "@playwright/test";
// import { url } from "inspector";


// const formDetails = JSON.parse(JSON.stringify(testData[0])); //  // Use the first object in the array

export default class homePage {
  constructor(public page: Page) {
    this.page = page;
  }


  async clickLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click({ timeout: 10000 });
    const headerTitle = this.page.locator('.mat-mdc-card-header-text')
    await expect(headerTitle).toHaveText('Login', { timeout: 60000 }); 
  }
}