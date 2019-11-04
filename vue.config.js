// 这个文件应该导出包含了选项的对象
module.exports = {
    // 选项
    publicPath: process.env.NODE_ENV === 'production' ? '/myapp/' : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: '',
        //         changeOrigin: true,
        //     }
        // }
    }
}