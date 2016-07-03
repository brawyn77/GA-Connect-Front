var User = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/api/users'
})

// You have to ,anually account for pluralization of model.
var Users = Backbone.Collection.extend({
	model: User,
	url: 'http://localhost:3000/api/users'
})