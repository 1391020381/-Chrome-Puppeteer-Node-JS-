const puppeteer = require('puppeteer')

let scrape = async () => {
  const brower = await puppeteer.launch({headless: false})
  const page = await brower.newPage()
  await page.goto('http://books.toscrape.com/')
  // await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
  await page.waitFor(1000)
  const result = await page.evaluate(() => {  // page.evaluate()方法可以用来执行浏览器内置DOM API
    let data = []; // 创建一个数组保存结果
    let elements = document.querySelectorAll('.product_pod'); // 选择所有书籍
    console.log('elements:', elements)
    for (var element of elements) { // 遍历书籍列表
      let title = element.childNodes[5].innerText; // 提取标题信息
      let price = element.childNodes[7].children[0].innerText; // 提取价格信息

      data.push({title, price}); // 组合数据放入数组
    }

    return data
  })
  // Scrape
  brower.close()
  return result
}

scrape().then(value => {
  console.log('value:', value)
})