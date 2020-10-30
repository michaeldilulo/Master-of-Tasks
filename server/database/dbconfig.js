import mongoose from 'mongoose';

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connection.on("error", err => {
    console.error("[DATABASE ERROR]", err)
})

const connection_string = process.env.Connection_String || ""

export default class dbContext {
    static async connect() {
        try {
            let status = await mongoose.connect(connection_string)
            console.log("Connection to Database: Successful");
            return status;
        } catch (error) {
            console.error(error)
        }
    }
}