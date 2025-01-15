import {Locator, Page, expect} from '@playwright/test';

export class PracticeFormPage {
    private readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField : Locator;
    readonly emailField : Locator;
    readonly phoneField : Locator;
    readonly dateOfBirthField : Locator;
    readonly subjectsField: Locator;
    readonly selectedSubject : Locator;
    readonly inputFieldFile : Locator; 
    readonly addressFiled :Locator;
    readonly stateDropDown : Locator;
    readonly StateNCR : Locator;
    readonly cityDropDown :Locator;
    readonly CityGurgaon : Locator;
    readonly submitButton : Locator;
    readonly headerOfSuccessfulForm : Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.locator('//input[@placeholder = "First Name"]');
        this.lastNameField = page.locator('//input[@placeholder = "Last Name"]');
        this.emailField = page.locator('#userEmail');
        this.phoneField = page.locator('//input[@placeholder = "Mobile Number"]');
        this.dateOfBirthField = page.locator('#dateOfBirthInput');
        this.subjectsField = page.locator('#subjectsInput');
        this.selectedSubject = page.locator('.subjects-auto-complete__option', { hasText: 'English' });
        this.inputFieldFile = page.locator('input[type="file"]');
        this.addressFiled = page.getByPlaceholder('Current Address');
        this.stateDropDown = page.locator('#state');
        this.StateNCR = page.getByText('NCR', { exact: true });
        this.cityDropDown = page.locator('#city');
        this.CityGurgaon = page.getByText('Gurgaon', { exact: true });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.headerOfSuccessfulForm = page.locator('.modal-title.h4');
        
}
    async fillFirstName (firstName: string) {
        await this.firstNameField.fill(firstName);
    };

    async fillLastName(lastName: string) {
        await this.lastNameField.fill(lastName);
    };
    async fillEmail(email: string) {
        await this.emailField.fill(email);
    };
    getGenderLocator(gender: string): Locator {
        return this.page.getByText(gender, { exact: true });
    }
    async chooseGender (gender: string) {
        if (!gender.trim()) { 
            return; }
        const genderLocator = this.getGenderLocator(gender);
        await genderLocator.click();
    };
    async fillPhone(phone: string) {
        await this.phoneField.fill(phone);

    };
    async fillDateOfBirth () {
        await this.dateOfBirthField.fill('01/01/1995');
    };
    async fillSubject () {
        await this.subjectsField.click();
        await this.subjectsField.fill('English');
    };
    async clickSelectedSubject () {
        await this.selectedSubject.click();
    };
    async setInputFile () {
        await this.inputFieldFile.setInputFiles('C:/QA-Dojo-2-practice/img/cat_icon.png');
    };
    async fillAddress () {
        await this.addressFiled.fill('Some Address 123456 Street');
    };
    async chooseState() {
        await this.stateDropDown.click();
        await this.StateNCR.click();
    };
    async chooseCity () {
        await this.cityDropDown.click();
        await this.CityGurgaon.click();
    };
    async SubmitForm () {
        await this.submitButton.click();
    };
    async SuccessfulSubmitForm () {
        await expect(this.headerOfSuccessfulForm).toContainText('Thanks for submitting the form');
    };
    async UNSuccessfulSubmitForm () {
        await expect(this.headerOfSuccessfulForm).not.toBeVisible();
    };

    async verifyTableValue(fieldName: string, expectedValue: string) {
        const dynamicLocator = this.page.locator(`//td[text()="${fieldName}"]/following-sibling::td`);
        await expect(dynamicLocator).toHaveText(expectedValue);
    };

    async firstNameFieldIsMarkedAsRequired() {
        await expect(this.firstNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)'); //#dc3545
    };
    async lastNameFieldIsMarkedAsRequired() {
        await expect(this.lastNameField).toHaveCSS('border-color', 'rgb(220, 53, 69)'); //#dc3545
    };
    async genderFieldIsMarkedAsRequired(gender: string) {

        const genderLocator = this.getGenderLocator(gender);
        await expect(genderLocator).toHaveCSS('border-color', 'rgb(220, 53, 69)'); //#dc3545
    };
    async mobileFieldIsMarkedAsRequired() {
        await expect(this.phoneField).toHaveCSS('border-color', 'rgb(220, 53, 69)'); //#dc3545
    };
}
/*await expect(page.locator('//td[text()="Student Name"]/following-sibling::td')).toHaveText('Fist name last name');

await expect(page.locator('//td[text()="Student Email"]/following-sibling::td')).toHaveText('ekjhkjh@hgf.com');

await expect(page.locator('//td[text()="Gender"]/following-sibling::td')).toHaveText('Male');

await expect(page.locator('//td[text()="Mobile"]/following-sibling::td')).toHaveText('1234567899');

await expect(page.locator('//td[text()="Date of Birth"]/following-sibling::td')).toHaveText('01 January,1995');

await expect(page.locator('//td[text()="Subjects"]/following-sibling::td')).toHaveText('English');

await expect(page.locator('//td[text()="Hobbies"]/following-sibling::td')).toHaveText('');
await expect(page.locator('//td[text()="Picture"]/following-sibling::td')).toHaveText('cat_icon.png');

await expect(page.locator('//td[text()="Address"]/following-sibling::td')).toHaveText('Some Address 123456 Street');
await expect(page.locator('//td[text()="State and City"]/following-sibling::td')).toHaveText('NCR Gurgaon');*/