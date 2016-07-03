var ShowView = Backbone.View.extend({
	render: function() {
		var template = $('#ShowUserTemplate').html();
		var html = Mustache.render (
			template,
			this.model.toJSON()
		);
		this.$el.html(html);
		return this;
	}
})