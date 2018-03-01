// 在 chrome的地址栏  chrome://tracing/
const puppeteer = require('puppeteer')
const trace = async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.tracing.start({path: '../static/trace.json'})
  await page.goto('https://www.bing.com/')
  await page.tracing.stop()
}
trace()