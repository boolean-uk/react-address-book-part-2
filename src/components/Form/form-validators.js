export const validateNameInput = (src) => /[A-z]+/.test(src);
export const validatePassword = (src) => /[A-z]{8,}/.test(src);
