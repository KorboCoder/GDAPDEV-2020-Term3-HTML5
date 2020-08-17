const express =  require('express')
const app = new express();
const port = 3000

app.get('/hello_world', (req, res) => {
    console.log(`Query: ${JSON.stringify(req.query)}`)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})