
const appointmentForm = document.getElementById("appointment-form");

appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const patientName = document.getElementById("patient-name").value;
    const service = document.getElementById("dental-service").value;
    const appointmentDate = document.getElementById("appointment-date").value;

    alert(
        `Thank you, ${patientName}!\n\n` +
        `Your demo request for ${service} on ${appointmentDate} has been received on this page.\n\n` +
        `The clinic has not confirmed your appointment yet.`
    );

    appointmentForm.reset();
});


const dateInput = document.getElementById("appointment-date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayDate = `${year}-${month}-${day}`;

dateInput.min = todayDate;

function toggleAvailability(button) {
    const isAvailable = button.classList.contains("available");

    if (isAvailable) {
        button.classList.remove("available");
        button.classList.add("unavailable");
        button.textContent = "Unavailable";
    } else {
        button.classList.remove("unavailable");
        button.classList.add("available");
        button.textContent = "Available";
    }
}

const aminaStatus = document.getElementById("amina-status");

if (aminaStatus) {
    const savedStatus = localStorage.getItem("pearlDoctorAvailable");

    if (savedStatus === "false") {
        aminaStatus.classList.remove("available");
        aminaStatus.classList.add("unavailable");
        aminaStatus.textContent = "Unavailable";
    } else {
        aminaStatus.classList.remove("unavailable");
        aminaStatus.classList.add("available");
        aminaStatus.textContent = "Available";
    }
}

const danielStatus = document.getElementById("daniel-status");
const toggleDanielButton = document.getElementById("toggle-daniel-status");

if (danielStatus && toggleDanielButton) {
    function displayDanielStatus(isAvailable) {
        danielStatus.classList.toggle("available", isAvailable);
        danielStatus.classList.toggle("unavailable", !isAvailable);
        danielStatus.textContent = isAvailable ? "Available" : "Unavailable";
    }

    const savedDanielStatus = localStorage.getItem("pearlDanielAvailable");

    displayDanielStatus(savedDanielStatus === "true");

    toggleDanielButton.addEventListener("click", function () {
        const isAvailable = danielStatus.classList.contains("available");
        const newStatus = !isAvailable;

        localStorage.setItem("pearlDanielAvailable", String(newStatus));
        displayDanielStatus(newStatus);
    });
}
