import {test,expect} from '@playwright/test'
import {AddtoCart} from '../Pages/AddtoCart.js'
import data from '../Utils/Data.json' with {type:'json'}

test.only('TC7: Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup ',async({page})=>{

    const loginusername5=data.validpassword;
    const loginpassword5=data.validpassword;
    const addtocart=new AddtoCart(page);
    await addtocart.navigateToApplication();
    await addtocart.loginlinkclick();
    await addtocart.login(loginusername5,loginpassword5)
    await addtocart.clickProduct();
    await addtocart.addToCart();
    await addtocart.verifyAddtocart();
})