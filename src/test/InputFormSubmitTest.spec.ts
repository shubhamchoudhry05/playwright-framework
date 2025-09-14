import {test} from "playwright/test";
import {InputFormSubmitPage} from "../page/InputFormSubmitPage.spec";

test("Input Submit Form", async({page}) =>{
    const input = new InputFormSubmitPage(page);
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await input.clickOnInputFormSubmitLink();
    await page.waitForTimeout(2000);
})