function bookingSuccess() {

    let bookingId = "EVT" + Math.floor(Math.random() * 100000);

    let rows = ["A", "B", "C", "D", "E", "F"];
    let seat = rows[Math.floor(Math.random() * rows.length)] + "-" + (Math.floor(Math.random() * 30) + 1);

    alert(
        "🎉 Booking Successful!\n\n" +
        "Booking ID: " + bookingId +
        "\nSeat Number: " + seat +
        "\n\nEnjoy Your Event! 😊"
    );

    return false;
}
