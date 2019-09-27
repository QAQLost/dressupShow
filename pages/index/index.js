//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cy: true,
    mj: true,
    xf: true,
    dy: true,
    xk: true,
    cyOffset: 1,
    mjOffset: 1,
    xfOffset: 1,
    dyOffset: 1,
    xkOffset: 1,
    cyShow: true,
    mjShow: true,
    xfShow: true,
    dyShow: true,
    xkShow: true,
    TabCur: 0,
    wardrobe:[{
      name:'衬衣',
      type:'cy',
      num:3  
    },{
      name:'马甲',
      type:'mj',
      num:1 
    },{
      name:'西服',
      type:'xf',
      num:7
    },{
      name:'大衣',
      type:'dy',
      num:6
    },{
      name:'西裤',
      type:'xk',
      num:4
    }]
  },
  //事件处理函数
  bingImgChange(e) {
    let type = e.currentTarget.dataset.type;
    let cur = e.currentTarget.dataset.cur;
    let show = e.currentTarget.dataset.show;
    let flag = false;
    let fs = false;
    if (type == "cy") {
      let offset = this.data.cyOffset; 
      let isShow  = this.data.cyShow;   
      if ((offset == cur)&&show&&!isShow) {
        flag = true;
        fs=true;
      }
      //console.log("before:"+offset+",cur:"+cur+",hidden:"+flag,",fs:"+fs+",isShow:"+isShow);
      this.setData({
        cyOffset: cur,
        cy: flag,
        cyShow:fs
      })
    }
    fs=false;
    if (type == "mj") {
      let offset = this.data.mjOffset;
      let isShow  = this.data.mjShow;   
      if ((offset == cur)&&show&&!isShow) {
        flag = true;
        fs=true;
      }
      //console.log("before:"+offset+",cur:"+cur+",hidden:"+flag,",fs:"+fs+",isShow:"+isShow);
      this.setData({
        mjOffset: cur,
        mj: flag,
        mjShow:fs
      })
    }
    fs=false;
    if (type == "xf") {
      let offset = this.data.xfOffset;
      let isShow  = this.data.xfShow;   
      if ((offset == cur)&&show&&!isShow) {
        flag = true;
        fs=true;
      }
      //console.log("before:"+offset+",cur:"+cur+",hidden:"+flag,",fs:"+fs+",isShow:"+isShow);
      this.setData({
        xfOffset: cur,
        xf: flag,
        xfShow:fs
      })
    }
    fs=false;
    if (type == "dy") {
      let offset = this.data.dyOffset;
      let isShow  = this.data.dyShow;   
      if ((offset == cur)&&show&&!isShow) {
        flag = true;
        fs=true;
      }
      //console.log("before:"+offset+",cur:"+cur+",hidden:"+flag,",fs:"+fs+",isShow:"+isShow);
      this.setData({
        dyOffset: cur,
        dy: flag,
        dyShow:fs
      })
    }
    fs=false;
    if (type == "xk") {
      let offset = this.data.xkOffset;
      let isShow  = this.data.xkShow;   
      if ((offset == cur)&&show&&!isShow) {
        flag = true;
        fs=true;
      }
      //console.log("before:"+offset+",cur:"+cur+",hidden:"+flag,",fs:"+fs+",isShow:"+isShow);
      this.setData({
        xkOffset: cur,
        xk: flag,
        xkShow:fs
      })
    }
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  }
})
