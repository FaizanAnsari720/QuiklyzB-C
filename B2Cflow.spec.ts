import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sit.quiklyz.com/');
  await page.locator('//*[@id="mat-dialog-0"]/fg-modal-dialog/form/div/div[2]/div/fg-modal-body/div/div[2]/div/fg-custom-container/div/div/div/div/fg-client-context-switcher/div/div[2]/div/div[1]/div[1]/div[1]').click();
  await page.getByRole('button',{name:'Login  '}).click();
  //await page.locator('//*[@id="mat-menu-panel-1"]/div/div/button[1]/span').click();
 // await page.getByRole('button',{name:'Login'}).click();
  await page.locator('//*[@id="mat-menu-panel-1"]/div/div/button[2]/span[2]').click();
  //await page.getByRole('link',{ name:' Start here'}).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByPlaceholder('Enter your First Name').fill('Faizan');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByPlaceholder('Enter your Last Name').fill('Ansari');

  await page.getByRole('textbox', { name: 'Email Address' }).click();

  await page.getByPlaceholder('Enter your Email Address').fill('faizanansari257@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your Mobile Number' }).click();
  await page.getByPlaceholder('Enter your Mobile Number').fill('9892508327');
  await page.locator('.mat-checkbox-inner-container').first().click();
 
  await page.getByRole('tabpanel', { name: 'Register' }).getByRole('button', { name: 'Edit Record' }).click();
  await page.locator('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[1]/input').first().fill('1');
  await page.locator('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[2]/input').first().fill('2');
  await page.locator('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[3]/input').first().fill('3');
  await page.locator('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[4]/input').first().fill('4');
  await page.locator('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[5]/input').first().fill('5');
  await page.locator('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/div[1]/div[2]/div/div[3]/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/fg-client-otp-field/form/div[1]/div[2]/div/div/div[6]/input').first().fill('6');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://sit.quiklyz.com/');
  await page.getByRole('link',{ name :' Find Cars '}).click();
  await page.getByRole('link',{ name :'Maruti Suzuki Swift '}).click();
  await page.locator('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[2]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[8]/div/div[1]/div[1]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-single-action/fg-action-builder-actions/button').click();
 
  await page.getByRole('textbox', { name: 'Enter first name as per PAN' }).click();
  await page.getByPlaceholder('Enter first name as per PAN').fill('Nayan');
  await page.getByRole('textbox', { name: 'Enter last name as per PAN' }).click();
  await page.getByPlaceholder('Enter last name as per PAN').fill('Suresh Aher');
  await page.getByRole('textbox', { name: 'PAN Number' }).click();
  await page.getByLabel('PAN Number *').fill('DHZPA4162A');
  await page.getByRole('button', { name: 'Open calendar' }).click();
  await page.getByRole('button', { name: 'Choose month and year' }).click();
  await page.getByRole('button', { name: 'Previous 24 years' }).click();
  await page.getByRole('button', { name: '1995' }).click();
  await page.getByRole('button', { name: 'November 1995' }).click();
  await page.getByRole('button', { name: '28 November 1995' }).click();
  await page.locator('[id="mat-checkbox-6-input"]').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('//*[@id="mat-input-30"]').click();
  await page.getByLabel('Address *').fill('B-13');
  await page.locator('//*[@id="mat-input-31"]').click();
  await page.getByLabel('PIN Code *').fill('400018');
  await page.locator('//*[@id="mat-input-32"]"]').click();
  await page.getByLabel('City *').fill('mumbai');
  await page.getByRole('combobox', { name: 'State *' }).locator('div').nth(3).click();
  await page.getByText('Maharashtra').click();
  await page.getByRole('button', { name: 'Edit Record' }).click();
#




});
