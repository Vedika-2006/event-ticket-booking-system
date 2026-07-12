// Get Event Name from URL
const params = new URLSearchParams(window.location.search);
const eventName = params.get("event");

// Autofill Event Name
document.getElementById("event").value = eventName;

// Booking Function
function bookingSuccess() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let event = document.getElementById("event").value;
    let tickets = document.getElementById("tickets").value;

    if(name === "" || email === "" || tickets === ""){
        alert("Please fill all fields.");
        return false;
    }

    let bookingId = "EVT" + Math.floor(Math.random()*100000);

    let rows = ["A","B","C","D","E","F"];
    let seat = rows[Math.floor(Math.random()*rows.length)] + "-" + (Math.floor(Math.random()*30)+1);

    // Save Data
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("event", event);
    localStorage.setItem("tickets", tickets);
    localStorage.setItem("bookingId", bookingId);
    localStorage.setItem("seat", seat);

    // Open Success Page
    window.location.href = "success.html";

    return false;
}
