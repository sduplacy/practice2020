exports.get_main = function(req, res, next) {
    res.render('index', { title: 'Express' });
  }

exports.submit_lead = function (req, res , next){
    console.log("Email", req.body.lead_email);
    res.redirect('/');

 } 