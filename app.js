const nodemailer = require("nodemailer");
const fs = require("fs");

let rawdata = fs.readFileSync("./account/account.json");
let account = JSON.parse(rawdata);

console.log(account.password);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {},
});
