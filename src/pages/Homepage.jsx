import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>
        Homepage - This will likely be the main and only page that loads
        initially. It can contain a bio/about section, portfolio, contact info,
        etc.
      </h1>
      {/* <Link to="/project">project</Link>
      <Link to="/life">life</Link>
      <Link to="/contact">contact</Link>
      <Link to="/about">about</Link> */}
    </div>
  );
}

export default Homepage;
