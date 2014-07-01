describe('angularjs homepage', function() {

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('/');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('formTodoText'));
      var addButton = element(by.css('#addTodoButton'));

      var beforeCount = todoList.count();

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      var afterCount = todoList.count();

      expect(afterCount).toEqual(beforeCount + 1);
      expect(todoList.last().getText()).toEqual('write a protractor test');
    });

    it('should not allow empty tasks', function() {
      var addTodo = element(by.model('formTodoText'));
      var addButton = element(by.css('#addTodoButton'));

      addTodo.sendKeys('');
      addButton.click();

      expect(todoList.count()).toEqual(3);
    });

  });

});
