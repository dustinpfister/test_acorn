let fs = require('fs-extra'),
acorn = require('acorn'),

options = {

    ecmaVersion: 5, // ecma 5
    locations: true,

    onInsertedSemicolon: function (charOffset, b) {

        console.log('semi collen inserted at : ' + charOffset);
        console.log(b);

    }

},

// parse js promise method
parseJS = function (input, options) {

    return new Promise(function (resolve, reject) {

        try {

            resolve(acorn.parse(input, options));

        } catch (e) {

            reject(e);

        }

    });

};

fs.readFile('./examplecode/no_semi_colons.js', 'utf-8').then(function (js) {

    //console.log(js);

    return parseJS(js, options);

}).then(function (tree) {

    console.log(tree);

});
