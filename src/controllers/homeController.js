const { readFile } = require("../utils/fs")

const getHome = (req, res) => {
    let cars = readFile("cars")
    res.render("index", {cars} )
}

const getLogin = (req, res) => {
    res.render("login" )
}

module.exports = {
    getHome,
    getLogin
}

