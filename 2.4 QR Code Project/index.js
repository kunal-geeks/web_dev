import { writeFile, createWriteStream} from 'node:fs'
import inquirer from 'inquirer';
import { image } from 'qr-image';
inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    writeFile("url.txt", answers.URL, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    var qr_png = image(answers.URL, { type: 'png' });
    qr_png.pipe(createWriteStream('urlQR.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  /* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/