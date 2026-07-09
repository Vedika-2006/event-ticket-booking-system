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

   document.getElementById("bookingSummary").style.display = "block";

document.getElementById("sName").textContent = name;
document.getElementById("sEmail").textContent = email;
document.getElementById("sEvent").textContent = event;
document.getElementById("sTickets").textContent = tickets;
document.getElementById("sBooking").textContent = bookingId;
document.getElementById("sSeat").textContent = seat;
    return false;
}
localStorage.setItem("name",name);

localStorage.setItem("email",email);

localStorage.setItem("event",event);

localStorage.setItem("tickets",tickets);

localStorage.setItem("bookingId",bookingId);

localStorage.setItem("seat",seat);

function selectEvent(eventName){
    document.getElementById("event").value = eventName;
}
function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}
const cards=document.querySelectorAll(".event-card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

});
window.onscroll=function(){

let btn=document.getElementById("topBtn");

if(document.documentElement.scrollTop>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
