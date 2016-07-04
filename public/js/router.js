var Router = Backbone.Router.extend({
	routes: {
		"": "showIndex",
		"profiles/:id" : "showProfile"
	},

	showIndex: function(){
		var dishes = new Dishes();
		// Chaining functions: to dishes, fetch & then do function
		dishes.fetch().done(function(){
			// Looks for var IndexView in indexView.js. Each truck item renders.
			// Here is where we create the collection seen in indexView.js. I.e. We're marrying the data to the template
			var indexView = new IndexView( { collection: userprofiles } );
			$('main').html(indexView.render().el);
		});
	},

	showProfile : function(id) {
		var userprofile = new UserProfile({ id: id});
		userprofile.fetch().done(function(){
			var view = new ShowView({ model: userprofile });
			$('.userprofiles').html( view.render().el )
		});
	}
})
