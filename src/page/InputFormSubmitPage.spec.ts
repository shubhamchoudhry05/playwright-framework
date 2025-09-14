import {Page} from "playwright/test";
import {inputFormSubmitLocators} from "../locator/inputFormSubmitLocators";

export class InputFormSubmitPage{
    private readonly page: Page
    constructor(page:Page){
        this.page = page
    }

    async clickOnInputFormSubmitLink(){
        await this.page.locator(inputFormSubmitLocators.inputFormSubmitLink).click();
        console.log("Clicked on Input Form Submit Link");
    }
}