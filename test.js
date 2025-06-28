var time = require('./time.js');

// Test cases
var testCases = [
    '1450137600',
    'December 15, 2015',
    'December 15 2015',
    'Dec 15, 2015',
    '2015-12-15',
    '12/15/2015',
    'invalid-date'
];

console.log('Testing timestamp microservice...\n');

testCases.forEach(function(testCase) {
    console.log('Input:', testCase);
    console.log('Output:', JSON.stringify(time(testCase), null, 2));
    console.log('---');
});

console.log('All tests completed!'); 