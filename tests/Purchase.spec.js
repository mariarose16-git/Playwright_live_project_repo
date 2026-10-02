import {Purchase} from '../Pages/Purchase.js'
import{test,expect} from '@playwright/test'
import data from '../Utils/Data.json/' with {type:'json'}
//import { from } from 'node:stream/iter';


test('TC8: Login with valid credentials -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase',async({page})=>{

    const loginusername6=data.validpassword;
    const loginpassword6=data.validpassword;
    const pname=data.name;
    const pcountry=data.country;
    const city=data.city;
    const creditcard=data.creditcard;
    const month=data.month;
    const year=data.year;
    const purchase=new Purchase(page);
    await purchase.navigateToApplication();
    await purchase.loginlinkclick();
    await purchase.login(loginusername6,loginpassword6)
    await purchase.selectCatogory();
    await purchase.clickProduct();
    await purchase.addToCart();
    await purchase.clickCart();
    await purchase.placeOrderButton();
    await purchase.fillOrderdetails(pname,pcountry,city,creditcard,month,year)
    await purchase.clickPurchasebutton();

})

test(' TC9:Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase ',async({page})=>{
const loginusername7=data.validpassword;
    const loginpassword7=data.validpassword;
    const pname=data.name;
    const pcountry=data.country;
    const city=data.city;
    const creditcard=data.creditcard;
    const month=data.month;
    const year=data.year;
    const purchase=new Purchase(page);
    await purchase.navigateToApplication();
    await purchase.loginlinkclick();
    await purchase.login(loginusername7,loginpassword7)
    await purchase.selectcatogoryMonitor();
    await purchase.productSelectMonitor();
    await purchase.addToCart();
    await purchase.clickCart();
    await purchase.placeOrderButton();
    await purchase.fillOrderdetails(pname,pcountry,city,creditcard,month,year)
    await purchase.clickPurchasebutton();

})