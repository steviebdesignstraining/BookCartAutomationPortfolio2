import { Page, expect, Locator } from "@playwright/test";
import FormActions from "../sections/regForm.section";
// import { url } from "inspector";


// const formDetails = JSON.parse(JSON.stringify(testData[0])); //  // Use the first object in the array

export default class homePage {
  constructor(public page: Page) {
    this.page = page;
  }

  async clickRegister() {
    await this.page.getByRole('button', { name: 'Register' }).click({ timeout: 10000 });
    const headerTitle = this.page.locator('.mat-mdc-card-header-text')
    await expect(headerTitle).toHaveText('User Registration', { timeout: 60000 }); 
  }

  async enterValidUserDetails(page: Page) {
    // Fill with the second object in the array
    const form0 = new FormActions(page, 0); // index 1 refers to the second object
    await form0.enterFormDetails();
    const continueButton = this.page.getByRole('button', { name: 'Register' })
    await expect(continueButton).toBeTruthy();
    console.log('Entered valid details.');
  }

  async enterInvalidUsername(page: Page) {
    // Fill with the second object in the array
    const form0 = new FormActions(page, 1); // index 1 refers to the second object
    await form0.enterFormDetails();
    const continueButton = this.page.getByRole('button', { name: 'Register' })
    await expect(continueButton).toBeTruthy();
    
  }

  async enterInvalidPassword(page: Page) {
    // Fill with the second object in the array
    const form0 = new FormActions(page, 3); // index 1 refers to the second object
    await form0.enterFormDetails();
    const continueButton = this.page.getByRole('button', { name: 'Register' })
    await expect(continueButton).toBeTruthy();
    
  }
  async enterMissmatchedPassword(page: Page) {
    // Fill with the second object in the array
    const form0 = new FormActions(page, 4); // index 1 refers to the second object
    await form0.enterFormDetails();
    const continueButton = this.page.getByRole('button', { name: 'Register' })
    await expect(continueButton).toBeTruthy();
  }

}