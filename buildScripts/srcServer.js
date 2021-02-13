import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

const PORT = 3000;
let app = express();
let compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../src/index.html'))
})

app.listen(PORT, err => {
  if(err) {
    console.error('Ya done went and caused an error :: ', err)
  } else {
    open('http://localhost:' + PORT)
  }
})
