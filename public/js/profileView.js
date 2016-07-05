var ProfileView = Backbone.View.extend({

	className: 'profile-view',

	render: function() {
		var template = $('#profile-template').html();
		var html = Mustache.render (
			template,
			this.model.toJSON()
		);
		this.$el.html(html);
		return this;
	}
})
