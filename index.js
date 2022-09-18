const hbs= require ("express-handlebars")
const express = require ("express")

const PORT=3000;
const app= express();
const router = require ("./routes/form.js")

app.engine (".hbs", hbs.engine({extname:"hbs"}));
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded())

app.listen(PORT, (err)=>{
    !err ? console.log(`Corriendo on http://localhost:${PORT}`) : console.log(`no funca`);;
})




app.use("/", router)



