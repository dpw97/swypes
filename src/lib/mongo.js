const mongoose = require('mongoose')
require('dotenv').config()

const password = process.env.MONGODB_PW

const url = `mongodb+srv://dpw97:${password}@cluster0.ti8idpp.mongodb.net/?retryWrites=true&w=majority`
