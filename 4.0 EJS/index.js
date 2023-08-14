
import express from "express";

const app = express();
const PORT = 3000;

app.get("/",(req,res) => {
    const data = {
        title : "EJS tags",
        currentSeconds : new Date().getSeconds(),
        fruits : ['Apple','Banana','Cherry'],
        htmlContent : `<em>This is some em text</em>`,
    };
    console.log(`hhhh`);
    res.render("sol.ejs", data);
});

app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});
