const { readFile, writeFile } = require("../utils/fs")

const getAdminPage = (req, res) => {
    let cars = readFile("cars")
    res.render("admin", {cars})
}



const postAdminPage = (req, res) => {
    let cars = readFile("cars")
    let { name, price, color, desc, img } = req.body

    let filteredcars = cars.find(el => el.name === name)
    if (filteredcars) {
        req.redirect("/admin")
    }

    cars.push({
        id: cars.at(-1)?.id + 1 || 1,
        name,
        price,
        color,
        desc,
        img
    })

    writeFile("cars", cars)
    res.redirect("/admin")


}



module.exports = {
    getAdminPage,
    postAdminPage
}


