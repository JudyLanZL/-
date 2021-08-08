// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    circular:true,
    autoplay:true,
    images: ['like.png', '头像.png','房子.png'],
    list:[
      {
        shoucang: 123,
        dianzan:79,
      },
      {
        shoucang: 13,
        dianzan:790,
      },
      {
        shoucang: 23,
        dianzan:700,
      },
      {
        shoucang: 1,
        dianzan:7,
      },
      {
        shoucang: 1000,
        dianzan:10000,
      },
      {
        shoucang: 9730,
        dianzan:102893,
      }
    ]
  },
  return : function(){
    wx.navigateTo({
      url: '/pages/bb/bb',
    })
  },
 more : function(){
  wx.navigateTo({
    url: '/pages/bb/bb',
  })
 },
 person : function()
 {
   wx.navigateTo({
     url: '/pages/person/person',
   })
 },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})