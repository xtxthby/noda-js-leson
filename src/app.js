// const Joi = require('joi');
// const shortid = require('shortid');
// //  схема валыдації рядка де мін 3 букви а мак 10
// // і тільки числа і букви

// // const passwordSchera = Joi.string().min(3).max(10).alphanum();
// // console.log(passwordSchera.validate('q'));

// console.log(shortid.generate());

// const express = require('express');


// const app = express();
// app.use('*', (req, res) => {
//     console.log('Був запит від браузера');
//     res.send('<h1>dom</h1>')
// });

// const listener = app.listen(4444, () => {
//     console.log(`Веб-сервер запущено на порті ${listener.address().port}`);
// });




const sum = (a, b) => a + b;
sum(2, 3);

class Hero {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

const h = new Hero('mango');

