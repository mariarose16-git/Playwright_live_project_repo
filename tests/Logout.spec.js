import {Purchase} from '../Pages/Purchase.js'
import{test,expect} from '@playwright/test'
import data from '../Utils/Data.json/' with {type:'json'}
import { Logout } from '../Pages/Logout.js';

test('Testing Logout functionality',async({page})=>{
    const loginusername6=data.validpassword;
    const loginpassword6=data.validpassword;
    const logout =new Logout(page);
    await logout.navigateToApplication();
    await logout.loginlinkclick();
    await logout.login(loginusername6,loginpassword6);
    await logout.clickLogout();
    await logout.verifyLogout();

})