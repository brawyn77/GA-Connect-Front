var UserProfile = Backbone.Model.extend({
	urlRoot: 'https://historic-kings-canyon-91668.herokuapp.com/api/profiles'
})

// You have to ,anually account for pluralization of model.
var UserProfiles = Backbone.Collection.extend({
	model: UserProfile,
	url: 'https://historic-kings-canyon-91668.herokuapp.com/api/profiles'
})
