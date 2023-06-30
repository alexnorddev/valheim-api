const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./middleware/auth'));
app.use(require('./middleware/logger'));

app.use('/biomes', require('./routes/biomes'));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}.`));