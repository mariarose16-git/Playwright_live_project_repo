import { expect } from '@playwright/test'
import { waitForDebugger } from 'node:inspector';

export class Signup{
    constructor(page){
        this.page=page;
        this.signup=page.locator('#signin2');
        this.signupuname=page.locator('#sign-username');
        this.signuppassword=page.locator('#sign-password');
        this.sigupbutton = page.getByRole('button', { name: 'Sign up' })
        //this.closebutton=page.getByRole('button',{name: 'Close'})
         this.signupclose= page.locator('.modal-footer').getByRole('button', { name: 'Close' })
        this.loginlink=page.locator("//a[@id='login2']");
}
    

    async navigateToApplication(){
        await this.page.goto("https://www.demoblaze.com/");
        
    }

    async clickSignuplink(){
        await this.signup.click();
    }

    async signUp(uname,pass){
        await this.signupuname.fill(uname);
        await this.signuppassword.fill(pass);
        
    }

    async signupClick(){
        await this.sigupbutton.click();
    }

    async closeButton(){
        await this.signupclose.click();

    }

    async verifySignupbutton(){
    

    this.page.on('dialog',async dialog =>{
    expect(dialog.message()).toBe('Sign up successful.');
    
})
        
}

async verifyClosebutton(){
    await expect(this.loginlink).toBeEnabled();
}
}