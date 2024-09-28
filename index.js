// import generateName from "sillyname"
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const promptObject = {
  message: "Write Your Link here",
  name: "Link",
};
/**Inquirer Package is used to get the url or data for which the user want s to create the URL(external Module)
 ***qr-image package is used to create the qr image of the url or data that is provided by the user(external Module)
 ****fs is required to create a new file preferably png for the qr that is generated. (Internal Module)
 */
inquirer
  .prompt([promptObject])
  .then((answers) => {
    const image = qr.image(answers?.Link, { type: "png" });
    image.pipe(fs.createWriteStream("LinkImage.png"));
  })
  .catch((err) => console.log(err));
