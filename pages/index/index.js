//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    TabCur: 0,
    wardrobe: [{
      name: '衬衣',
      type: 'cy',
      num: 2,
      imgShow: true,
      offset: 1,
      double: true,
      badge: false
    }, {
      name: '马甲',
      type: 'mj',
      num: 1,
      imgShow: true,
      offset: 1,
      double: true,
      badge: false
    }, {
      name: '西服',
      type: 'xf',
      num: 7,
      imgShow: true,
      offset: 1,
      double: true,
      badge: false
    }, {
      name: '大衣',
      type: 'dy',
      num: 5,
      imgShow: true,
      offset: 1,
      double: true,
      badge: false
    }, {
      name: '西裤',
      type: 'xk',
      num: 4,
      imgShow: true,
      offset: 1,
      double: true,
      badge: false
    }],
    list: ['cy', 'mj', 'xf', 'dy', 'xk']
  },
  //事件处理函数
  bingImgChange(e) {
    let type = e.currentTarget.dataset.type;
    let cur = e.currentTarget.dataset.cur;
    this.resetData(type, cur);
  },
  resetData(type, cur) {
    let flag = false;
    let fs = false;
    let badge = 0;
    let arr = this.data.list;
    let idx = 0;
    arr.forEach(key => {
      if (key == type) {
        let offset = this.data.wardrobe[idx].offset;
        let double = this.data.wardrobe[idx].double;
        //console.log("cur:"+cur+",offset:"+offset+",double:"+double);
        if ((offset == cur) && !double) {
          flag = true;
          fs = true;
        }
        if (!flag) {
          badge = true;
        }
        let changeOffset = "wardrobe[" + idx + "].offset";
        let changeImgShow = "wardrobe[" + idx + "].imgShow";
        let changeDouble = "wardrobe[" + idx + "].double";
        let changeBadge = "wardrobe[" + idx + "].badge";
        this.setData({
          [changeOffset]: cur,
          [changeImgShow]: flag,
          [changeDouble]: fs,
          [changeBadge]: badge
        })
      }
      idx++;
    });
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  clearAll() {
    let that = this;
    wx.showModal({
      title: '重置',
      content: '是否要重新换装？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          let arr = that.data.wardrobe;
          let idx = 0;
          arr.forEach(key => {
            let changeOffset = "wardrobe[" + idx + "].offset";
            let changeImgShow = "wardrobe[" + idx + "].imgShow";
            let changeDouble = "wardrobe[" + idx + "].double";
            let changeBadge = "wardrobe[" + idx + "].badge";
            that.setData({
              [changeOffset]: 1,
              [changeImgShow]: true,
              [changeDouble]: true,
              [changeBadge]: false
            })
            idx++;
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }
})
