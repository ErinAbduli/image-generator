import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!';

    return res.status(status).json({
        success: false,
        status,
        message
    });
});

//Default get
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

//connect to mongodb
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
        .then(() => {
            console.log('Connected to MongoDB');
        }).catch((error) => {
            console.error("failed to connect to the DB! ");
            console.error(error);
        });
}

//starting the server
const startServer = async () => {
    try {
        connectDB();
        app.listen(8080, () => {
            console.log(`Server is running on port 8080`);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();