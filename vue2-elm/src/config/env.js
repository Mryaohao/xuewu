/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'history';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
    //baseUrl = '//dev.xuangua.xyz';
    baseUrl = 'https://wemall.wxapp.xuangua.xyz/api/xuewu';
    // baseUrl = '//dev.xuangua.com/api/xuewu';
    imgBaseUrl = '/img/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '//dev.xuangua.xyz/api/xuewu';
    imgBaseUrl = '//dev.xuangua.xyz/img/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}