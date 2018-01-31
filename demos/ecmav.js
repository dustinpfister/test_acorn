// get acorn
let acorn = require('acorn'),

// options option
options = {

    ecmaVersion: 5 // ecma 5

},

js6 = 'let n = 42;',
js5 = 'var n = 42;';

let parseJS = function (input, options) {

    return new Promise(function (resolve, reject) {

        try {

            resolve(acorn.parse(input, options));

        } catch (e) {

            reject(e);

        }

    });

};

parseJS(js5).then(function (node) {

    console.log(node);

}).catch (function (err) {

    console.log(err);

});
