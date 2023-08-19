//Test unsuccessful login attempts with invalid credentials
import { Selector } from 'testcafe';

fixture('Unsuccessful Login Tests')
  .page('https://beta.deepthought.education/login');

test('Invalid Credentials: Wrong Email and Password', async t => {
  const emailInput = Selector('input[name="username"]');
  const passwordInput = Selector('input[name="password"]');
  const submitButton = Selector('button[type="submit"]');
  const errorMessage = Selector('#login-error-notify');

  await t
    .typeText(emailInput, 'Prashant12')
    .typeText(passwordInput, '#Prashant#')
    .click(submitButton);

  // Validate error message for invalid login
  await t.expect(errorMessage.innerText).contains('Invalid login credentials');
  //await t.expect(errorMessage.withText('Invalid login credentials').exists).ok();
});

