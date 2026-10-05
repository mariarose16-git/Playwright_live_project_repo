import {test,expect} from '@playwright/test'
import { Login } from '../Pages/Login.js';
import data from '../Utils/Data.json' with { type: 'json' };

test('Testing login with valid credentials', async({page})=>{

    const loginusername =data.validusername;
    const loginpassword=data.validpassword;
    const loginobj=new Login(page);
    await loginobj.navigateToApplication();
    await loginobj.loginlinkclick();
    await loginobj.login(loginusername,loginpassword);
  // await loginobj.verifyLogInHomePage(loginusername);
    await loginobj.verifyLogInHomePage();
})

test('Testing login with invalid username and valid password', async({page})=>{

    const loginusername1 =data.invalidusername;
    const loginpassword1=data.validpassword;
    const loginobj1=new Login(page);
    await loginobj1.navigateToApplication();
   await loginobj1.loginlinkclick();
    await loginobj1.login(loginusername1,loginpassword1);
   await loginobj1.verifyInvalidCrendetial();

})

test('Testing login with valid username and invalid password ',async({page})=>{

   const loginusername2 =data.validusername;
    const loginpassword2=data.invalidpassword;
    const loginobj2=new Login(page);
    await loginobj2.navigateToApplication();
   await loginobj2.loginlinkclick();
    await loginobj2.login(loginusername2,loginpassword2);
    await loginobj2.verifyInvalidCrendetial();
})

test('Testing login with invalid username and invalid password ',async({page})=>{

    const loginusername3 =data.invalidusername;
    const loginpassword3=data.invalidpassword;
    const loginobj3=new Login(page);
    await loginobj3.navigateToApplication();
   await loginobj3.loginlinkclick();
    await loginobj3.login(loginusername3,loginpassword3);
    await loginobj3.verifyInvalidCrendetial();
})

