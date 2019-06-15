import moment from "moment";

const time = moment().format("DD/MM/YYYY HH:mm");

document.body.innerHTML = `<h1>Now ${time}</h1>`;
document.body.innerHTML += `<h2>Site location: ${window.location.href}</h2>`;
