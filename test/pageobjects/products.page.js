import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

export class ProductPage{
    get textHeaderProducts() {return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView');}
    get textHeaderProductsIncorrectXPath() {return $('//android.view.ViewGroup[@content-desc="container headers"]/android.widget.TextView');}

    async verifyHeaderProductsOK() {
        allureReporter.startStep('Verify Header "Products" Appear');
        await expect(this.textHeaderProducts).toBeExisting();
        allureReporter.endStep();
    }

    async verifyHeaderProductsFailed() {
        allureReporter.startStep('Verify Header "Products" Appear... but Failed');
        await expect(this.textHeaderProductsIncorrectXPath).toBeExisting();
        allureReporter.endStep();
    }
}

export default new ProductPage();