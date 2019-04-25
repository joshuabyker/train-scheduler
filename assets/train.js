//we need to make sure to make it so when everything is loaded that we can operate
$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyCHb6iFAzM5l9ZUC_BA8iYvA1lclKw5TF8",
        authDomain: "train-scheduler-60ac4.firebaseapp.com",
        databaseURL: "https://train-scheduler-60ac4.firebaseio.com",
        projectId: "train-scheduler-60ac4",
        storageBucket: "train-scheduler-60ac4.appspot.com",
        messagingSenderId: "895916806591"
      };
      firebase.initializeApp(config);
})
