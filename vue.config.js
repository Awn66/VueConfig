module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://mobilecdn.kugou.com/',
                changeOrigin: true
            },
            '/wode': {
                target: 'http://45.40.245.25:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/wode': '/api'//重写路径
                }
            }
        }
    }
}
