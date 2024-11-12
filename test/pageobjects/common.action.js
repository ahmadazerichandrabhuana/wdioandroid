import { driver } from '@wdio/globals';
import { config } from '../../wdio.conf.js';
import allureReporter from '@wdio/allure-reporter';

export class CommonAction{
    async launchApp() {
        allureReporter.startStep('Launch App');
        await driver.activateApp(config.capabilities.at(0)['appium:appPackage']);
        allureReporter.endStep();
    }

    async closeApp() {
        allureReporter.startStep('Close App');
        await driver.terminateApp(config.capabilities.at(0)['appium:appPackage']);
        allureReporter.endStep();
    }

    async swipeUp(){
        allureReporter.startStep('Swipe Up');
        const startPercentage = 10;
        const endPercentage = 90;
        const anchorPercentage = 50;

        const { width, height } = driver.getWindowSize();
        const anchor = height * anchorPercentage / 100;
        const startPoint = width * startPercentage / 100;
        const endPoint = width * endPercentage / 100;
        driver.touchPerform([
        {
            action: 'press',
            options: {
            x: startPoint,
            y: anchor,
            },
        },
        {
            action: 'wait',
            options: {
            ms: 100,
            },
        },
        {
            action: 'moveTo',
            options: {
            x: endPoint,
            y: anchor,
            },
        },
        {
            action: 'release',
            options: {},
        },
        ]);
        allureReporter.endStep();
    }

    async swipeDown(){
        allureReporter.startStep('Swipe Down');
        const startPercentage = 90;
        const endPercentage = 10;
        const anchorPercentage = 50;

        const { width, height } = driver.getWindowSize();
        const anchor = height * anchorPercentage / 100;
        const startPoint = width * startPercentage / 100;
        const endPoint = width * endPercentage / 100;
        driver.touchPerform([
        {
            action: 'press',
            options: {
            x: startPoint,
            y: anchor,
            },
        },
        {
            action: 'wait',
            options: {
            ms: 100,
            },
        },
        {
            action: 'moveTo',
            options: {
            x: endPoint,
            y: anchor,
            },
        },
        {
            action: 'release',
            options: {},
        },
        ]);
        allureReporter.endStep();
    }
}

export default new CommonAction();