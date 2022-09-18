const hbs= require ("express-handlebars")
const express = require ("express")

const PORT=3000;
const app= express();
const router = require ("./routes/form.js")

app.locals.sendMailFeeback 

app.engine (".hbs", hbs.engine({extname:"hbs"}));
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))

app.listen(PORT, (err)=>{
    !err ? console.log(`Corriendo on http://localhost:${PORT}`) : console.log(`no funca`);;
})

app.get("/", (req, res)=>{
    res.render("home")
})


app.use("/form", router)



