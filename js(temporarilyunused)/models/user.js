var User = Backbone.Model.extend({
    urlRoot: 'http://localhost:8080/api/users',
    localStorage: true
});

var Users = Backbone.Collection.extend({
	model: User,
    urlRoot: 'http://localhost:8080/api/users'
});

// Instantiate a few users

var adam = new User({
    firstName: 'Adam',
    lastName: 'Applebee' ,
    email: 'adam-applebee@gmail.com',
   	profileActive: true,
	picture: 'UserPicture',
	headline: 'This is my headline.',
	elevatorPitch: 'This is my elevator pitch.',
	goals: [ 'Build a startup', 'Network' ],
	skills: [ 'Ruby', 'Rails', 'Javascript', 'UX Design' ],
	portfolioURL: 'http://github.com/adamapplebee.com',
	linkedinURL: 'http://linkedin.com/adamapplebee.com',
	country: 'Australia',
	city: 'Melbourne',
	course: [{
		courseName: 'Web Development Immersive',
		courseStart: '2016-01-01',
		courseEnd: '2016-04-01',
		}]
});

var mark = new User({
    firstName: 'Mark',
    lastName: 'Mathias' ,
    email: 'mark-mathias@gmail.com',
   	profileActive: true,
	picture: 'UserPicture',
	headline: 'This is Mark\'s headline.',
	elevatorPitch: 'This is Mark\'s elevator pitch.',
	goals: [ 'Network', 'Career Development' ],
	skills: [ 'Node.js', 'Backbone.js', 'Express' ],
	portfolioURL: 'http://github.com/markmathias.com',
	linkedinURL: 'http://linkedin.com/markmathias.com',
	country: 'Australia',
	city: 'Melbourne',
	course: [{
		courseName: 'Web Development Immersive',
		courseStart: '2016-02-01',
		courseEnd: '2016-05-01',
		}]
});

var users = new Users([adam, mark]);

// users.models[0].save({ajaxSync: true});
