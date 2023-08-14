require('dotenv').config() // for creating environment vvariables
const mongoose = require("mongoose")

const connected = ()=>{
    
    main().catch(err => console.log(err));
    
      async function main() {
      await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connected");
      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }

}

module.exports = connected


