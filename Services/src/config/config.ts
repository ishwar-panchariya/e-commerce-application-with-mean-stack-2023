import dotenv from 'dotenv';
dotenv.config();

export default {
    APP: process.env.APP || 'development',
    PORT: process.env.PORT || '8000',
    URL: `/api`,
    DB_URL:'mongodb+srv://eshop-user:1qaz0plm&@e-shop.wfwrvpq.mongodb.net/eshop-database?retryWrites=true&w=majority&ssl=true'
};