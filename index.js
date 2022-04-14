const express = require('express')
const mongoose = require('mongoose')
const app = express()


//forma de ler JSON / Middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const accountRoutes = require('./routes/accountRoutes')

app.use('/account', accountRoutes)

// rota inicial / Endpoint
app.get('/', (req, res) => {

    //mostrar req
    res.json({ message:'Oi Express'})
})

//entregar uma porta
mongoose
    .connect(
        'mongodb+srv://joaoabreu22:32913940Jw@apicluster0.1i0vl.mongodb.net/bancodaapi?retryWrites=true&w=majority'
)
    .then(() => {
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

