'use strict';

angular.module('angularTodoApp')
.service('todoService', ['$http', function($http) {

  var urlBase = '/api/todos';
  var service = this;

  this.getTodos = function() {
    return $http.get(urlBase, {cache: false});
  };

  this.addTodo = function(todo) {
    return $http.post(urlBase, todo);
  };

  this.deleteTodo = function(todo) {
    var config = {headers: {
      'If-Match': todo._etag,
    }};
    return $http.delete(urlBase + '/' + todo._id, config);
  };

  this.deleteTodos = function(todos) {
      _.each(todos, function(todo) {
        service.deleteTodo(todo);
      });
  };

}]);
