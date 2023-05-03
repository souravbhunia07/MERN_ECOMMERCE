// Connects with the databases

const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectDataBase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }).then((data) => {
        console.log(`Mongo conencted with server: ${data.connection.host}`);
    });
    // .catch((err) => {
    //     console.log(err)
    // })
}

module.exports = connectDataBase;
