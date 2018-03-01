/**
 * 在无头浏览器中将一个网页截图保存为图片
 * **/

const puppeteer = require('puppeteer')
const saveScreenshot = async (url, path) => {
  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: false,
    timeout: 30000,
    slowMo: 250 // slow down by 250ms
  })
  // 打开页面
  const page = await browser.newPage()
  // 设置浏览器视窗
  page.setViewport({
    width: 1376,
    height: 768
  })
  // 地址栏输入网址
  await page.goto(url, {waitUntil: 'networkidle0'})
  // 截图
  await page.screenshot({path})
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  })
  console.log('视窗信息:', dimensions)

  // 执行计算
  const bodyHandle = await page.$('body')
  const html = await page.evaluate(body => body.innerHTML, bodyHandle)

  // console.log('html:', html)
  await bodyHandle.dispose()

  await page.focus('#sb_form_q')
  await page.type('#sb_form_q', 'puppeteer', {delay: 100})
  await page.keyboard.press('Enter')
  // 关闭浏览器
  // await browser.close()
}
if (require.main === module) {
  // for test
  saveScreenshot('https://www.bing.com/', '../static/img/bing.png')
}