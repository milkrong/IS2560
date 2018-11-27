const Todo = angular.module('Todo', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // list all todos
    $http.get('/api/todo/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // post new todo
    $scope.createTodo = function() {
        $http.post('/api/todo/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete todo
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todo/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.updateTodo = function(id) {
        $http.post('/api/todo/update/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data)
            })
            .error(function(data) {
                console
            })
    }

}
