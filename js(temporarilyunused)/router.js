var Router = Backbone.Router.extend({
	routes: {
		"": "showIndex",
		"users/:id" : "showUser"
	},

	showIndex: function(){
		var users = new Users();

		users.fetch().done(function(){
			var indexView = new IndexView( { collection: users } );
			$('main').html(indexView.render().el);
		});
	},

	showUser : function(id) {
		var user = new User({ id: id});
		user.fetch().done(function(){
			var view = new ShowView({ model: user });
			$('.users').html( view.render().el )
		});
	}
})
