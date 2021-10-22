const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bootcamperRouter = require('./routes/bootcampers');

// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routers

app.use('/bootcampers', bootcamperRouter);

app.get('/', (req, res) => {
	res.json({
		success: true,
		payload: 'it worked',
	});
});

app.listen(port, () => console.log('listening on port ' + port));
