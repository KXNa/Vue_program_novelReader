const path = require('path')
const bookshelf = require('./mock/bookshelf.json')
const recommend = require('./mock/novel_recommend.json')
const excellent = require('./mock/home_excellent.json')
const female = require('./mock/home_female.json')
const noveldetail = require('./mock/novel_detail.json')
const bookArticle = require('./mock/article.json')


module.exports = {
    configureWebpack: {
        devServer: {
            before: function (app, server) {
                app.get('/api/bookshelf', function (req, res) {
                    res.json(bookshelf.data);
                });
                app.get('/api/recommend', function (req, res) {
                    res.json(recommend.data);
                });
                app.get('/api/excellent', function (req, res) {
                    res.json(excellent.data.module);
                });
                app.get('/api/female', function (req, res) {
                    res.json(female.data.module);
                });
                app.get('/api/noveldetail', function (req, res) {
                    res.json(noveldetail.data);
                });
                app.get('/api/article', function (req, res) {
                    res.json(bookArticle.data);
                });
                
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
            path.resolve(__dirname, 'src/scss/*.scss'),
        ]
      }
    }
}
