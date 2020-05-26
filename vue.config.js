module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://192.168.1.27',
        changeOrigin: true
      },
    }
  },
  pages: {
    app: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      excludeChunks: ['silent-renew-oidc']
    },
    silentrenewoidc: {
      entry: 'src/silent-renew-oidc.js',
      template: 'public/silent-renew-oidc.html',
      filename: 'silent-renew-oidc.html',
      excludeChunks: ['app']
    }
  }
}
