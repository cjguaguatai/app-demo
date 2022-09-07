import flyio from '@/utils/request.js'

// 获取banner
export const getHomeBanner = () => flyio.get('/home/swiperdata')

// 获取导航
export const getNavList = () => flyio.get('/home/catitems')

//获取楼层数据
export const getFloorList = () => flyio.get('/home/floordata')
