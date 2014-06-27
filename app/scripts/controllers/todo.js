'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('TodoCtrl', function ($scope) {

    $scope.formTodoText = '';

    $scope.todos = [
      {text: 'HTML5 Boilerplate', done: false},
      {text: 'AngularJS', done: false},
      {text: 'Karma', done: false},
    ];

    $scope.totalTodos = function() {
      return $scope.todos.length;
    };

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.formTodoText, done: false});
      $scope.formTodoText = '';
    };

    $scope.clearCompleted = function() {
      $scope.todos = _.filter($scope.todos, function(todo) {
        return !todo.done;
      });
    };
  });
