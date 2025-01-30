import {test} from '../../fixtures/demoQA/PracticeFormFixtures';

test('practice form', async ({homePage, practiceFormPage}) => {
    await homePage.navigateToPracticeFormPage();
    await practiceFormPage.fillFirstName('first name');
    await practiceFormPage.fillLastName('last name');
    await practiceFormPage.fillEmail('ekjhkjh@hgf.com');
    await practiceFormPage.chooseGender('Male');
    await practiceFormPage.fillPhone('1234567899');
    await practiceFormPage.fillDateOfBirth();
    await practiceFormPage.fillSubject();
    await practiceFormPage.clickSelectedSubject();
    await practiceFormPage.setInputFile();
    await practiceFormPage.fillAddress();
    await practiceFormPage.chooseState();
    await practiceFormPage.chooseCity();
    await practiceFormPage.submitForm();

    await practiceFormPage.SuccessfulSubmitForm();

    await practiceFormPage.verifyTableValue('Student Name', 'first name last name');
    await practiceFormPage.verifyTableValue('Student Email', 'ekjhkjh@hgf.com');
    await practiceFormPage.verifyTableValue('Gender', 'Male');
    await practiceFormPage.verifyTableValue('Mobile', '1234567899');
    await practiceFormPage.verifyTableValue('Date of Birth', '01 January,1995');
    await practiceFormPage.verifyTableValue('Subjects', 'English');
    await practiceFormPage.verifyTableValue('Hobbies', '');
    await practiceFormPage.verifyTableValue('Picture', 'cat_icon.png');
    await practiceFormPage.verifyTableValue('Address', 'Some Address 123456 Street');
    await practiceFormPage.verifyTableValue('State and City', 'NCR Gurgaon');

}); 