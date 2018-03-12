# NSS: Modern Frameworks - Route Routing/Listing Exercise

## Directives
Create a basic AngularJs application with two views providing information of two seperate highways, including the the highways name and a description of the highway.

### Required Components
+ Angular application module, injecting `ngRoute`
  + `config` section for seperate routes
    + highway #1
    + highway #2
+ x2 controllers, defined in application
    + both containing `$scope.highwayName` & `$scope.highwayDescription`
    + scoped variable values set personally
+ x2 partials per controller

### Assignment Extension
Add a default view/home-page to the application
+ +1 route to app module that will load a listing of highways
  + each listing to be anchor hyperlinks to each configured routes
+ add `otherwise` configuration to routing

