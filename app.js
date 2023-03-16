const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotEnv = require('dotenv')
const swaggerUi = require("swagger-ui-express");
dotEnv.config();


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const drinksRouter = require('./routes/drinks')
const categoryRouter = require('./routes/category')
const ingredientsRouter = require('./routes/ingredients')
const glassRouter = require('./routes/glass')
const relate = require('./database/relationships')
const specs = require('./services/swagger')

const app = express();
relate();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/drinks', drinksRouter);
app.use('/categories', categoryRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/glasses', glassRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
