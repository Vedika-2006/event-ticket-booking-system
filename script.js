function bookingSuccess() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let event = document.getElementById("event").value.trim();
    let tickets = document.getElementById("tickets").value;

    if(name === ""){
        alert("❌ Please enter your name.");
        return false;
    }

    if(email === ""){
        alert("❌ Please enter your email.");
        return false;
    }

    if(!email.includes("@")){
        alert("❌ Please enter a valid email.");
        return false;
    }

    if(event === ""){
        alert("❌ Please enter the event name.");
        return false;
    }
    

    if(tickets <= 0){
        alert("❌ Please enter a valid number of tickets.");
        return false;
    }

    let bookingId = "EVT" + Math.floor(Math.random() * 100000);

    let rows = ["A","B","C","D","E","F"];
    let seat = rows[Math.floor(Math.random()*rows.length)] + "-" + (Math.floor(Math.random()*30)+1);

    alert(
        "🎉 Booking Successful!\n\n" +
        "Name: " + name +
        "\nEvent: " + event +
        "\nTickets: " + tickets +
        "\nBooking ID: " + bookingId +
        "\nSeat Number: " + seat +
        "\n\nEnjoy Your Event! 😊"
    );

    return false;
}
function selectEvent(eventName){
    document.getElementById("event").value = eventName;
}
