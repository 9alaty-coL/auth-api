const express = require('express')
const router  = express.Router()
const AuthController = require('../controllers/AuthController')
const isAuth = require('../middlewares/isAuth')

router.post('/login', AuthController.login)
router.get('/getAll', isAuth, AuthController.getAllUser)
router.post('/register', AuthController.register)

module.exports = router