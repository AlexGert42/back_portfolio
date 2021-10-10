const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aleeex.gerttt@gmail.com',
        pass: 'shitPassword',
    },
});


app.post('/message', async function (req, res) {


    res.send('ok')

    let {text, email, name} = req.body

    let info = await transporter.sendMail({
        from: 'MY PORTFOLIO MESSAGE',
        to: "alex.gert1812@gmail.com",
        subject: "Portfolio",
        html: `<b>Сообщение от работадателья</b> 
                <hr/>
            <h2>Name: ${name}</h2>
            <h2>Email: ${email}</h2>
            <div>Message: ${text}</div>`
    });

})

app.listen(3010, function () {
    console.log('WORK')
})






