const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 5000;
const bootcamperRouter = require('./routes/bootcampers');
const reflectionRouter = require('./routes/reflections');
const topicsRouter = require('./routes/topics');
const loginRouter = require('./routes/login');
const quoteRouter = require('./routes/quotes');
const authRouter = require('./routes/auth');
// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

//Routers
app.use('/bootcampers', bootcamperRouter);
app.use('/reflections', reflectionRouter);
app.use('/topics', topicsRouter);
app.use('/login', loginRouter);
app.use('/quote', quoteRouter);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
	res.json({
		success: true,
		payload: 'it worked',
	});
});

app.listen(port, () => console.log('listening on port ' + port));
