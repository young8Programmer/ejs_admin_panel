const express = require("express")
const cookiParser = require("cookie-parser")
const path  = require("path")
const router = require("./src/routes")


const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(process.cwd(), "src", "views"))
app.use(express.static(path.join(process.cwd(), "src", "public")))
app.use(express.urlencoded({extended: true}))
app.use(cookiParser())

app.use(router)

app.listen(9000, () => {
    console.log(9000);
})