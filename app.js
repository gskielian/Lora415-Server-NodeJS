var firebase = require("firebase");

firebase.initializeApp({
  databaseURL: "https://crackling-heat-8070.firebaseio.com"
});

//example of getting data once
var db = firebase.database();
var ref = db.ref("/public");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});


//example of setting data
var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});


//example of updating saved data
var hopperRef = usersRef.child("gracehop");
hopperRef.update({
  "nickname": "Amazing Grace"
});



