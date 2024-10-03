import { Link } from "react-router-dom";

export function Layout({ children }) {
    return (
        <main className="dashboard-layout">
            <section>
                <h2>-----------Menu-----------</h2>
                <p className="left-align">
                    <Link to={'/'}>Dashboard</Link>
                </p>
                <p className="left-align">
                    <Link to={'/new'}>Create new contact</Link>
                </p>
            </section>
            <section>
                {children}
            </section>
        </main>
    );
}