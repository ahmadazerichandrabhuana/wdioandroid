# Android Test Automation using WebdriverIO with Allure Report
This is a simple sample of Android Test Automation using WebdriverIO with Allure Report.

## Requirements

1. Install [VS Code](https://code.visualstudio.com/) or any Code Editor you're comfort with. 
2. Install [JDK](https://www.oracle.com/java/technologies/downloads/).
3. Install [Android Studio](https://developer.android.com/studio/install), and install Android SDK using Android Studio.
4. Update JAVA_HOME and ANDROID_HOME to yout PATH file. There is no easy way to explain this. You can refer [here](https://medium.com/@zorozeri/setting-up-java-home-5abae0118bfe) or Google it.
5. Install [Allure Report](https://allurereport.org/docs/install/).
6. Install [NodeJS](https://nodejs.org/en/download/prebuilt-installer). 
7. Install [Appium](https://appium.io/docs/en/2.2/quickstart/install/) and install appium driver `uiautomator2`.
8. Install and run [appium-doctor](https://www.npmjs.com/package/appium-doctor) to make sure all your appium's dependencies are OK, trouble shoot if any red "x" appears (you need to google it yourself).
9. Install [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/), or add ADB installed from Android Studio into your PATH file.
10. Download and install this [Demo Apps](https://github.com/saucelabs/my-demo-app-rn/releases)(`.apk` file) into your Android Device (credit to [Wim Selles](https://github.com/wswebcreation)).
11. Download and open this code repository on your local Code Editor and run this commands :
    ```
    npm install
    ```
   
## Run Tests
* Run all tests : 
   ```
   npm run wdio
   ```

* Run specific test :
  Open file `wdio.conf.js` and update line 25-28 (comment & un-comment) for necessary file to be executed.

## Open Report
*  Generate report file and open it :

   ```
   allure generate --clean && allure open
   ```
*  Open report without generating report file :

   ```
   allure serve
   ```
*  Troubleshoot Allure not recognized on PowerShell Windows :
   - Use Command Prompt instead of PowerShell, or
   - Run this command on PowerShell : 
     ```
     npm install -g allure-commandline --save-dev
     ```
   

## Short Repository Explanation

This sample Test Automation only consists of 1 folder : `test`, and have 2 sub-folders : 
   ```
   > pageobjects : each file represents individual apps screen (including locators and actions on each page), with exception file 'common.action.js' (contain Common Action on Android)
   > testcases   : contains testcases to be executed
   ```
File `package.json` and `package-lock.json` contains dependencies for the project, which can be initialized using commmand `npm install`.
File  `wdio.conf.js` is basic config file for wdio-based automation.

## WebdriverIO Appium Documentation
- https://webdriver.io/docs/api/appium/

## Appium Documentation
- https://appium.readthedocs.io/en/latest/en/commands/mobile-command/

## Specific Appium UIAutomator2 Documentation
- https://github.com/appium/appium-uiautomator2-driver/blob/master/docs/android-mobile-gestures.md
