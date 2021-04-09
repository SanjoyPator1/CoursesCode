const obj= { 
	add: 2,
	sub: 5,
	action(){
		console.log('action')
	}
}

const name = () => {
	console.log("my name fn called")
}

module.exports = {obj, name}

//module.exports.more = {name}
