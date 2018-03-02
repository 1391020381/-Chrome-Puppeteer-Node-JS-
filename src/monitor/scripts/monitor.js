const url = 'https://fed.renren.com/'   // 会编程的银猪
const puppeteer = require('puppeteer')
let {timeout, moment} = require('../../../tools/tools')
const path = require('path')

function monitor () {
  puppeteer.launch({headless: false}).then(async borwser => {
    let page = await borwser.newPage()
    let date = moment('Y-M-DH:m:s')

    await page.goto(url)
    await timeout(3000)

    let info = await page.evaluate(() => {
      let post = [...document.querySelectorAll('.post-title')]
      console.log('post:', post)
      return post.map(a => a.innerText)
    })
    for (let i = 0; i < info.length; i++) {
      if (!info[i]) {
        let options = {
          api: 'http://127.0.0.1:3000/moitor',
          img: `fed-${date}.png`
        }
        axios.get(options.api, {
          params: {
            img: options.img
          }
        })
        await page.screenshot({path: `../../../data/monitor/err/fed-${date}.png`, type: 'png'})
        borwser.close()
      }
    }
    // let base = `#nav > li.cat-item.cat-item-7`
    // await  page.waitForSelector(base)
    // await page.click(base)
    // await page.screenshot({path: './fed.png'})
    // await page.screenshot({path: path.join(`/data/monitor/success/fed-${date}.png`)})
    borwser.close()
  })
}

monitor()