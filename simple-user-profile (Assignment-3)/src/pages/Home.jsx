import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to the Auth App</h1>
      <p>Please <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Home;