'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('TodoCtrl', function ($scope, $log, $q, _, Todo) {

    $scope.currentRequests = 0;
    $scope.refreshing = function() { return !!$scope.currentRequests; };
    var startRequest  = function() { $scope.currentRequests++; };
    var finishRequest = function() { $scope.currentRequests--; };

    $scope.todo = new Todo();
    $scope.todos = Todo.query();

    $scope.save = function() {
      var newTodo =_.clone($scope.todo);

      if (_.isUndefined(newTodo.done)) { newTodo.done = false; }

      startRequest();
      newTodo.$save().then(
        function(serverTodo) {
          finishRequest();
          console.log(serverTodo);
          $scope.todos.push(serverTodo);
        },
        function(error) {
          finishRequest();
          console.log(error);
        }
      );
      $scope.todo = new Todo();
    };

    $scope.delete = function(todo) {
      startRequest();
      todo.$delete({'_id': todo._id}).then(
        function() {finishRequest();},
        function() {finishRequest(); console.log("ERRAR!");}
      );
      $scope.todos = _.without($scope.todos, todo);
    };

    // Get the amount of todos in scope
    $scope.totalTodos = function() {
      return $scope.todos.length;
    };

    $scope.containsAd = function(todo) {
      return todo._id.indexOf('ad') > -1;
    };

  });
