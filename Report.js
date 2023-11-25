const newman = require('newman');
require('dotenv').config();
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`https://api.postman.com/collections/25316980-dffc5dc9-be7e-443d-9c46-1f145e35234a?access_key=${process.env.accessKey}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});