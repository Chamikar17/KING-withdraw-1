const links = {
  dialog: "https://your-dialog-card-link.com",
  hutch: "https://your-hutch-card-link.com",
  mobitel: "https://your-mobitel-card-link.com",
  dialogtv: "https://your-dialog-tv-link.com",
  ff: "https://your-ff-topup-link.com"
};

function openLink(key) {
  if (links[key]) {
    window.open(links[key], "_blank");
  } else {
    alert("Link එක සෙට් කරලා නෑ!");
  }
}
