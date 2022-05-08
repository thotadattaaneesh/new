if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
const res = require("express/lib/response")
const app = require("./app")



const dotenv = require("dotenv") 

const database = require("./config/database")

dotenv.config({path:"backend/config/config.env"} )

//connectin to database
database()

console.log(process.env.PORT);
const server = app.listen( process.env.PORT , (req,res) => {
    console.log(`Server is up and running on localhost:${process.env.PORT}`);
})
