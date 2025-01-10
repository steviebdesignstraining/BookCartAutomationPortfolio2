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

    // Gender selector (dynamic based on JSON data)
    gender = () => this.page.getByLabel(this.loginDetails.gender, { exact: true });

    // Actions
    public async enterFormDetails() {
        await this.firstName().fill(this.loginDetails.firstName); // Fill first name field with data from JSON
        await this.lastName().fill(this.loginDetails.lastName); // Fill last name field with data from JSON
        await this.userName().fill(this.loginDetails.userName); // Fill user name field with data from JSON
        await this.password().fill(this.loginDetails.password); // Fill password field with data from JSON
        await this.confirmPassword().fill(this.loginDetails.confirmPassword); // Fill confirm password field with data from JSON
        
        // Click the correct gender radio button
        await this.gender().click();
        
        // Submit the form
        await this.page.getByRole('button', { name: 'Register' }).click();
    }
}
