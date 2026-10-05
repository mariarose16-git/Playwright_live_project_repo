import { expect,test } from '@playwright/test'

export class Logout{

    constructor(page){
        this.page=page;
        this.page=page;
        this.loginlink=page.locator("//a[@id='login2']");
        this.loginusername=page.locator('#loginusername');
        this.loginpassword=page.locator('#loginpassword');
        this.loginbutton = page.getByRole('button', { name: 'Log in' })
        this.logoutbutton=page.locator('#logout2');

    }

    async navigateToApplication(){
        await this.page.goto("https://www.demoblaze.com/");
        
    }

    async loginlinkclick(){
        await this.loginlink.click();
    }

    async login(uname,pass){

        await this.loginusername.fill(uname);
        await this.loginpassword.fill(pass);
        await this.loginbutton.click();

    }

    async clickLogout(){
        await this.logoutbutton.click();
    }

    async verifyLogout(){
        await expect(this.loginlink).toBeEnabled();
    }
}