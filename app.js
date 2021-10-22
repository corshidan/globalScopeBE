const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const bootcamperRouter = require('./routes/bootcampers');
const reflectionRouter = require('./routes/relfections');

// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routers

app.use('/bootcampers', bootcamperRouter);
app.use('/reflections', reflectionRouter);

app.get('/', (req, res) => {
	res.json({
		success: true,
		payload: 'it worked',
	});
});

app.listen(port, () => console.log('listening on port ' + port));
