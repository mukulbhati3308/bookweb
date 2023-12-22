
// variables for roombooking
let sizeCost;
let extraCost;
let room;
let extraBed;
let extraMeal;
let cost;
let costextra;
let costroomtotal;


//TO DO 6b: get references to interactive elements for roombooking
sizeChoices = document.getElementsByName("room");
extraChoices = document.getElementsByName("extra");
txtNumber = document.getElementById("num");
btnAdd = document.getElementById("add");
btnPoints = document.getElementById("points");
txtCost = document.getElementById("cost");
txtCostExtra = document.getElementById("costextra");
txtOutput = document.getElementById("output");
txtCostRoomTotal = document.getElementById("costroomtotal");
txtOutputPoints = document.getElementById("outputPoints");
theRoomForm = document.getElementById("RoomBookingForm");


    //TO DO 6c: listen for events for room booking
window.addEventListener("load", init);
btnAdd.addEventListener("click", addToOrder);
btnPoints.addEventListener("click", addToPoints);
sizeChoices.forEach(item => 
    item.addEventListener("change", checkSize));
extraChoices.forEach(item => 
    item.addEventListener("change", checkExtra));
    function init() {
        sizeCost = 0.00;
        extraCost = 0;
        extraBed = "with no extra bed";
        extraMeal = "with no extra meals";
        costextra = extraCost;
        // loyaltyPoints = numRooms * 20;
        cost = sizeCost;
        costroomtotal = cost +extraCost
        txtCostRoomTotal.innerText =`${costroomtotal.toFixed(2)}`;
        txtCostExtra.innerText = `${costextra.toFixed(2)}`;
        txtCost.innerText = `${cost.toFixed(2)}`;
    }
    function checkSize() {
        if (this.value == "single") {
            sizeCost = 250000;
                room = "single";
        } else if (this.value == "double") {
            sizeCost = 350000;
            room = "double";
        } else {
            sizeCost = 40000;
            room = "triple";
        }
        costextra =  extraCost;
        cost = sizeCost;
        costroomtotal = cost +extraCost
        txtCostRoomTotal.innerText =`${costroomtotal.toFixed(2)}`;
        txtCostExtra.innerText = `${costextra.toFixed(2)}`;
        txtCost.innerText = `${cost.toFixed(2)}`;
    }
function checkExtra() {
    if (this.value == "bed") {
        if (this.checked) {
            extraCost += 8000;
            extraBed = "with bed ";
        } else {
            extraCost -= 8000;
            extraBed = "no bed";
        }
    } else {
        if (this.checked) {
            extraCost += 5000;
            extraMeal = "with meal";
        } else {
            extraCost -= 5000;
            extraMeal = "no meal";
        }
    }
    costextra = extraCost;
    cost = sizeCost;
    costroomtotal = cost +extraCost
        txtCostRoomTotal.innerText =`${costroomtotal.toFixed(2)}`;
    txtCostExtra.innerText = `${costextra.toFixed(2)}`;
    txtCost.innerText = `${cost.toFixed(2)}`;
}
function addToOrder(evt) {
    if (theRoomForm.checkValidity()) {
        evt.preventDefault();
        let numRooms = parseInt(txtNumber.value);
        let total = numRooms * (sizeCost + extraCost);
        txtOutput.innerText += `${numRooms} number of ${room} rooms(s), ${extraBed}, ${extraMeal}, is your total for Room Booking cost LKR.${total.toFixed(2)}\n`;
    }
}

function addToPoints(evt){
    if (theRoomForm.checkValidity()){
        evt.preventDefault();
        let numRooms = parseInt(txtNumber.value);
        if (numRooms>3){
        var loyaltyPoints = numRooms * 20;
        localStorage.setItem("loyalty points", loyaltyPoints);
        txtOutputPoints.innerText += `${loyaltyPoints} is your allocated points`;
        }
        alert (`You have earned ${points} loyalty points.`);
    }
}


// couldnt find the error
// function addToPoints(evt) {
//     if (theForm.checkValidity()) {
//         evt.preventDefault();
//         let numRooms = parseInt(txtNumber.value);
//         let loyaltyPoints = numRooms * 20;

//         if (numRooms > 3) {
//             // Increase the loyalty points for booking more than 3 rooms
//             loyaltyPoints += (numRooms - 3) * 10;
//         }

//         // ...

//         alert(`You have earned ${loyaltyPoints} loyalty points.`);
//     }

//     if(localStorage.getItem("loyaltyPoints") !== null){
//         // If the key exists, add the new points to the existing points
//         var existingPoints = parseInt(localStorage.getItem("loyaltyPoints"));
//         loyaltyPoints += existingPoints;
//     }
    
//     // Store the updated loyalty points in the localStorage
//     localStorage.setItem("loyaltyPoints", loyaltyPoints);
// }
