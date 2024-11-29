import { connect, disconnect } from "mongoose";
export default async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Can't Connect To MongoDB");
    }
}
// this function is used for data base security if any problem Occur then Disconnect fromm Database.
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Can't Connect To MongoDB");
    }
}
//# sourceMappingURL=connection.js.map