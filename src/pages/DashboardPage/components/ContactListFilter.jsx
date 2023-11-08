import { useState } from "react";

import { formStructure } from "../../../data/formStructure";
import FilterOptionGroup from "./FilterOptionGroup";

const ContactListFilter = ({ allContacts }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOptionGroup, setSelectedOptionGroup] = useState(null);

  const options = formStructure.map((entry) => {
    const values = [
      ...new Set(allContacts.map((contact) => contact[entry.name])),
    ];
    return { ...entry, values: values };
  });
  return (
    <section>
      <button onClick={() => setShowFilter(!showFilter)}>Filter</button>
      {showFilter && (
        <div name="dashboard-filter" id="dashboard-filter">
          {options.map((option) => (
            <FilterOptionGroup
              option={option}
              selectedOptionGroup={selectedOptionGroup}
              setSelectedOptionGroup={setSelectedOptionGroup}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ContactListFilter;
