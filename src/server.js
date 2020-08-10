const porta = 3003
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const bancoDeDados = require('./BancodeDados')


app.use(bodyParser.urlencoded({ extended: true }))

app.get("/produtos:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
    next()

})


app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())

})

app.post('/produtos', (res, req, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preço: req.body.preço
    })
    res.send(produto) // JSON TRANSFORMADO
} ) 


app.put('/produtos/:id', (res, req, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preço: req.body.preço
    })
    res.send(produto) // JSON TRANSFORMADO
} ) 

app.delete('/produtos/:id', (res, req, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON TRANSFORMADO
} ) 


app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}`)
})