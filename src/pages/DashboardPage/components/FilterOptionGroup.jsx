import { useState } from "react";

import FilterOption from "./FilterOption";

const FilterOptionGroup = ({
  option,
  selectedOptionGroup,
  setContactFilterType,
  setShowFilter,
  setSelectedOptionGroup,
}) => {
  return (
    <>
      {selectedOptionGroup === option.name && (
        <optgroup className={`filter__option__group`} label={option.title}>
          {option.values.map((value) => (
            <FilterOption
              value={value}
              option={option}
              selectedOptionGroup={selectedOptionGroup}
              setSelectedOptionGroup={setSelectedOptionGroup}
              setContactFilterType={setContactFilterType}
              setShowFilter={setShowFilter}
            />
          ))}
        </optgroup>
      )}
    </>
  );
};

export default FilterOptionGroup;
