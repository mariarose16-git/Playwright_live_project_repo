import {expect,test} from '@playwright/test'
import { waitForDebugger } from 'node:inspector';
export class Login{

    constructor(page){
        this.page=page;
       this.loginlink=page.locator("//a[@id='login2']");
       
      // this.loginlink = page.locator("//a[contains(text(), 'Log in')")
        this.loginusername=page.locator('#loginusername');
        this.loginpassword=page.locator('#loginpassword');
        this.loginbutton = page.getByRole('button', { name: 'Log in' })
         this.NameOfUser=page.locator('#nameofuser')
         this.productSelect = page.locator("//a[text()='Samsung galaxy s6']");
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
    async verifyLogInHomePage(username){
        //await expect(this.NameOfUser).toHaveText(`Welcome ${username}`);
        //await expect(this.page).toHaveURL('https://www.demoblaze.com/index.html');
        await expect(this.logoutbutton).toBeEnabled();
    }


async verifyInvalidCrendetial(){
    await expect(this.loginlink).toBeEnabled();
}
    
}