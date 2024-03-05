export default function SearchField(props) {
  const {setNameSearch } = props;

  return (
    <input
      className="search-bar"
      placeholder="Search name..."
      onChange={(event) => setNameSearch(event.target.value)}
    />
  );
}
