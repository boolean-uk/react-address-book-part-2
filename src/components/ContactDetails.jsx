import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ContactDetails(props) {
  const { contactsList } = props;
  const [contact, setContact] = useState();

  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const url = `https://boolean-api-server.fly.dev/Hamada-AB/contact/${+id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setContact(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url, contactsList]);

  if (!contact) {
    return <p>Loading...</p>;
  }

  const { firstName, lastName, street, city } = contact;

  function handleDeleteClick() {
    const isConfirmed = confirm(
      `❌ Delete ${firstName} ${lastName} form contacts list❓`
    );

    if (isConfirmed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate("/");
        });
    }
  }

  function handleEditClick() {
    navigate("/contact/edit", {
      state: {
        id,
        firstName,
        lastName,
        street,
        city,
      },
    });
  }

  return (
    <>
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`${street} ${city}`}</p>
      <button className="delete-edit" onClick={handleDeleteClick}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#ff0000"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M5 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-2 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Zm13-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
            clipRule="evenodd"
          />
        </svg>
        Delete
      </button>

      <button className="delete-edit" onClick={handleEditClick}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"
            clipRule="evenodd"
          />
        </svg>
        Edit
      </button>
    </>
  );
}
