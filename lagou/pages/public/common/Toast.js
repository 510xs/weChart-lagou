export function Toast(title,type,time){
  wx.showToast({
    title: title,
    icon: type,
    duration: time
  })
}

export function Loading(title){
  wx.showLoading({
    title: title,
  })
}