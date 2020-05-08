//declare variables


const express = require("express")
const app = express();
const PORT = process.env.PORT || 3000
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")// declare the app settings
const PublicKey = "pk_test_hbHEQQVlwyxT1gBiyygnfoKr00ZVtux3g5"
const SecretKey = "sk_test_pF8fZHSESHedsbAfGR34ta2u00ZdVuPKxD"
const stripe = require("stripe")(SecretKey)

app.set("views", "./public/ejs/")
app.set("view engine", "ejs")
app.use(express.static("./public/"))
app.use(bodyParser())

app.post("/donate", (req, res) => {
  var amount = req.body.amount
  console.log("donation of " + amount)
  stripe.charges.create({
    amount: amount,
    source: req.body.stripeTokenid,
    currency: "eur"
  }).then(() => {
    console.log("Succesfully Donated")
    res.json({
      Message: "Succesfully Donated"
    })
  }).catch(() => {
    console.log("Payment Failed")
    res.status(500).end()
  })
})
//declare the routes for the app
app.get("/", (req, res) => {
  res.render("homepage")// test for the server
})
//if mobile
app.get("/mobile", (req, res) => {
  res.render("mobile", {
    stripePublicKey: PublicKey,
  })
})
app.get("/livestream", (req, res) => {
  res.render("livestream")
})
app.get("/give", (req, res) => {
  res.render("give", {
    stripePublicKey: PublicKey,
  })
})
app.get("/donation", (req, res) => {
  res.render("donation")
})
app.get("/about-us", (req, res) => {
  res.render("aboutUs")
})
app.get("/testimony", (req, res) => {
  res.render("sendtestimony")
})
app.get("/themandate", (req, res) => {
  res.render("themandate")
})
app.get("/activities", (req, res) => {
  res.render("activities")
})
app.get("/themeofthemonth", (req, res) => {
  res.render("themeofthemonth")
})
app.get("/themeoftheyear", (req, res) => {
  res.render("themeoftheyear")
})
app.get("/prayerrequest", (req, res) => {
  res.render("prayerrequest")
})
app.get("/church-ministries", (req, res) => {
  res.render("churchministries")
})
app.get("/events", (req, res) => {
  res.render("events")
})
app.get("/gallery", (req, res) => {
  res.render("gallery")
})
app.get("/contact-us", (req, res) => {
  res.render("contact")
})
app.get("/address", (req, res) => {
  res.render("address")
})

app.post("/testimony", (req, res) => {
  var data = req.body
  var name = data.name
  var email = data.email
  var testimony = data.testimony
  console.log(`Details: ${testimony}`)
  nodemailer.createTestAccount((err, account) => {
    var transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "progressemuan223@gmail.com",
        pass: "Jukilo22J"
      }
    })

    var mailOptions = {
      from: email, // sender address
      to: 'vineyarofgod@gmail.com', // list of receivers
      subject: `My Name is ${name} and My Testimony is this`, // Subject line
      html: `<p>${testimony}</p>`// plain text body
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    response.render("sendtestimony", {
      success: "Your Message has been sent"
    })
  })
})
app.post("/prayerrequest", (req, res) => {
  var data = req.body
  var name = data.name
  var email = data.email
  var testimony = data.testimony
  console.log(`Details: ${testimony}`)
  nodemailer.createTestAccount((err, account) => {
    var transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "progressemuan223@gmail.com",
        pass: "Jukilo22J"
      }
    })

    var mailOptions = {
      from: email, // sender address
      to: 'vineyarofgod@gmail.com', // list of receivers
      subject: `Prayer Request from ${name}`, // Subject line
      html: `<p>${testimony}</p>`// plain text body
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    response.render("prayerrequest", {
      success: "Your Message has been sent"
    })
  })
})

app.post("/contact", (req, res) => {
  var data = req.body
  var name = data.name
  var email = data.email
  var testimony = data.testimony
  console.log(`Details: ${testimony}`)
  nodemailer.createTestAccount((err, account) => {
    var transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "progressemuan223@gmail.com",
        pass: "Jukilo22J"
      }
    })

    var mailOptions = {
      from: email, // sender address
      to: 'vineyarofgod@gmail.com', // list of receivers
      subject: `(Contact Section)Message from ${name}`, // Subject line
      html: `<p>${testimony}</p>`// plain text body
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    response.render("contact", {
      success: "Your Message has been sent"
    })
  })
})

app.post("/mobiletestimony", (req, res) => {
  var data = req.body
  var name = data.name
  var testimony = data.testimony
  console.log(`Details: ${testimony}`)
  nodemailer.createTestAccount((err, account) => {
    var transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "progressemuan223@gmail.com",
        pass: "Jukilo22J"
      }
    })

    var mailOptions = {
      from: email, // sender address
      to: 'vineyarofgod@gmail.com', // list of receivers
      subject: `My Name is ${name} and My Testimony is this`, // Subject line
      html: `<p>${testimony}</p>`// plain text body
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    response.render("sendtestimony", {
      success: "Your Message has been sent"
    })
  })
})
app.post("/mobilecontact", (req, res) => {
  var data = req.body
  var name = data.name
  var email = data.email
  var testimony = data.testimony
  console.log(`Details: ${testimony}`)
  nodemailer.createTestAccount((err, account) => {
    var transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "progressemuan223@gmail.com",
        pass: "Jukilo22J"
      }
    })

    var mailOptions = {
      from: email, // sender address
      to: 'vineyarofgod@gmail.com', // list of receivers
      subject: `(Contact Section)Message from ${name}`, // Subject line
      html: `<p>${testimony}</p>`// plain text body
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    response.render("contact", {
      success: "Your Message has been sent"
    })
  })
})
app.post("/prayerrequest", (req, res) => {
  var data = req.body
  var name = data.name
  var email = data.email
  var testimony = data.testimony
  console.log(`Details: ${testimony}`)
  nodemailer.createTestAccount((err, account) => {
    var transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "progressemuan223@gmail.com",
        pass: "Jukilo22J"
      }
    })

    var mailOptions = {
      from: email, // sender address
      to: 'vineyarofgod@gmail.com', // list of receivers
      subject: `Prayer Request from ${name}`, // Subject line
      html: `<p>${testimony}</p>`// plain text body
    }

    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    response.render("prayerrequest", {
      success: "Your Message has been sent"
    })
  })
})
// establish server runtime
app.listen(PORT, (e) => {
  if(e) throw e
  console.log("Server is up and running on port 3000")
})
