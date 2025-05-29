
const formContainer = document.getElementById("formContainer");
const formTitle = document.getElementById("formTitle");
const numberInput = document.getElementById("number");
const cardImage = document.getElementById("cardImage");

const imageMap = {
  Dialog: "dialog.png",
  Hutch: "hutch.png",
  Mobitel: "mobitel.png",
  FF: "ff.png",
  TV: "tv.png"
};

function showCardOptions() {
  document.querySelector(".card-options").style.display = "block";
}

function selectCard(type) {
  formContainer.style.display = "block";
  const now = new Date().toLocaleString();
  document.getElementById("time").value = now;
  formTitle.innerText = type + " Reload";
  cardImage.src = imageMap[type];
  const jemPackSelect = document.getElementById("jemPack");

  if (type === "FF") {
    numberInput.placeholder = "Enter your Free Fire ID";
    jemPackSelect.style.display = "block";
    jemPackSelect.required = true;
  } else {
    if (type === "TV") {
      numberInput.placeholder = "Enter your Dialog TV Number";
    } else {
      numberInput.placeholder = "Enter your Phone Number";
    }
    jemPackSelect.style.display = "none";
    jemPackSelect.required = false;
  }
}

document.getElementById("withdrawForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
    time: document.getElementById("time").value,
    title: formTitle.innerText,
    jemPack: document.getElementById("jemPack").value || "N/A"
  };

  emailjs.send("service_3pnjxxg", "template_jrstb44", data, "DILCPulrx3UIR_7KL")
    .then(() => {
      alert("Withdraw request sent!");
      document.getElementById("withdrawForm").reset();
      document.getElementById("jemPack").style.display = "none";
    })
    .catch((error) => {
      alert("Error sending: " + error);
    });
});
