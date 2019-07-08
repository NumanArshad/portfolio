
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'numanuet311@gmail.com',
    pass: '47841271'
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.sendEmail = (req, res) => {
  console.log("get order by id")
  
  var mailOptions = {
    from: '"Haji Sab" <numanuet311@gmail.com',
    to: req.body.EmailAddress,
    subject: 'Sending Email yahoo',
    html:'Assalam ul alikum!'
   // html: 'Assalam ul alikum!' + '<b>' + order.Name + '</b>' + '<br>' + 'your package has been submitted.'+'<br>'+'Your Sign In  Password :'+order.password+ '<br>' + 'Your Departure date' + '</b>' + package.StartDate + '</b>' + '<br>' + 'FlightName is' + package.FlightName + '<br>' + 'Your Makkah Hotel is:' + package.MakkaHotelName + ' and Makkha Mukarama stay duration is' + package.MakkahStay + '<br>' + 'Your Madina Hotel is:' + package.MadinaHotelName + ' and Madina Munawara stay duration is' + package.MadinaStay + '<br>' + 'Your Grand total is:' + package.MaxRange
  };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log("email  not sent" + error)
                res.status(500).send({'sendStatus':'failure'});
              } else {

                console.log("email sent" + info)
                res.status(200).send({'sendStatus':'emailsent','info':info});
              }
            })
           
       
  
};
