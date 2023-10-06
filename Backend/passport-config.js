const localStrategy = require("passport-local");
const { User }  = require("./Modal/users");
const bcrypt = require("bcrypt");

exports.initializePassport = (passport) => {
  passport.use(
    new localStrategy(async (username, password, next) => {
      try {
        const findUser = await User.findOne({ username });
        if (!findUser) return next(null, false);
        if (!bcrypt.compareSync(password, findUser.password)) {
          return next(null, false);
        }
        return next(null, findUser);
      } catch (error) {
        next(error, false);
        console.log(error);
      }
    })
  );


  passport.serializeUser((user, done) => {
    done(null, user.id);
    console.log( "id is " + user.id);
  });

  
  passport.deserializeUser( async (id, done) => {
    try {
      const user = await  User.findById(id);
     return done(null, user);
    } catch (error) {
     return done(error, false);
    }
  });

};


exports.isAuthenticated = (req,res,next)=>{
  if(req.user) return next()
  res.send(401)
  // res.redirect("/login")
}

