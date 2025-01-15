import {test} from '@playwright/test';
import {HomePage} from '../../../app/Pages/DemoQA/Home.page';
import {PracticeFormPage} from '../../../app/Pages/DemoQA/PracticeForm.page'

const testCases = [
    {
        testId: "Demo - 1",
        firstName: "Alex",
        lastName: "Wilber",
        gender: "Female",
        phone: "1234567890",
        isSuccessful: true, 
    },
    {
        testId: "Demo - 2",
        firstName: "",
        lastName: "Wilber",
        gender: "Male",
        phone: "1234567890",
        isSuccessful: false, 
    },
    {
        testId: "Demo - 3",
        firstName: "Alex",
        lastName: "",
        gender: "Male",
        phone: "1234567890",
        isSuccessful: false, 
    },
    {
        testId: "Demo - 4",
        firstName: "Alex",
        lastName: "Wilber",
        gender: "Other",
        phone: "",
        isSuccessful: false, 
    },
    {
        testId: "Demo - 5",
        firstName: "Alex",
        lastName: "Wilber",
        gender: " ",
        phone: "1234567890",
        isSuccessful: false, 
    },
];

for (const { 
  testId,
  firstName,
  lastName,
  gender,
  phone,
  isSuccessful
} of testCases) {

test(`${testId} fill practice form with parametrize`, async ({ page}) => {
    let homePage: HomePage;
    let practiceFormPage : PracticeFormPage;
    homePage = new HomePage(page);
    practiceFormPage = new PracticeFormPage(page);

    await homePage.navigateToPracticeFormPage();
    await practiceFormPage.fillFirstName(firstName);
    await practiceFormPage.fillLastName(lastName);
    await practiceFormPage.chooseGender(gender);
    await practiceFormPage.fillPhone(phone);
    await practiceFormPage.SubmitForm();

    if (isSuccessful) {
        await practiceFormPage.SuccessfulSubmitForm();
    } else {
        await practiceFormPage.UNSuccessfulSubmitForm();
       /*
        try {
        await practiceFormPage.firstNameFieldIsMarkedAsRequired();
    } catch {
        try {
            await practiceFormPage.lastNameFieldIsMarkedAsRequired();
        } catch {
            try {
                await practiceFormPage.genderFieldIsMarkedAsRequired(gender);
            } catch {
                await practiceFormPage.mobileFieldIsMarkedAsRequired();
            }
        }
    }
       */
    }
})};

