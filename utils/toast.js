function toast(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "none",
    duration
  })
}

toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: "error",
    duration
  })
}
toast.loading = function(title) {
  uni.showToast({
    title,
    icon: "loading",
  })
}
export default toast
