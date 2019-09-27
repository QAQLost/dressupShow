//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    TabCur: 0,
    wardrobe:[{
      name:'衬衣',
      type:'cy',
      num:2,
      imgShow:true,
      offset:1,
      double:true  
    },{
      name:'马甲',
      type:'mj',
      num:1,
      imgShow:true,
      offset:1,
      double:true 
    },{
      name:'西服',
      type:'xf',
      num:7,
      imgShow:true,
      offset:1,
      double:true 
    },{
      name:'大衣',
      type:'dy',
      num:5,
      imgShow:true,
      offset:1,
      double:true 
    },{
      name:'西裤',
      type:'xk',
      num:4,
      imgShow:true,
      offset:1,
      double:true 
    }],
    list:['cy','mj','xf','dy','xk']
  },
  //事件处理函数
  bingImgChange(e) {
    let type = e.currentTarget.dataset.type;
    let cur = e.currentTarget.dataset.cur;
    this.resetData(type,cur);
  },
  resetData(type,cur){
    let flag = false;
    let fs = false;
    let arr = this.data.list;
    let idx = 0;
    arr.forEach(key => {
      if(key==type){
        let offset = this.data.wardrobe[idx].offset;
        let double = this.data.wardrobe[idx].double;
        //console.log("cur:"+cur+",offset:"+offset+",double:"+double);
        if((offset==cur)&&!double){
          flag=true;
          fs=true;
        }
        let changeOffset = "wardrobe["+idx+"].offset";
        let changeImgShow = "wardrobe["+idx+"].imgShow";
        let changeDouble = "wardrobe["+idx+"].double";
        this.setData({
          [changeOffset]:cur,
          [changeImgShow]:flag,
          [changeDouble]:fs
        })        
      }
      idx++;
    });
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  }
})
