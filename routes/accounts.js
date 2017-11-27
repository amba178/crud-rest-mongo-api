const mongodb  = require('mongodb')


module.exports = {
    getAccout(req, res) {
    	 res.status(200).send(req.store.accounts)
    },
    addAccount(req, res) {
    	if(!req.body.name || !req.body.url || !req.body.text.trim()) return res.sendStatus(400)
	  	let obj = {
	  		name: req.body.name,
	  		url: req.body.url,
	  		text: req.body.text,
	  		comments: []
	  	}
		let accountId = req.store.accounts.length 
		req.store.accounts.push(obj)
		res.status(201).send({accountId: accountId})

    },
    updateAccount(req, res){
       if(req.store.accounts[req.params.accountId] == undefined) return res.sendStatus(400)
       Object.assign(req.store.accounts[req.params.accountId], req.body)
	   console.log('updated', req.store.accounts[req.params.accountId])
	   res.sendStatus(204)
  		
  	},
    removeAccount(req, res){
    	req.store.accounts.splice(req.params.accountId, 1)
    	console.log('deleted', req.store.accounts)
    	res.send(204)
    }

}