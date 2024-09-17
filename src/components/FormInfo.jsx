export default function FormInfo({
  formData,
  handleChange,
  label,
  name,
  error,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block mb-2 font-medium text-gray-700">
        {name}
      </label>
      <input
        type="text"
        id={label}
        name={label}
        value={formData[label]}
        onChange={handleChange}
        required
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
