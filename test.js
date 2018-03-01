const puppeteer = require('puppeteer')

// async function getPic (url) {
//   const browser = await puppeteer.launch({headless: false})
//   const page = await browser.newPage()
//   await page.goto(url, {waitUntil: 'networkidle0'})
//   // await page.setViewport({width: 100, height: 500})
//   await page.screenshot({path: './data/puppeteer/puppeteer.png', fullPage: false, type: 'png'})
//   await browser.close()
// }
//
// getPic('https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions')

async function getBtn () {
  const browser = await puppeteer.launch(
    {
      headless: false,
      timeout: 50000,
      slowMo: 250 // slow down by 250ms
    }
  )
  const page = await browser.newPage()
  page.setViewport({
    width: 1300,
    height: 500
  })
  await  page.goto('https://juejin.im/')
  const login = '#juejin > div.view-container > div > header > div > nav > ul > li.nav-item.auth > span.login'
  await  page.waitForSelector(login)
  await page.click(login)
  const loginName = '#juejin > div.global-component-box > div.auth-modal-box > form > div.panel > div.input-group > div:nth-child(1) > input'
  const password = '#juejin > div.global-component-box > div.auth-modal-box > form > div.panel > div.input-group > div:nth-child(2) > input'
  const loginBtn = `#juejin > div.global-component-box > div.auth-modal-box > form > div.panel > button`
  const searchInput = `#juejin > div.view-container > div > header > div > nav > ul > li.nav-item.search > form > input`
  const searchIcon = `#juejin > div.view-container > div > header > div > nav > ul > li.nav-item.search > form > img`
  await page.waitForSelector(loginName)
  await page.waitForSelector(password)
  await page.waitForSelector(loginBtn)
  await page.screenshot({path: 'static/img/juejin.png'})
  await page.type(loginName, '1391020381@qq.com')
  await page.screenshot({path: 'static/img/juejin-loginName.png'})
  await page.type(password, 'tobenuonejustdoit')
  await page.screenshot({path: 'static/img/juejin-password.png'})
  await page.click(loginBtn)
  await page.screenshot({path: 'static/img/juejin-login.png'})
  await page.waitForSelector(searchInput)
  await page.type(searchInput, 'nodejs')
  await page.click(searchIcon)

}

getBtn()