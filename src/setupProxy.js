const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy.createProxyMiddleware('/api',{
            target:'http://101.42.251.224:3000',
            changeOrigin:true
        })
    )
}