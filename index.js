const puppeteer = require('puppeteer')

// const tempPath = __dirname + '/static/image'

async function getPic (url) {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto(url)
  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: './static/img/bing.png', fullPage: true, type: 'png'})
  await browser.close()
}

getPic('https://www.bing.com/')