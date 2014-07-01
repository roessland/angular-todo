'use strict';

angular.module('angularTodoApp')
  .provider('Todo', function() {
    this.$get = ['$resource', function($resource) {
      var Todo = $resource('http://localhost:9000/api/todos/:_id', {}, {
        save: {
          method: 'POST'
        },
        query: {
          method: 'GET',
          isArray: true,
          transformResponse: function(data, headers) {
            void(headers);
            var response = angular.fromJson(data);
            return response._items;
          },
        },
        update: {
          method: 'PUT'
        },
        delete: {
          method: 'DELETE',
        }
      });

      return Todo;
    }];
  });

