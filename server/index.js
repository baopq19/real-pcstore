require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const itemRouter = require('./routes/item');
const cors = require('cors');

const DB_NAME = 'real-pcstore';

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@real-pcstore.zxzqt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

		console.log(`MongoDB connected`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use(`/api/auth`, authRouter);
app.use(`/api/items`, itemRouter);

app.listen(process.env.PORT, () =>
	console.log(`Server started on port ${process.env.PORT}`)
);
