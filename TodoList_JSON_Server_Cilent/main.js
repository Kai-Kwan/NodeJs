var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope,$http) {

    $scope.todoList = [];
    $http.get('../TodoItem.json').then(function(response) {
    $scope.todoList = response.data.TodoItem;});



    $scope.todoAdd = function() {


    var AddItem = "{\"todoText\":\""+$scope.todoInput+"\",\"done\":false}";
 
 $http.post('http://localhost:8000',AddItem).then(function(response) {
    $scope.todoList = response.data.TodoItem;});
    
   $scope.todoList.push({todoText:$scope.todoInput, done:false});

 
};


   



    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
