//Validate that appropriate error messages are displayed for invalid login attempts
import { Selector } from 'testcafe';

fixture`Login Tests`
    .page`https://beta.deepthought.education/login`;
const usernameInput = Selector('input[name="username"]');
const passwordInput = Selector('input[name="password"]');
const loginButton = Selector('button[type="submit"]');
const errorMessage = Selector('#login-error-notify');
    // refresh the page
    // await t.eval(() => location.reload(true));
test ('Invalid Login Attempts: Short Password)', async t => {
    // Attempt login with short password
    await t
        .typeText(usernameInput, 'Prashant12')
        .typeText(passwordInput, '#Pra')
        .click(loginButton);

    // Check if the error message is displayed
    await t.expect(errorMessage.exists).ok();
    await t.expect(errorMessage.innerText).contains('The password entered is too short, please pick a different password.');
}  );

    // // Attempt login with no password or username
test ('Invalid Login Attempts: No Username/Password', async t => {
    const submitButton = Selector('button[type="submit"]');
    const emailError = Selector('#login-error-notify');
    const passwordError = Selector('#login-error-notify');
  
    await t.click(submitButton);
  
    // Validate error messages for empty fields
    await t.expect(emailError.innerText).contains('Please specify both a username and password');
    await t.expect(passwordError.innerText).contains('Please specify both a username and password');
});
