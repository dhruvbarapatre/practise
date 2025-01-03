const nodemailer = require("nodemailer")

const transpoter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "barapatredhruv28012006@gmail.com",
        pass: "kqqxouqyn"
    }
})

async function sendmail(to, sub, html) {
    try {
        const data = await transpoter.sendMail({
            to,
            sub,
            html,
            from:' barapatredhruv28012006@gmail.com'
        })
        console.log("Mail Sent Succesfully.....",data)
    } catch (error) {
        console.log(error)
    }

    
}

sendmail("barapatremonish051127@gmail.com", "hi bro", "<h1>Gandu<h1/>")