require('dotenv').config({ silent : true });

const express = require('express');
const debug = require('debug')('audio-purger:index');
const app = express();

const requestLog = require('./lib/request-log');
const validateRequest = require('./lib/check-token');
const purger = require('./controllers/purger');

const uuidRegex = '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}';


app.get('/__gtg', (req, res) => {
	res.status(200).end();
});

// error handler
app.use(requestLog);
app.use(validateRequest);

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.delete(`^/purge/:uuid(${uuidRegex})$`, purger);

const port = process.env.PORT || 3001;
app.listen(port, function () {
  debug(`Server listening on ${port}`);
});
