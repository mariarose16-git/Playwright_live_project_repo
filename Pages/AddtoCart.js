
import {expect,test} from '@playwright/test'

export class AddtoCart{

    constructor(page){
        this.page=page;
        this.loginlink=page.locator("//a[@id='login2']");
      // this.loginlink = page.locator("//a[contains(text(), 'Log in')")
        this.loginusername=page.locator('#loginusername');
        this.loginpassword=page.locator('#loginpassword');
        this.loginbutton = page.getByRole('button', { name: 'Log in' })
         this.NameOfUser=page.locator('#nameofuser')
         this.productSelect = page.locator("//a[text()='Samsung galaxy s6']");
         this.addtocartbutton =page.locator("//a[text()='Add to cart']");
         this.addtocartlink =page.locator("//a[text()='Cart']");
          //this.deletelink =page.locator("//a[text()='Delete']");
       this.deletelink = page.getByRole('link', { name: 'Delete' });
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
    async clickProduct(){
        await this.productSelect.click();
    }
    
async verifyAddtocart()
{
await this.addtocartlink.click();
await expect(this.deletelink.first()).toBeVisible({ timeout: 10000 });
//await expect(this.deletelink.first()).toBeVisible();

}

    async addToCart(){
       
    this.page.on('dialog',async dialog =>{
    expect(dialog.message()).toBe('Product added.');
    await dialog.accept();
})
    
    await this.addtocartbutton.click();       

}}
