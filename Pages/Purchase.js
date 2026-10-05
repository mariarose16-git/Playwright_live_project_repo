import { expect,test } from '@playwright/test'

export class Purchase{

    constructor(page){
        this.page=page;
        this.loginlink=page.locator("//a[@id='login2']");
        this.loginusername=page.locator('#loginusername');
        this.loginpassword=page.locator('#loginpassword');
        this.loginbutton = page.getByRole('button', { name: 'Log in' })
        this.selectcatogory=page.locator("//a[text()='Phones']");
         this.productSelect = page.locator("//a[text()='Samsung galaxy s6']");
         this.selectcatogorymonitor=page.locator("//a[text()='Monitors']");
         this.productSelectmonitor = page.getByText('Apple monitor 24')
         //this.productSelectmonitor = page.locator("//a[text()='Apple monitor 24']");
         this.addtocartbutton =page.locator("//a[text()='Add to cart']");
         this.clickcart=page.locator("#cartur");
         this.placeorderbutton=page.getByRole('button',{name: 'Place Order'});
         this.ordername=page.locator('#name');
         this.ordercountry=page.locator('#country');
         this.ordercity=page.locator('#city');
         this.ordermonth=page.locator('#month');
         this.ordercreditcard=page.locator('#card');
         this.orderyear=page.locator('#year');
         this.purchasebutton=page.getByRole('button',{name:'Purchase'});
         this.clickok=page.getByRole('button', { name: 'OK' });
         this.confirmation = page.locator('.sweet-alert');
         //this.confirmation = page.getByText('Thank you for your purchase!');

         
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

    async selectCatogory(){
        await this.selectcatogory.click();
    }

    async selectcatogoryMonitor(){
      await this.selectcatogorymonitor.click();
    }
    async productSelectMonitor(){
    await this.productSelectmonitor.click();
    }

    async clickProduct(){
        await this.productSelect.click();
    }

    async addToCart(){

    this.page.on('dialog',async dialog =>{
    expect(dialog.message()).toBe('Product added.');
    await dialog.accept();
})
    
    await this.addtocartbutton.click();
   

}

async clickCart(){
    await this.clickcart.click();
}

async placeOrderButton(){
    await this.placeorderbutton.click();

}

async fillOrderdetails(name,country,city,creditcard,month,year){
    await this.ordername.fill(name);
    await this.ordercountry.fill(country);
    await this.ordercity.fill(city);
    await this.ordercreditcard.fill(creditcard);
    await this.ordermonth.fill(month);
    await this.orderyear.fill(year);
}
async clickPurchasebutton(){
    await this.purchasebutton.click();
  //  await this.clickok.click();
}


async verifyPurchase() {

  await expect(this.confirmation).toContainText("Thank you for your purchase!");
}
}