'use strict';


describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTodoApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    scope.todos = [
      {text: 'HTML5 Boilerplate', done: false},
      {text: 'AngularJS', done: false},
      {text: 'Karma', done: false},
    ];

    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  it('should expect the obvious', function () {
    expect(scope.totalTodos()).toEqual(scope.totalTodos());
  });
});
