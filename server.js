const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' }).single('text_file')

const app = express()

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.error(err)
      return res.json({ success: false })
    }
    console.log('File uploaded', req.file)
    res.json({ success: true })
  })
})

const server = app.listen(3030, () => {
  console.log('Listening on port %d', server.address().port)
})
