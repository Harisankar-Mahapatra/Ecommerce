const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://amrit:p%40ssw0rd@mongodb.yhzp9jc.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch(() => {
        console.log('Conecting . . .')
    });
