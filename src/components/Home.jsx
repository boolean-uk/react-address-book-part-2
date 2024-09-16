import AddressBook from "../../_assets/svgs/address-book-svgrepo-com.svg"
function Home() {
    return (
        <>
            <section className="home_grid">
                <div>
                    <h1><em>Welcome to your address book!</em></h1>
                    <br />
                    <img src={AddressBook} alt="SVG of an address book" width='500px'/>
                </div>
            </section>
        </>
    )
}

export default Home