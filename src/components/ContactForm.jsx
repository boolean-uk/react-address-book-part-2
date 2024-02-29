import FormInfo from "./FormInfo";
export default function ContactForm({
  formData,
  handleChange,
  handleSubmit,
  error,
}) {
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="firstName"
        name="First Name"
        error={error.firstName}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="lastName"
        name="Last Name"
        error={error.lastName}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="email"
        name="Email"
        error={error.email}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="street"
        name="Street"
        error={error.street}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="city"
        name="City"
        error={error.city}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="latitude"
        name="Latitude"
        error={error.latitude}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="longitude"
        name="Longitude"
        error={error.longitude}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="favouriteColour"
        name="Favourite Colour"
        error={error.favoriteColour}
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="profileImage"
        name="Profile Image"
        error={error.profileImage}
      />

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
}
