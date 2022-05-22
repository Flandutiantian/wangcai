const path = require('path')
const loader = require('sass-loader')

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/Icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()//包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svg-loder').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)//其他svg loader排除 icons 目录
  
  
  
    } 
  }
  
