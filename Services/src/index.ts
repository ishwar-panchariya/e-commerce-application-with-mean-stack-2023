import app from './app';
import CONFIG from './config/config';
import './config/db';

const PORT = CONFIG.PORT;


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});