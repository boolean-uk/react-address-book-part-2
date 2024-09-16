export const ContactListFilter = ({ filter, setFilter }) => {
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <form action="">
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Filter first name"
        value={filter.firstName}
        onChange={handleInput}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Filter last name"
        value={filter.lastName}
        onChange={handleInput}
      />
    </form>
  );
};
