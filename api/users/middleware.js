module.exports = {
  isValid,
};

function isValid(user) {
  return Boolean(
    user.username &&
      user.password &&
      user.phone &&
      typeof user.password === "string"
  );
}
