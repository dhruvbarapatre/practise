const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload/")
    },
    filename: (req, file, cb) => {
        const date = new Date()
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

module.exports = upload