function adminLoggedMiddleware(req,res,next) {
    res.locals.isAdmin = false;
    if(req.session && req.session.userLogged) {
        let email = req.session.userLogged.email;
        if (email == "admin@gmail.com") {
            res.locals.isAdmin = true;
        }
    };
    next();
};
module.exports = adminLoggedMiddleware;