const links = {
  dialog: "https://wa.me/+94767861594?text=Dialog+card+for+free+my+usarmeme=",
  hutch: "https://wa.me/+94767861594?text=Hutch+card+for+free+my+usarmeme=",
  mobitel: "https://wa.me/+94767861594?text=Mobitel+card+for+free+my+usarmeme=",
  dialogtv: "https://wa.me/+94767861594?text=Dialog+TV+card+for+free+my+usarmeme=",
  ff: "https://wa.me/+94767861594?text=FF+JEM+for+free+my+usarmeme="
};

function openLink(key) {
  if (links[key]) {
    window.open(links[key], "_blank");
  } else {
    alert("Link එක සෙට් කරලා නෑ!");
  }
}
