exports.homeRoutes = (req, res) => {

    res.render('index')
}

exports.aboutRoutes = (req, res) => {

    res.render('about')
}

exports.activitiesRoutes = (req, res) => {

    res.render('achivements')
}

exports.teamRoutes = (req, res) => {

    res.render('team')
}

exports.contactRoutes = (req, res) => {

    res.render('contact')
}

exports.formRoutes = (req, res) => {

    res.render('form')
}

exports.registrationRoutes = (req, res) => {

    res.render('Registration')
}

exports.phpdbconnectRoute = (req, res) =>{
    res.render('qwerty_dbconnect.php')
}

exports.phpregisterRoute = (req, res) =>{
    res.render('qwerty_registration_insert.php')
}