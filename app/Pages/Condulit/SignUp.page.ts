import {Locator} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export async function signUp (Username : Locator, emailOfUser : Locator, passwordOfUser: Locator, signUpButton: Locator){
    await Username.fill(autorizData.userName);
    await emailOfUser.fill(autorizData.emailOfUser);
    await passwordOfUser.fill(autorizData.passwordOfUser);
    await signUpButton.click();
};
