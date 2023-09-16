const express = require('express')
const app = express()
const cors = require('cors')
const user_details = require('./model')
require('./conn')
app.use(cors())
app.use(express.json())

app.use(express.static(__dirname));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/signin.html')
})


app.post('/signin', async (req, res) => {
    const { email, pass } = req.body
    let flag = 10

    const user = await user_details.findOne({ email })
    if (user != null) {
        if (user.pass == pass) {
            flag = 1
            console.log("Login Successful")
        }
        else {
            flag = 0
            console.log("Invalid Credentials!")
        }
    }
    else {
        flag = 2
        console.log("User Not Registered!")
    }

    res.send(flag.toString())
})

app.post('/signup', async (req, res) => {
    const { email, pass, re_pass } = req.body
    let flag = 10
    const user = await user_details.findOne({ email })
    if (user == null) {
        if (pass == re_pass) {
            flag = 1
            await user_details.create({
                email: email,
                pass: pass,
                re_pass: re_pass
            })
            console.log("Registered Successfully")
        }
        else {
            flag = 0
            console.log("Passwords Don't Match!")
        }
    }
    else {
        flag = 2
        console.log("User Already Registered!")
    }

    res.send(flag.toString())
})

app.post('/recovery', async (req, res) => {
    const { email } = req.body
    let flag = 10
    const user = await user_details.findOne({ email })
    const nodemailer = require("nodemailer");

    if (user != null) {
        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "mernnode@gmail.com",
                pass: "mcjhweemdrsfixgy",
            },
        });

        let mailDetails = {
            from: "mernnode@gmail.com",
            to: user.email,
            subject: "Account Recovery",
            text:
                "Username: " + user.username + "\n" + "Password: " + user.password
        }

        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log("Something went wrong!");
            } 
            else {
                console.log("Email sent successfully");
                flag = 1;
                res.send(flag.toString());
            }
        })
    }
    else {
        console.log("User not Registered!");
        flag = 0;
        res.send(flag.toString());
    }
}

)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Listening to port 5000 . . .")
})
