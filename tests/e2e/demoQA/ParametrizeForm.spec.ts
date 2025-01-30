import {test} from '../../fixtures/demoQA/PracticeFormFixtures';

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

test(`${testId} fill practice form with parametrize`, async ({homePage, practiceFormPage}) => {

    await homePage.navigateToPracticeFormPage();
    await practiceFormPage.fillFirstName(firstName);
    await practiceFormPage.fillLastName(lastName);
    await practiceFormPage.chooseGender(gender);
    await practiceFormPage.fillPhone(phone);
    await practiceFormPage.submitForm();

    if (isSuccessful) {
        await practiceFormPage.SuccessfulSubmitForm();
    } else {
        await practiceFormPage.UNSuccessfulSubmitForm();
        }
/*
    {
            if (testId === "Demo - 2") await practiceFormPage.firstNameFieldIsMarkedAsRequired();
            if (testId === "Demo - 3") await practiceFormPage.lastNameFieldIsMarkedAsRequired();
            if (testId === "Demo - 4") await practiceFormPage.mobileFieldIsMarkedAsRequired();
            if (testId === "Demo - 5") await practiceFormPage.genderFieldIsMarkedAsRequired(gender);
        }
    }*/
})};

