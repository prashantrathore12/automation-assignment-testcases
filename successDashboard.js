//On successful login, validate that the user is redirected to the dashboard page.
import { Selector, Role } from 'testcafe';

// Define the URL of the login page
const loginPageUrl = 'https://beta.deepthought.education/login';

fixture('Login Test')
    .page(loginPageUrl);
const usernameInput = Selector('input[name="username"]');
const passwordInput = Selector('input[name="password"]');
const loginButton = Selector('button[type="submit"]');
test('Successful Login with Valid Credentials', async t => {
    await t
    .typeText(usernameInput, 'Prashant12')
    .typeText(passwordInput, '#Prashant12#')
    .click(loginButton);

    // is page source contains "dashboard"
    const dashboardHeader = Selector('body.page-dashboard');
    await t.wait(5000);
    await t.expect(dashboardHeader.exists).ok();
    // Assert that the URL contains "dashboard"

    // or check the URL directly
    // await t.expect(t.eval(() => window.location.href.includes('dashboard'))).ok();
    
}   );