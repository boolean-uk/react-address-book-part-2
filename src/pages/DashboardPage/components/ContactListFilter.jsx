import { useState } from "react";

import { formStructure } from "../../../data/formStructure";
import FilterOptionGroup from "./FilterOptionGroup";

const ContactListFilter = ({
  allContacts,
  contactFilterType,
  setContactFilterType,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOptionGroup, setSelectedOptionGroup] = useState(null);

  const options = formStructure.map((entry) => {
    const values = [
      ...new Set(allContacts.map((contact) => contact[entry.name])),
    ];
    return { ...entry, values: values };
  });

  return (
    <section className="filter__section">
      <button
        className="filter__button"
        onClick={() => setShowFilter(!showFilter)}
      >
        Filter
      </button>
      {contactFilterType ? (
        <button onClick={() => setContactFilterType(null)}>Clear Filter</button>
      ) : null}
      {showFilter && (
        <div className="filter__group__select">
          {options.map((option) => (
            <div
              className="filter__option__title"
              onMouseEnter={() => setSelectedOptionGroup(option.name)}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}

      <div className="filter__list__container">
        {showFilter && (
          <div name="filter__list" id="filter__list">
            {options.map((option) => (
              <FilterOptionGroup
                option={option}
                selectedOptionGroup={selectedOptionGroup}
                setContactFilterType={setContactFilterType}
                setShowFilter={setShowFilter}
                setSelectedOptionGroup={setSelectedOptionGroup}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactListFilter;
