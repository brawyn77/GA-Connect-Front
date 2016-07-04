var Router = Backbone.Router.extend({
	routes: {
		"": "showIndex",
		"trucks/:id" : "showTruck"
	},

	showIndex: function(){
		var dishes = new Dishes();
		// Chaining functions: to dishes, fetch & then do function
		dishes.fetch().done(function(){
			// Looks for var IndexView in indexView.js. Each truck item renders.
			// Here is where we create the collection seen in indexView.js. I.e. We're marrying the data to the template
			var indexView = new IndexView( { collection: dishes } );
			$('main').html(indexView.render().el);

			// trigger a map reload on callback
			google.maps.event.trigger(indexView.map, 'resize');
			// re-orient map
			indexView.map.setCenter({ lat: -37.813155, lng: 144.964078 });
		});
	},

	showTruck : function(id) {
		var dish = new Dish({ id: id});
		dish.fetch().done(function(){
			var view = new ShowView({ model: dish });
			$('.trucks').html( view.render().el )
		});
	}
})
