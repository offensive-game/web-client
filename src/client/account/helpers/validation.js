const MIN_PASSWORD_LENGTH = 5;
const MIN_USERNAME_LENGTH = 3;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line

const validateEmail = (email) => {
  if (!email) {
    return 'Email is mandatory';
  }

  const validFormat = EMAIL_REGEX.test(email.toLowerCase());
  if (!validFormat) {
    return 'Email address is not valid';
  }

  return null;
};

const validatePassword = (password) => {
  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    return `Password should have at least ${MIN_PASSWORD_LENGTH} characters`;
  }

  return null;
};

const validateUsername = (username) => {
  if (!username || username.length < MIN_USERNAME_LENGTH) {
    return `Username should have at least ${MIN_USERNAME_LENGTH} characters`;
  }

  return null;
};

export { validateEmail, validatePassword, validateUsername };
