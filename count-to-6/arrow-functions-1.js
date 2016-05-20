var inputs = process.argv.slice(2);
var results = inputs.map(element => element.charAt(0))
                    .reduce((previous, current) => previous + current);
                    
console.log(`[${inputs}] becomes "${results}"`);