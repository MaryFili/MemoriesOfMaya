import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <h1>Memories of Maya</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New Blog</a>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;