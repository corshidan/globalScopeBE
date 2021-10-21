const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({
		success: true,
		payload: 'it worked',
	});
});

app.listen(port, () => console.log('listening on port ' + port));
