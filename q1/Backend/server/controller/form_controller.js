const formDB = require('../model/form_model');
const nodemailer = require('nodemailer')

async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'jaivirkal@gmail.com', // generated ethereal user
        pass: 'avnzhwbilhkvorxi', // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "jaivirkal@gmail.com", // sender address
      to: `${reciever}`,// Reciever address
      subject: `${workshop} Registration Confirmation mail`, // Subject line
    //   text: "This mail is regarding your confirmation of workshop", // plain text body
      html: `<b>You Have been succesfully registered for ${workshop} Workshop.<br>See you in the workshop! All the Best<br>Regards,<br>QWERTY.I/O</b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
}

var reciever;
var workshop;
var number;
// Create and save user
exports.create = (req, res) => {
    // Validate 
    if(!req.body){
        res.status(400).send({message: "content cannot be empty"})
        return;
    }
    // New user
    const form = new formDB({
        name:req.body.name,
        usn:req.body.usn,
        event:req.body.event,
        email:req.body.email,
        phno:req.body.phno,
        branch:req.body.branch,
        semester:req.body.semester,
        gender:req.body.gender,
        localite:req.body.localite,
        laptop:req.body.laptop
    })

    reciever = req.body.email;
    workshop = req.body.event;
    number = req.body.phno;
    number = number.toString();

    if(number.length < 10 || number.length > 10){

      form.save(form)
      .then(() => {

        main(reciever, workshop)
        res.redirect('/')
      })
      .catch(err =>{
        // res.status(500).send({
        //     message: err.message || "some error occured while create operation"
        // })
        // alert("Please recheck the details. Registration Failed.")
        res.redirect('/register')
      })
    }else{
      // alert("Please recheck the details. Registration Failed.")
      res.redirect('/register')
    }
}