const fs = require("fs");
const generateHTML = require("../utils/generatepage");

const writeFile = (pageHTML) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", pageHTML, (err) => {
      //if error, reject and send the error to the catch method
      if (err) {
        reject(err);
        return;
      }
      //if resolves, send data to then method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/styles.css", "./dist/styles.css", (err) => {
      //if there's an error, reject and send the error to the catch method
      if (err) {
        reject(err);
        return;
      }
      //if resolves, send data to then method
      resolve({
        ok: true,
        message: "Stylesheet created!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
