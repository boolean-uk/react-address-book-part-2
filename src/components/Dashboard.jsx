import { useContext, useState } from "react"
import { ContactContext } from "../App"
import { useNavigate } from "react-router-dom"

function Dashboard() {

    const { contacts } = useContext(ContactContext)
    const navigate = useNavigate()
    const [filter, setFilter] = useState("")

    const filteredContacts = contacts.filter((c) =>
        `${c.firstName} ${c.lastName}`
            .toLowerCase()
            .includes(filter.toLowerCase())
    )

  return (
    <div>
        <h2 className="dashboard">Dashboard</h2>
        <div style={{ marginLeft: 20}}>
            <h3 className="">Contacts list</h3>
            <input
                type="text"
                placeholder="Search contacts..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{
                padding: "0.5rem",
                marginLeft: 10,
                marginBottom: "1rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",
                maxWidth: "300px",
                }}
            />
            <div style={{
                display: "grid",
                gap: "0.5rem",
                gridTemplateColumns: "repeat(3, 1fr)",
                maxWidth: "80%" }}>
                {filteredContacts.map((c) => {
                    return (
                        <div
                            key={c.id}
                            onClick={() => navigate(`/contact/${c.id}`)}
                            style={{
                                maxWidth: "350px",
                                padding: "0.3rem 0.4rem",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                backgroundColor: "#f9f9f9",
                                cursor: "pointer",
                                transition: "background 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#e6f0ff")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "#f9f9f9")}
                        >
                            <strong>{c.firstName} {c.lastName}</strong><br />
                            <span style={{ color: "#555", fontSize: "0.9rem" }}>{c.city}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Dashboard