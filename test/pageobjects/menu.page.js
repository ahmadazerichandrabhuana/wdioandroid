import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

export class MenuPage{
    get iconHamburger() {return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');}
    get iconCart() {return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView');}
    get textMenuCatalog() {return $('//android.view.ViewGroup[@content-desc="menu item catalog"]/android.widget.TextView');}
    get textMenuLogin() {return $('//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView');}

    async selectMenuCatalog() {
        allureReporter.startStep('Select Menu "Catalog"');
        await this.iconHamburger.click();
        await this.textMenuCatalog.click();
        allureReporter.endStep();
    }

    async selectMenuLogIn() {
        allureReporter.startStep('Select Menu "Log In"');
        await this.iconHamburger.click();
        await this.textMenuLogin.click();
        allureReporter.endStep();
    }
}

export default new MenuPage();