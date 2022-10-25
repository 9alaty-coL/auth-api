const express = require('express')
const router  = express.Router()
const AuthController = require('../controllers/AuthController')

router.post('/login', AuthController.login)
router.get('/getAll', AuthController.getAllUser)
router.post('/register', AuthController.register)

module.exports = router