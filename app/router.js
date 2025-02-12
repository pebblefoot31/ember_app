import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
};

Router.map(function() {
    this.route('rentals'); //should map rentals page to '/'
    this.route('about'); //tells Ember router to run the about.js
			//file when visitor navigates to about page
    this.route('contact');
});
