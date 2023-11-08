const FilterOption = ({ value, option, selectedOptionGroup }) => {
  return selectedOptionGroup === option.name ? <option>{value}</option> : null;
};

export default FilterOption;
