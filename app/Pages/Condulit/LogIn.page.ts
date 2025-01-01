import {Locator} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export async function logIn(emailField : Locator, passwordField : Locator, signInButton : Locator) {
  await emailField.fill(autorizData.emailOfUser);
  await passwordField.fill(autorizData.passwordOfUser);
  await signInButton.click();
};