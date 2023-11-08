import { useState } from "react"

import FilterOption from "./FilterOption"

const FilterOptionGroup = ({option, selectedOptionGroup, setSelectedOptionGroup}) => {
  console.log('option', option)

  return (
    <optgroup label={option.title} onMouseEnter={() => setSelectedOptionGroup(option.name)}>
      {option.values.map(value => <FilterOption value = {value} option={option} selectedOptionGroup={selectedOptionGroup}/>)}
    </optgroup>
  )
}

export default FilterOptionGroup