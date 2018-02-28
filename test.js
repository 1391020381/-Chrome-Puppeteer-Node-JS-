const puppeteer = require('puppeteer')

async function getPic (url) {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto(url, {waitUntil: 'networkidle0'})
  // await page.setViewport({width: 100, height: 500})
  await page.screenshot({path: './data/puppeteer/puppeteer.png', fullPage: false, type: 'png'})
  await browser.close()
}

getPic('https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions')