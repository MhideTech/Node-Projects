module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.__dirnamestatusCode).json({
    status: err.status,
    message: err.message
  });
};
