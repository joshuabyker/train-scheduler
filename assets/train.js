//we need to make sure to make it so when everything is loaded that we can operate
//These comments on the Java script were made on April 26th of 2019 By Joshua Byker
$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyCHb6iFAzM5l9ZUC_BA8iYvA1lclKw5TF8",
        authDomain: "train-scheduler-60ac4.firebaseapp.com",
        databaseURL: "https://train-scheduler-60ac4.firebaseio.com",
        projectId: "train-scheduler-60ac4",
        storageBucket: "train-scheduler-60ac4.appspot.com",
        messagingSenderId: "895916806591"
      };
      var database = config.databaseURL;
      firebase.initializeApp(config); //initializing the firebase
      var database = firebase.database();//referencing the firebasedatabase, and making it into a variable that can be referenced
      $("#CHOOCHOOBTN").on("click", function(event){ //we are now grabbing the id of "CHOOCHOOBTN" on the html and saying that when it is clicked to prevent the default action
        event.preventDefault();
        //now we have to set the User input value as a variable
        var choochoonames = $("#lename").val().trim();
        var destinations = $("#destination").val().trim();
        //moment.js will be used to reference time according to user input. This function was founs thanks to stack overflow
        var primary = moment($("#time").val().trim(),"hh:mm").subtract(1,"years").format("X");

        var reggie = $("#reggie").val().trim();
       

        //now we have to set up a variable that holds the current time that will be refernced
        var currentTime = moment();
        console.log("This Time: "+ moment(currentTime).format("hh:mm"));

        //now we need to make a variable for all/ any new trains that get added

        var NewTrain = {
          train: choochoonames,
          onRoute: destinations,
          incomming: primary,
          EveryTime: reggie,
        };
        //now we have to push the new trains to firebase push will add to info that has already been set
        database.ref().push(NewTrain);
        //ok now we have to remove elements before new ones are added
        $("#lename").val("");
        $("#destination").val("");
        $("#time").val("");
        $("#reggie").val("");
            })
})
database.ref().on("child_added", function(childSnapshot, prevChildKey){
  console.log(childSnapshot.val()); //we are going to take these snapshots and store them into the variables held within the newtrain variables
  var choochoonames = childSnapshot.val().train;
  var onRoute = childSnapshot.val().trainGoing;
  var incomming = childSnapshot.val().trainIncoming;
  var EveryTime = childSnapshot.val().everyxMin;
//we need to organize the train times to keep them neat
var trainschedule = moment.unix(primaryEvent).format("hh:mm"); //we are formatting the unix time stamp into hours and minutes
var difference = moment().diff(moment(trainschedule),"minutes");
var remainingTime = difference % frequency;
//now to calculate arrival time
var NextTrain = moment().add(minUntil, "minutes").format("hh:mm");
//now we have to grab this information and add it into the DOM table
$("#thomasthetraintable> tbody").prepend("<tr><td>"+choochoonames+ "</td><td>" + onRoute +"</td><td>"+ incomming + "</td><td>"+ EveryTime + "</td><td>"+remainingTime +"</td><td>"+ NextTrain+"</td><td>");


})
