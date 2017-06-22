var config = {
    apiKey: "AIzaSyBtDti-b-93r8hYoNY3BLjnXiiaDj5PLbU",
    authDomain: "mywebsite-ed666.firebaseapp.com",
    databaseURL: "https://mywebsite-ed666.firebaseio.com",
    projectId: "mywebsite-ed666",
    storageBucket: "mywebsite-ed666.appspot.com",
    messagingSenderId: "703300250574"
};

var myModule = angular.module("ResumeWebsite", ['firebase','ngRoute']);
firebase.initializeApp(config);

myModule.controller("databaseController", function ($scope, $firebaseArray, $firebaseObject,$route) {
    //limiting num of projects to show
    $scope.quantity = 8;
    $scope.buttonText = "Show more";

    var ref = firebase.database().ref();
    
    $scope.introText = $firebaseObject(ref.child("introText"));
    $scope.address = $firebaseObject(ref.child("address"));
    $scope.phone = $firebaseObject(ref.child("phoneNum"));
    $scope.email = $firebaseObject(ref.child("email"));
    $scope.education = $firebaseArray(ref.child("education"));
    $scope.experience = $firebaseArray(ref.child("experience"));
    $scope.projects = $firebaseArray(ref.child("Projects"));

    $scope.loadMore = function () {
        if ($scope.quantity == 8) {
            $scope.quantity = $scope.projects.length;
            $scope.buttonText = "Show less";
        } else {
            $scope.quantity = 8;
            $scope.buttonText = "Show more";
        }
    };
    
    $scope.SubmitForm = function(){
        alert("Thank you for contact me. As early as possible i will contact you.");
        $route.reload();
    }

});
