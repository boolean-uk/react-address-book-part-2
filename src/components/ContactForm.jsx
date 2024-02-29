import FormInfo from "./FormInfo";
export default function ContactForm({ formData, handleChange, handleSubmit }) {
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="firstName"
        name="First Name"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="lastName"
        name="Last Name"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="email"
        name="Email"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="street"
        name="Street"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="city"
        name="City"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="latitude"
        name="Latitude"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="longitude"
        name="Longitude"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="favouriteColour"
        name="Favourite Colour"
      />
      <FormInfo
        formData={formData}
        handleChange={handleChange}
        label="profileImage"
        name="Profile Image"
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
