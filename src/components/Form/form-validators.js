// export const validateName = (src) => /[A-z]+/.test(src);
export const validateName = (src) => /^[A-z]+$/.test(src);
export const validatePassword = (src) => /[A-z]{8,}/.test(src);
export const validateEmail = (src) => /@/.test(src);
export const validateLatitude = (src) => +src > -86 || +src < 86;
export const validateLongitude = (src) => +src > -181 || +src < 181;
