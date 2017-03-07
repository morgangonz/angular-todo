// Here we declare the main module (app).
angular
    .module('toDoList', [
        // Here we define the modules dependencies and any "global" dependencies
        // Modules that this module depends on will inherit this modules dependencies

        // Global Dependencies
        'ui.router',

        // Features
        'toDoList.create',
        //'toDoList.list',
        //'toDoList.completed'
    ])
    .config(toDoListConfig);

function toDoListConfig($urlRouterProvider) {
    // Here we configure the application

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/');
}
