const puppeteer = require('puppeteer')
const devices = require('puppeteer/DeviceDescriptors')
const iPhone6 = devices['iPhone 6']
const crawSpa = async url => {
  console.log('启动浏览器')
  const brower = await puppeteer.launch({
    headless: false
  })
  console.log('打开页面')
  const page = await brower.newPage()
  console.log('地址栏输入网页地址')
  await page.goto(url)
  await  page.emulate(iPhone6)
  await page.waitFor(3000)
  await  page.waitForSelector('body > div > div:nth-child(1) > div.search-wrapper > div')
  await page.tap('body > div > div:nth-child(1) > div.search-wrapper > div')
  await page.waitForSelector('body > div > section > form > input')
  await page.type('input[type="search"]', '肯德基', {delay: 200})
  await page.waitForSelector('body > div.app-2KdnP_1 > section > form > button')
  await page.waitFor(2000)
  await page.click('body > div > section > form > button')
}
crawSpa('https://h5.ele.me/msite')