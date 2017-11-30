/**
 * Created by wconisan on 2017/11/30.
 */
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {

  },
  onLoad (option) {
    let _this = this
    wx.request({
      url: `https://www.bilibili.com/read/cv${option.cvid}`,
      method: 'GET',
      dataType: 'text',
      success (res) {
        let html = res.data.match(/<div class="article-holder"><p>.*<\/p><\/div>/)[0]
        // let html = '<div>asdasd</div>'
        console.log(html)
        WxParse.wxParse('article', 'html', html, _this);
      }
    })
  }
})