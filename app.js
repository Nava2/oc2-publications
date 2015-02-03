var parse = require("bibtex-parser");
var minimist = require("minimist");
var _ = require("underscore");
var fs = require('fs');
var path = require('path');


var argv = minimist(process.argv.slice(2), {
    string: ['o'],
    boolean: ['q'],
    'default': {
        'q': false
    }
});

if (_.isUndefined(argv._) || argv._.length < 1) {
    throw 'Must specify input files';
}

if (_.isUndefined(argv.o)) {
    throw 'Must specify output file with option -o';
}

function log(str) {
    if (!argv.q) {
        console.log(str);
    }
}

/**
 *
 * @param {Object} bibObj object returned from the BibTEX parser.
 */
function fixBibTEXKeys(bibObj) {
    return _.chain(bibObj).map(function (obj, key) {
        return [key, _.chain(obj).map(function (f, k) {
            return [k.toLowerCase(), f.trim()];
        }).object().value()]
    }).object().value();
}

function prettyType(type) {
    switch (type) {
        case 'ARTICLE':
            return 'Article';
        default:
            return type.toLowerCase();
    }
}

var bibObjs = [];


var writeOutput = _.after(argv._.length, function () {
    var allBibs = _.chain(bibObjs).map(_.values).flatten().map(function (o) {
        o.entrytype = prettyType(o.entrytype);
        return o;
    }).value();

    var outPath = argv.o;

    log("Writing to: " + outPath);
    log(JSON.stringify(allBibs, null, '  '));

    fs.mkdir(path.dirname(outPath), function (err) {
        if (err && err.code !== 'EEXIST') {
            console.log(err);
            throw err;
        }

        fs.writeFile(outPath, JSON.stringify(allBibs), function (err) {
            if (err) {
                throw err;
            }

            console.log("Completed writing file: " + outPath);
        })
    });
});

_.forEach(argv._, function (input) {

    fs.readFile(input, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        var bibtexObj = parse(data);

        bibObjs.push(fixBibTEXKeys(bibtexObj));

        writeOutput();
    });
});






