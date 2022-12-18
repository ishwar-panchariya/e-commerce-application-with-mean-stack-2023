import mongoose from 'mongoose';
import CONFIG from './config';
mongoose.set('strictQuery', false);

export default (async () => {
    mongoose.connect(CONFIG.DB_URL,     
        // @ts-ignore
        { useNewUrlParser: true })
    .then(() => {
        console.log('DB Connection is OK!')
    })
    .catch(err => console.log(err));
})();