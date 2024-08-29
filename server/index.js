const connectToMongoDB = require("./db.js");
const app = require("./config/app.js")
const { API_PORT } = require("./config/config.js");

//Establishing Connection to MongoDB
connectToMongoDB();

app.listen(API_PORT, () => {
    console.log(`Server running on port: ${API_PORT}`);
});


