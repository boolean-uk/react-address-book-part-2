function clearErrors(setError) {
  setError({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    latitude: "",
    longitude: "",
    favouriteColour: "",
    profileImage: "",
  });
}

export function validateFormInput(setError, formData) {
  const { profileImage, latitude, longitude, email } = formData;
  clearErrors(setError);
  let isValid = true;
  if (latitude < -90 || latitude > 90) {
    setError((prevError) => ({
      ...prevError,
      latitude: "Invalid latitude",
    }));
    isValid = false;
  }
  if (longitude < -180 || longitude > 180) {
    setError((prevError) => ({
      ...prevError,
      longitude: "Invalid longitude",
    }));
    isValid = false;
  }
  if (
    email &&
    !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    setError((prevError) => ({
      ...prevError,
      email: "Invalid email",
    }));
    isValid = false;
  }
  return isValid;
}
