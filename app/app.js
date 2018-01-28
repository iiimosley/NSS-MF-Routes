'use strict';

let routes = angular.module("routes", ['ngRoute'])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "../partials/main.html"
            })
            .when("/sunbelt", {
                templateUrl: "../partials/highway.html",
                controller: "Highway1"
            })
            .when("/pacific", {
                templateUrl: "../partials/highway.html",
                controller: "Highway2"
            })
            .otherwise("/");
    });