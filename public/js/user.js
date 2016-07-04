var UserProfile = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/api/profiles'
})

// You have to ,anually account for pluralization of model.
var UserProfiles = Backbone.Collection.extend({
	model: UserProfile,
	url: 'http://localhost:8080/api/profiles'
})