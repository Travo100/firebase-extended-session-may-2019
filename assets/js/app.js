// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAM1StdBK4eq89wHaanqMet3C1Pk42mRoU",
    authDomain: "cbc-project-1489261982065.firebaseapp.com",
    databaseURL: "https://cbc-project-1489261982065.firebaseio.com",
    projectId: "cbc-project-1489261982065",
    storageBucket: "cbc-project-1489261982065.appspot.com",
    messagingSenderId: "1002133363299",
    appId: "1:1002133363299:web:82940d441d5d1d53"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


database.ref().on("child_added", function(snapshot){
    console.log(snapshot.val());

    // create a new <tr>
    // with all hero data in it
    var tr = $("<tr>").append(
        $("<td>").text(snapshot.val().heroName),
        $("<td>").text(snapshot.val().heroPower),
        $("<td>").text(snapshot.val().heroScore + "/10")
    );

    // append the tr to the tbody
    $("#hero-table tbody").append(tr);
});

// when a user submit the submit-hero form
$("#submit-hero").on("submit", function(e){
    e.preventDefault();
    console.log("submit form!");
    // get the data from the input fields once the user submit the form
    var heroName = $("#hero-name").val().trim();
    console.log(heroName);

    var heroPower = $("#hero-power").val().trim();
    console.log(heroPower);

    var heroScore = $("#hero-score").val().trim();
    console.log(heroScore);
    
    // we save the data from the input fields 
    // into the firebase database
    database.ref().push({
        heroName: heroName,
        heroPower: heroPower,
        heroScore: heroScore
    });
    
    // empty form fields after submission
    $("#hero-name").val("");
    $("#hero-power").val("");
    $("#hero-score").val("");
});
