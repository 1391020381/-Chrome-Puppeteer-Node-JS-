/**
 * 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
 * **/


class Tools {
  static timeout (delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(1)
        } catch (e) {
          reject(0)
        }
      }, delay)
    })
  }

  /**
   * [TimeTools description]
   * @param {[type]} timestamp   12323212
   * @param {[type]} formatStr  Y年M月D日
   * M:monthi 1-12
   * Y year
   * D date  0 -31
   * **/
  static moment (formatStr, timestamp) {
    let date = new Date(timestamp || new Date().getTime())

    let M = date.getMonth() + 1

    let Y = date.getFullYear()

    let D = date.getDate()

    let h = date.getHours()

    let m = date.getMinutes()

    let s = date.getSeconds()

    return formatStr.replace('M', M).replace('Y', Y).replace('D', D).replace('h', h).replace('m', m).replace('s', s)
  }
}

module.exports = Tools