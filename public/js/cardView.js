var CardView = Backbone.View.extend({
	// Creates <div class="ui-card">
	className: 'card',
	// Uses html inside truck-template
	template: $('#card-template').html(),

	// rendering our div
	render: function() {
		var html = Mustache.render(this.template, this.model.toJSON());

		this.$el.html(html);
		return this;
	}
})