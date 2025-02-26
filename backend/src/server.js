import dotenv from 'dotenv';
dotenv.config();

import connectDB from './Config/db.js';
import app from './index.js';

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server Listening on Port: ${PORT}`);
});
