import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

export class LoginPage{
    get textHeaderLogin() {return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView');}
    get inputUsername() {return $('//android.widget.EditText[@content-desc="Username input field"]');}
    get inputPassword() {return $('//android.widget.EditText[@content-desc="Password input field"]');}
    get buttonLogin() {return $('//android.view.ViewGroup[@content-desc="Login button"]');}
    get textErrorLogin() {return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView');}

    async inputUsernameField(username) {
        allureReporter.startStep('Input Username');
        await this.inputUsername.setValue(username);
        allureReporter.endStep();
    }

    async inputPasswordField(password) {
        allureReporter.startStep('Input Password');
        await this.inputPassword.setValue(password);
        allureReporter.endStep();
    }

    async clickButtonLogin() {
        allureReporter.startStep('Click button Login');
        await this.buttonLogin.click();
        allureReporter.endStep();
    }

    async verifyErrorAppear(text) {
        allureReporter.startStep('Verify Login Error Appear');
        await expect(this.textErrorLogin).toBeExisting();
        await expect(this.textErrorLogin).toHaveText(text);
        allureReporter.endStep();
    }
}

export default new LoginPage();