import { Page } from "@playwright/test";
import testData from "../testData/registrationData.json";

export default class FormActions {
    page: Page;
    loginDetails: any;

    constructor(page: Page, index: number = 0) {
        this.page = page;
        this.loginDetails = testData[index]; // Use the object at the specified index in the array
    }

    // Form Field Selectors and Actions
    firstName = () => this.page.getByPlaceholder('First name'); // Update selector to match actual input name
    lastName = () => this.page.getByPlaceholder('Last name'); // Update selector to match actual input name
    userName = () => this.page.getByPlaceholder('User name'); // Update selector to match actual input name
    password = () => this.page.getByPlaceholder('Password').nth(0); // Update selector to match actual input name
    confirmPassword = () => this.page.getByPlaceholder('Confirm Password'); // Update selector to match actual input name password 
    // gender = () => this.page.getByRole('radio', { name: gender() });

    // Actions
    public async enterFormDetails() {
        await this.firstName().fill(this.loginDetails.firstName); // Fill email field with data from JSON
        await this.lastName().fill(this.loginDetails.lastName); // Fill password field with data from JSON 
        await this.userName().fill(this.loginDetails.userName); // Fill email field with data from JSON
        await this.password().fill(this.loginDetails.password); // Fill password field with data from JSON
        await this.confirmPassword().fill(this.loginDetails.confirmPassword); // Fill password field with data from JSON
        // await this.gender().click(this.loginDetails.gender); 
        await this.page.getByRole('button', { name: 'Register' }).click();
    }
}
