const app = getApp()
var that
Page({
  /* 页面初始数据 */
  data: {
    userInfo: {},
    hidden_actionSheet: true,
  },

  /**
   * 页面加载
   */
  onLoad: function () {
    that = this
    that.isAuthorize().then(res => { //用户已经授权获取基本信息
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: app.globalData.userInfo,
          })
        }
      })
    }).catch(res => { //用户没有授权获取基本信息
      that.setData({
        hidden_actionSheet: false,
      })
    })
  },

  /* 是否授权获取基本信息，已经授权返回到then，没有授权返回到catch */
  isAuthorize() {
    return new Promise((resolve, reject) => {
      // 获取用户授权状态
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            console.log("全局--用户已经授权")
            resolve()
          } else {
            console.log("全局--用户还没有授权获取基本信息")
            reject()
          }
        }
      })
    })
  },

  // 底下的取消按钮
  actionSheetChange: function (e) {
    wx.showModal({
      showCancel: false,
      content: '部分功能需要登录才能使用',
    })
  },

  // 获取用户信息：拒绝还是接受都会进入这里
  allowGetUserInfo: function (e) {
    if (e.detail.rawData) { // 权限选择了：允许
      that.setData({
        userInfo: app.globalData.userInfo,
      })
      // 获取用户信息
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: app.globalData.userInfo,
            hidden_actionSheet: true, // 隐藏actionSheet
          })
        }
      })
    } else { // 权限选择了：拒绝
      wx.showModal({
        showCancel: false,
        content: '部分功能需要登录才能使用',
      })
    }
  },
})

