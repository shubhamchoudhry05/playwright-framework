import {Page} from "playwright/test";
import {simpleFormDemoLocators} from "../locator/simpleFormDemoLocators";

export class SimpleFormDemoPage{
    private readonly page: Page
    constructor(page:Page){
        this.page = page
    }

    async clickOnSimpleFormDemoLink(){
        await this.page.locator(simpleFormDemoLocators.simpleFormDemoLink).click();
        console.log("Clicked on Simple Form Submit Link");
    }
}