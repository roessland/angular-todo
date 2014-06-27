describe('angularjs homepage', function() {

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('/');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(0).getText()).toEqual('HTML5 Boilerplate');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('formTodoText'));
      var addButton = element(by.css('#addTodoButton'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(4);
      expect(todoList.get(3).getText()).toEqual('write a protractor test');
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
