const fs = require('fs');
function mkdir = (dir) => {
	if(!fs.existsSync(dir)) fs.mkdir(dir)
}

function upload = (file, to, name) => {
	
}

module.exports = function uploader(to, files) {
	mkdir(to);
	files.forEach(file => upload(file, to, name))
}
