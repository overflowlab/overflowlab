var app = angular.module('gen', [
        'ngSanitize',
        'ui.router'
    ]
);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('root', {
            views: {
                'header': {
                    templateUrl: 'templates/header.html',
                    controller: 'headerController'
                },
                'sidebar': {
                    templateUrl: 'templates/sidebar.html',
                    controller: 'sidebarController'
                }
            }
        })
        .state('root.home', {
            url: '/home',
            views: {
                'content@': {
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }
            }
        });
});