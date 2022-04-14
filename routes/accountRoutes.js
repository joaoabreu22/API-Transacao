const router = require('express').Router()
const Account = require('../models/account')


router.post('/', async (req, res) => {
    const {id_account, data, transaction, valor} = req.body

    if(!id_account){
        res.status(422).json({error: 'O ID é obrigatório'})
    return
    }

    const account = {
        id_account,
        data,
        transaction,
        valor
    }

    try {

        await Account.create(account)

        res.status(201).json({message: 'Usuário adicionado'})
        
    } catch (error) {
        res.status(500).json({error: error})
        
    }

})
router.get('/', async (req, res) => {
    try {

     const accounts = await Account.find()

     res.status(200).json(accounts)
        
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/:id', async (req, res) =>{

    const id = req.params.id

    const {id_account, data, transaction, valor} = req.body

    const account ={
        id_account,
        data,
        transaction,
        valor
    }

    try {
        
        const updateAccount = await Account.updateOne({_id: id}, account)
        res.status(200).json(account)

    } catch (error) {
        res.status(500).json({error: error})

    }

})
router.delete('/:id', async (req, res) => {
    const id = req.params.id
  
    const account = await Account.findOne({ _id: id })
  
    if (!account) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }
  
    try {
      await Account.deleteOne({ _id: id })
  
      res.status(200).json({ message: 'Usuário removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

module.exports = router