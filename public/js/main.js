var deps = [
    'bootstrap',
    'views'
];

define(deps, function() {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Home page
            '': 'home',

            // Calculator
            //'calc/:calc/:rsname': 'calc',
            'calc(/*splat)': 'calc',

            // Items
            'item(/*splat)': 'item',

            // Beast
            'beast(/*splat)': 'beast',

            // Quest
            'quest(/*splat)': 'quest',

            'contact': 'contact',
            '*splat': 'defaultRoute'
        },

        home: function() {
            this.deactivate();
            var default_view = new DefaultView({
                el: $('#content'),
                data: {
                    'text': 'Welcome to Zerunes!',
                    'subtext': 'We\'re under construction, please wear a hard hat in this area'
                }
            });
        },

        calc: function(splat) {
            this.activate('calc');
            this.soon();
        },

        item: function(splat) {
            this.activate('item');
            this.soon();
        },

        beast: function(splat) {
            this.activate('beast');
            this.soon();
        },

        quest: function(splat) {
            this.activate('quest');
            this.soon();
        },

        // Contact page
        contact: function() {
            this.activate('contact');
            var contact_view = new ContactView({
                el: $('#content'),
                data: {
                    'title': 'Famous People', 
                    'names' : [{ 'name': 'Larry' },{ 'name': 'Curly' },{ 'name': 'Moe' }]
                }
            });
        },

        // A coming soon page
        soon: function() {
            var default_view = new DefaultView({
                el: $('#content'),
                data: {
                    'text': 'This feature coming soon!',
                    'subtext': ''
                }
            });
        },

        // The default 'catch all' page
        defaultRoute: function(splat) {
            this.deactivate();
            var default_view = new DefaultView({
                el: $('#content'),
                data: {
                    'text': 'Whoops, we seemed to have lost that page',
                    'subtext': ''

                }
            });
        },

        // Deactivates all active tabs
        deactivate: function() {
            $('ul.nav li').each(function() {
                $(this).removeClass('active');
            })
        },

        // Activates the selected tab
        activate: function(tab) {
            this.deactivate();
            $('#nav-' + tab).addClass('active');
        }
    });

    var router = new AppRouter();
    Backbone.history.start();
});