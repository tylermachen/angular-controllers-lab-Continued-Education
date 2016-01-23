# Refactor to use controllerAs

## Objectives

- Update your Controller to use `this`
- Update `ng-controller` to use controllerAs syntax
- Update binding references

## Instructions

Take the code from this repo. If you load `index.html`, you'll notice how it isn't displaying the correct information.

Using the knowledge from the last lesson, update all the `$scope` values to use `this` instead. 

In our HTML, update `ng-controller` to initiate the controller into a variable instead - name this whatever you'd like, however it keeps it clean if we name it the same as our controller.

Update all of our references to `$scope` in the HTML to reference our new controller instance instead.