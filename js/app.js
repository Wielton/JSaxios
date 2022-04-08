function randomSingleActivity(){
    axios.request({
        method: "GET",
        url: 'http://www.boredapi.com/api/activity?participants=1'
    }).then(getAct).catch(errActivity);
}
function randomDoubleActivity(){
    axios.request({
        method: "GET",
        url: 'http://www.boredapi.com/api/activity?participants=2'
    }).then(getAct).catch(errActivity);
}
function randomTripleActivity(){
    axios.request({
        method: "GET",
        url: 'http://www.boredapi.com/api/activity?participants=3'
    }).then(getAct).catch(errActivity);
}
function randomQuadActivity(){
    axios.request({
        method: "GET",
        url: 'http://www.boredapi.com/api/activity?participants=4'
    }).then(getAct).catch(errActivity);
}
function participantSelect(){
    let numParticipants = document.getElementById("multiParticipantDropdown").selectedIndex;
    console.log(numParticipants);
    if(numParticipants == [0]){
        randomSingleActivity();
        console.log("You've selected an activity for one participant.");
    } else if(numParticipants == [1]){
        randomDoubleActivity();
        console.log("You've selected an activity for two participants.");
    } else if(numParticipants == [2]){
        randomTripleActivity();
        console.log("You've selected an activity for three participants.");
    } else {
        randomQuadActivity();
        console.log("You've selected an activity for four participants.");
    }
    
    // console.log(document.getElementsByTagName("option")[numParticipants].value);
    
}

// Success and Failure Functions

function getAct(response){
    let activity = response.data.activity;
    console.log(activity);
    activityAppear();
    activityParagraph.innerText=activity;
}
function errActivity(error){
    console.log(error);
}
// When the user clicks on the button, the activity modal displays
function activityAppear(){
    modal.style.display = "block";
    
}

// When the user clicks on <span> (x), the activity modal closes
function activityClose(){
    modal.style.display = "none";
}
document.getElementById('ranActivity').addEventListener('click', randomSingleActivity);
document.getElementById('multiParticipantDropdownBtn').addEventListener('click', participantSelect);
document.getElementById('modalClose').addEventListener('click', activityClose);
// Get the modal
var modal = document.getElementById("activityModal");

// Get the button that opens the modal
var btn = document.getElementById("multiParticipantDropdownBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// 
var activityParagraph = document.getElementById('activity');





// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

/*
accessibility

A factor describing how possible an event is to do with zero being the most accessible

[0.0, 1.0]

type

Type of the activity

["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

participants

The number of people that this activity could involve

[0, n]

price

A factor describing the cost of the event with zero being free

[0, 1]


*/