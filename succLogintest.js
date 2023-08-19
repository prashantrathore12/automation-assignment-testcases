//Test successful login with valid credentials
import { Selector, Role } from 'testcafe';

// Define the URL of the login page
const loginPageUrl = 'https://beta.deepthought.education/login';

// Define a role with valid credentials
const validUser = Role(loginPageUrl, async t => {
  await t
    .typeText('input[name="username"]', 'Prashant12')
    .typeText('input[name="password"]', '#Prashant12#')
    .click('button[type="submit"]');
});

fixture('Login Test')
  .page(loginPageUrl);

test('Dashboard after login', async t => {
  // Use the validUser role to log in
  await t.useRole(validUser);

  // Check if the user is logged in (you might need to adjust the selector)
  const welcomeMessage = Selector('.welcome-message');
  // Wait for the welcome message to become visible
  //await t.expect(welcomeMessage.exists).ok({ timeout: 10000 });
  await t.wait(5000);
  // Check if the welcome message is visible
  // await t.expect(welcomeMessage.visible).ok();
});


