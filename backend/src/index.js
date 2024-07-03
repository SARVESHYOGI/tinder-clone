import express from 'express';
import mongoose from 'mongoose';
import Cards from '../db/Card.js'; // Ensure the path is correct based on your file structure
import dotenv from 'dotenv';
import cors from 'cors'; // Import the CORS middleware

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const connection_url = process.env.CONNECTION_URL;

app.use(express.json());
app.use(cors()); // Use the CORS middleware

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch((error) => {
    console.error('Connection error', error);
});

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/tinder/cards', async (req, res) => {
    const dbCard = req.body;
    console.log('Received data:', dbCard);  // Log the received data

    try {
        const data = await Cards.create(dbCard);
        res.status(201).send(data);
    } catch (err) {
        console.error('Error creating card:', err);  // Log the error
        res.status(500).send(err);
    }
});

app.get('/tinder/cards', async (req, res) => {
    try {
        const data = await Cards.find();
        res.status(200).send(data);
    } catch (err) {
        console.error('Error retrieving cards:', err);  // Log the error
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
