requirejs.config({
    'baseUrl': 'js',
    'paths': {
        'dusts': 'views/dusts',
        'backbone' : 'libs/backbone',
        'dust' : 'libs/dust',
        'underscore' : 'libs/underscore',
        'jquery' : 'libs/jquery',
        'bootstrap' : 'libs/bootstrap',
        'createHtml' : 'libs/createHtml'
    },
    'shim': {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'dust': {
            exports: 'dust'
        },
        'underscore': { 
            exports: '_' 
        },
        'jquery': { 
            exports: '$' 
        },
        'bootstrap': ['jquery'],
        'createHtml': ['jquery']
    }
});

requirejs(['main'])