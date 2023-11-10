const FilterOption = ({
  value,
  option,
  selectedOptionGroup,
  setSelectedOptionGroup,
  setContactFilterType,
  setShowFilter,
}) => {
  const handleClick = () => {
    const filter = { optionGroup: selectedOptionGroup, value: value };
    setContactFilterType(filter);
    setShowFilter(false);
    setSelectedOptionGroup(null)
  };
  return selectedOptionGroup === option.name ? (
    <option onClick={handleClick} className="filter__option">
      {value}
    </option>
  ) : null;
};

export default FilterOption;
