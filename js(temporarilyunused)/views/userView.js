var UserView = Backbone.View.extend({
	
	// Creates <div class="ui-card">
	tagName: 'div',
	className: 'ui-card',
	// Uses html inside truck-template
	template: $('.UserTemplate').html(),

	// Make slider
	events: {
		// When click image, run function 'slide'
		'click img' : 'slide'
	},

	// Create function 'slide'
	slide: function() {
		// Create variable wrapper by grabbing DOM element with class="slider-wrapper"
		var $wrapper = this.$el.find('.slider-wrapper');

		// If all the way to left
		if ($wrapper.css('left') === '0px') {
			// when click it, shift all way to right
			$wrapper.css('left', '-100%');
		// otherwise, keep it left
		} else {
			$wrapper.css('left', '0%');
		}
	},

	// rendering our div
	render: function() {
		var html = Mustache.render(this.template, this.model.toJSON());

		this.$el.html(html);
		return this;
	}

})