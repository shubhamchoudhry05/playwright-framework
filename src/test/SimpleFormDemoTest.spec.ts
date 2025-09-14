import {test} from "playwright/test";
import {SimpleFormDemoPage} from "../page/SimpleFormDemoPage.spec"

test.only("Input Submit Form", async({page}) =>{
    const simple = new SimpleFormDemoPage(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await simple.clickOnSimpleFormDemoLink();
    await page.waitForTimeout(2000);
})