import {test} from '@playwright/test'
import { Signup } from '../Pages/Signup';
import data from '../Utils/Data.json' with { type: 'json' };

test.only('Signup by entering data',async({page})=>{


    const username=data.validusername;
    const password=data.validpassword;
    //await page.goto("https://www.demoblaze.com/")
    const signup1= new Signup(page);
    await signup1.navigateToApplication();
    await signup1.clickSignuplink();
    await signup1.signUp(username,password);
    await signup1.signupClick();
    await signup1.verifySignupbutton();
})

test('Signup and click on close',async({page})=>{
    const usernameclose=data.validusername;
    const passwordclose=data.validpassword;
    const closeobj= new Signup(page);
    await closeobj.navigateToApplication();
    await closeobj.clickSignuplink();
    await closeobj.signUp(usernameclose,passwordclose);
    await closeobj.closeButton();
     await closeobj.verifyClosebutton();
})
