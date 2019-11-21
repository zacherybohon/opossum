module.exports = {
  pages: {
    index: {
      entry: './src/pages/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    auth: {
      entry: './src/pages/auth/main.js',
      template: 'public/index.html',
      title: 'Auth',
      chunks: ['chunk-vendors', 'chunk-common', 'auth']
    }
  }
}
