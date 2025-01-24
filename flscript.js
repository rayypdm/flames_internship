function checkInputs() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const dateInput = document.getElementById('dateInput').value;

    if (!nameInput || !dateInput) {
        alertMessage();
    } else {
        clearAlert();
        displayName();
        displayDate();
    }
}

function displayName() {
    const nameInput = document.getElementById('nameInput').value;  
    document.getElementById('nameArea').textContent = `${nameInput}`;
}

function displayDate() {
    const dateInput = document.getElementById('dateInput').value;
    
    document.getElementById('dateArea').textContent = `${dateInput}`;
    displayAge();
    displayZodiac();
}

function displayAge() {
    const dateInput = document.getElementById('dateInput').value;
    const birthDate = new Date(dateInput); 
    const today = new Date();

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth(); 
    let birthDay = birthDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth(); 
    let currentDay = today.getDate();

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }
    document.getElementById('ageArea').textContent = `${age} years old`;
}

const zodiacSigns = [
    { name: "Capricorn", start: "01-01", end: "01-19" },
    { name: "Aquarius", start: "01-20", end: "02-18" },
    { name: "Pisces", start: "02-19", end: "03-20" },
    { name: "Aries", start: "03-21", end: "04-19" },
    { name: "Taurus", start: "04-20", end: "05-20" },
    { name: "Gemini", start: "05-21", end: "06-20" },
    { name: "Cancer", start: "06-21", end: "07-22" },
    { name: "Leo", start: "07-23", end: "08-22" },
    { name: "Virgo", start: "08-23", end: "09-22" },
    { name: "Libra", start: "09-23", end: "10-22" },
    { name: "Scorpio", start: "10-23", end: "11-21" },
    { name: "Sagittarius", start: "11-22", end: "12-21" },
    { name: "Capricorn", start: "12-22", end: "12-31" }
];

function displayZodiac() {
    const dateInput = document.getElementById('dateInput').value;
    const birthArr = dateInput.split('-'); 
    const birthMonth = birthArr[1];
    const birthDay = birthArr[2];

    const birthMonthDay = `${birthMonth}-${birthDay}`;

    const zodiac = zodiacSigns.find(sign =>
        (birthMonthDay >= sign.start && birthMonthDay <= sign.end)
    );

    document.getElementById('zodiacArea').textContent = `${zodiac.name}`;
}

function alertMessage() {
    // Display the alert message
    document.getElementById('alertArea').textContent = "Fill out needed information.";
}

function clearAlert() {
    // Clear the alert message when valid input is provided
    document.getElementById('alertArea').textContent = "";
}


