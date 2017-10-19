const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

const server = axios.create({
  baseURL: 'http://127.0.0.1:3030',
  headers: {'X-Custom-Header': 'foobar'}
})

const form = new FormData()
form.append('text_file', fs.createReadStream(__dirname + '/file.txt'))
// You actually may not even need axios:
// form.submit('http://127.0.0.1:3030/upload', (err, res) => {
//   if (err) throw err
//   console.log('Done :)')
// })

server.post('/upload', form, {
  headers: form.getHeaders()
})
.then((res) => {
  console.log('Done :)')
})
.catch((error) => {
  console.log('Something went wrong :(')
  console.error(error)
})
