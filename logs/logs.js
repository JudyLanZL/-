Page({ 
  data: { 
  canIUse: wx.canIUse('button.open-type.getUserInfo'),
  phone: '', 
  password:'' 
  }, 
  onLoad: function() {
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  },
  
 // 获取输入账号 
  phoneInput :function (e) { 
  this.setData({ 
   phone:e.detail.value 
  }) 
  }, 
  
 // 获取输入密码 
  passwordInput :function (e) { 
  this.setData({ 
   password:e.detail.value 
  }) 
  }, 
  
 // 登录 
  login: function () { 
  if(this.data.phone.length == 0 || this.data.password.length == 0){ 
   wx.showToast({ 
   title: '用户名和密码不能为空', 
   icon: 'loading', 
   duration: 2000 
   }) 
 }else { 
  // 这里修改成跳转的页面 
   wx.showToast({ 
   title: '登录成功', 
   icon: 'success', 
   duration: 2000 
   }) 
  } 
  } 
 }) 