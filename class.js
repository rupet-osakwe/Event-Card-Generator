const hostForm = document.querySelector(".container");
const hostTitle = document.querySelector(".honorific");
const hostName = document.querySelector(".name");
const hostPhone = document.querySelector(".phone");
const hostMail = document.querySelector(".email");
// const hostImage = ".img";
const eventType = document.querySelectorAll(".eventType");
const eventDate = document.querySelector(".date");
const eventTime = document.querySelector(".time");
const eventVenue = document.querySelector(".venue");
const eventColor = document.querySelector(".eventColor");
const hostImg = document.getElementById("imageChosen");
const submitBtn = document.querySelector(".submit");
const cardHolder = document.querySelector(".cardContainer");
const inFile = document.getElementById("file");
const otherInfo = document.querySelector(".addInfo");

hostImg.style.display = "none";
otherInfo.style.backgroundColor = "white";

function formCard() {
  const isValidForm = validateForm();
  if (!isValidForm) {
    const errorEl = document.querySelector(".error");
    errorEl.innerHTML = "Please fill out all fields to continue.";
    errorEl.classList.add(".show");
    setTimeout(() => errorEl.classList.remove(".show"), 5000);
    return;
  }

  eventType.forEach(function (event) {
    if (event.checked) {
      celebrationType = event.value;
    }
  });
  // console.log(celebrationType);

  cardHolder.classList.add(".coreCard");
  hostForm.style.display = "none";

  const cardContent = `<div class="head">Invitation Invitation Invitation...</div><div class="no1"> with pleasure in our hearts we the entire family members of ${hostTitle.value} ${hostName.value}</div> <img src="${hostImg.src}" class="photoFile"/>  <br> <div class="no2">invites you to a ${celebrationType}</div><br> <div class="no3">Venue: ${eventVenue.value}<br> Date: ${eventDate.value}<br> Time: ${eventTime.value}<br> Color of the day: ${eventColor.value}</div><br>
  <div class="foot"><p class="addInfo">${otherInfo.value}</p><div class="no4"> For further enquiries please contact ${hostPhone.value} or send an e-mail to ${hostMail.value}</div></div>`;

  cardHolder.innerHTML = cardContent;
  hostImg.style.display = "none";
  console.log(hostImg);
}

inFile.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      console.log(this.result);
      hostImg.setAttribute("src", this.result);
      hostImg.style.display = "block";
    });
    reader.readAsDataURL(file);
  }
});

function validateForm() {
  if (
    !hostName.value ||
    !hostImg.src ||
    !hostMail.value ||
    !eventVenue.value ||
    !hostPhone.value ||
    !otherInfo.value
  ) {
    // alert("Please fill out all the fields");
    return false;
  } else {
    return true;
  }
}
