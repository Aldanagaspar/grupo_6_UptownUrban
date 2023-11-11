function userLoggedMiddleware(req,res,next) {
    res.locals.isLogged = false;
    if(req.session && req.session.userLogged) {
        res.locals.isLogged = true;
    };
    next();
};
module.exports = userLoggedMiddleware;


/*
    const db = require('../database/models/index');

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    const emailInCookie = req.cookies.userEmail;

    try {
        const user = await db.User.findOne({
            where: {
                email: emailInCookie
            }
        });

        if (user) {
            req.session.userLogged = user;
            res.locals.isLogged = true;
        }
    } catch (error) {
        console.error(error);
    }

    next();
}

module.exports = userLoggedMiddleware;

*/