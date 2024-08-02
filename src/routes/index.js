const { Router } = require("express")
const { getHome, getLogin } = require("../controllers/homeController")
const { getAdminPage, postAdminPage } = require("../controllers/adminController")
const { login } = require("../controllers/loginController")
const verifyToken = require("../middlewares/verifyToken")

const router = Router()


router.get("/", getHome)
router.get("/login", getLogin)
router.get("/admin", verifyToken, getAdminPage)
router.post("/login", login)
router.post("/admin", verifyToken, postAdminPage)
 
module.exports = router