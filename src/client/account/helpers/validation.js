const MIN_PASSWORD_LENGTH = 5;
const MIN_USERNAME_LENGTH = 3;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

const validateEmail = (email) => {
  if (!email) {
    return 'Email is mandatory';
  }

  const validFormat = EMAIL_REGEX.test(email.toLowerCase());
  if (!validFormat) {
    return 'Email invalid';
  }

  return null;
};

const validatePassword = (password) => {
  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    return `Password too short`;
  }

  return null;
};

const validateUsername = (username) => {
  if (!username || username.length < MIN_USERNAME_LENGTH) {
    return `Username too short`;
  }

  return null;
};

export { validateEmail, validatePassword, validateUsername };
