// get acorn
let acorn = require('acorn'),

// options option
options = {

    ecmaVersion: 5 // ecma 5

},

js6 = 'let n = 42;',
js5 = 'var n = 42;';

// parse js promise method
let parseJS = function (input, options) {

    return new Promise(function (resolve, reject) {

        try {

            resolve(acorn.parse(input, options));

        } catch (e) {

            reject(e);

        }

    });

};

// parse the es5 string
parseJS(js5,options).then(function (node) {

    console.log(node); // the node

}).catch (function (err) {

    console.log(err);

});

// parse the es6 string
parseJS(js6,options).then(function (node) {

    console.log(node);

}).catch (function (err) {

    console.log(err); // error

});