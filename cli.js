let pkg = require('./package.json');
let { Info } = require("./src/github")
let github = new Info()
let argv = process.argv.slice(2);
let input = argv[0];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ userinfo-github <user-name>');
	console.log('');
	console.log('Example');
	console.log('  $ userinfo-github RPGTheGreat');
}

if (!input || argv.indexOf('--help') !== -1) {
	help()

}

if (process.argv.indexOf('--v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);

}

github.fetchInfo(input)
.then(version => console.log(version))
.catch(err => {
  console.error(err);
  process.exit(1);
});