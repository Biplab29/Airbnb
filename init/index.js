
const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../models/listing.js");




const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust"

main()
.then(() =>{
    console.log("Connected to MongoDB");
}).catch((error) =>{
    console.log("Error connecting to MongoDB");
});

async function main(){
   await mongoose.connect(MONGO_URL);
    
};

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({ ...obj, owner: "67e840273fa7ae0e15620798" }));
     await Listing.insertMany(initData.data);
    console.log(" Data was initialized");
};

initDB();