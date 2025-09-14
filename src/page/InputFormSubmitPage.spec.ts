import {Page} from "playwright/test";
import {inputFormSubmit} from "../locator/inputFormSubmitLocators";

export class InputFormSubmitPage{
    private readonly page: Page
    constructor(page:Page){
        this.page = page
    }

    async clickOnInputFormSubmitLink(){
        await this.page.locator(inputFormSubmit.inputFormSubmitLink).click();
        console.log("Clicked on Input Form Submit Link");
        await this.page.locator(inputFormSubmit.submitButton).click();
        console.log("Clicked on Submit Button");
    }
}