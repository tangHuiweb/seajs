/**
 * Created by qianfeng on 2017/1/9.
 */

fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
}).match('*.{js,css,jpg}',{//添加hash
    useHash: true
}).match('*.js', {
    optimizer: fis.plugin('uglify-js')
}).match('*.css', {
    optimizer: fis.plugin('clean-css')
}).match('*.png', {
    optimizer: fis.plugin('png-compressor')
}).match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
}).match('::package', {
    postpackager: fis.plugin('loader')
}).match('{assets/js/zepto.min.js,assets/js/zepto.tap.js}',{
    packTo:'assets/js/zepto.js'
});

fis.media('debug').match('*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
});

fis.match('*.js',{
    isMod:true
});
fis.match('/static/sea.js', {
  isMod: false
});
fis.hook('cmd',{
    paths:{
        changeText:'./seajs-module/changeText.js',
        jQuery:'./seajs-module/jquery-1.12.3.js'
    }
});
