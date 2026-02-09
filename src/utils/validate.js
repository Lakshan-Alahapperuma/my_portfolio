function isEmail(v) {
  return typeof v === 'string' && /\S+@\S+\.\S+/.test(v);
}

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

module.exports = { isEmail, isNonEmptyString };
