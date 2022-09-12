const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  FIELD_REQUIRED: 400,
  INVALID_FIELD: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};