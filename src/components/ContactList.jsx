import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ContactList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3002/contacts");
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-item-center bg-light vh-100">
      <h2>Contact List</h2>
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>View</th> {/* Added View column header */}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>
                <Link to={`/contact-detail/${d.id}`} className="btn btn-sm btn-primary"> {/* Modified Link */}
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="btn btn-primary"> {/* Added Back to Home button */}
        Back to Home
      </Link>
    </div>
  );
}

export default ContactList;
