import express from 'express'

const app = express()

app.get('/serve', (req, res) => {
    res.status(200).send('hello')
})

app.listen(5000, () => {
    console.log('listening')
})