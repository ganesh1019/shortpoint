const protractorFlake = require('protractor-flake');
// skip first two args (node and self)
const protractorArgs = process.argv.splice(2);

protractorFlake({
    protractorPath: '../node_modules/.bin/protractor',
    maxAttempts: 2,
    parser: 'cucumber',
    nodeBin: 'node',
    protractorArgs: protractorArgs
}, function(status, output) {
    process.exit(status);
});
