import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';
import {test} from '@playwright/test';
import {HomePage} from '../../../app/Pages/DemoQA/Home.page';
import {PracticeFormPage} from '../../../app/Pages/DemoQA/PracticeForm.page'

const records = parse(fs.readFileSync(path.join('C:/QA-Dojo-2-practice/config/', 'testCases.csv')), {
    columns: true,
    skip_empty_lines: true
  });


for (const { 
    testId,
    firstName,
    lastName,
    gender,
    phone,
    isSuccessful } of records) {
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
    await practiceFormPage.submitForm();

    if (isSuccessful === 'TRUE') {
        await practiceFormPage.SuccessfulSubmitForm();
    } else {
        await practiceFormPage.UNSuccessfulSubmitForm();
    }
})};

