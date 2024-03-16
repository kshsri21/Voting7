import { Link } from "react-router-dom";
import "./NavigationBar.css"; // Import the CSS file

const NavigationBar = () => {
  return (
    <header>
      <nav className="navbar">
         <ul className="navbar__list"> 
          <li>
            <Link to="/candidate-registration">
              Candidate Registration
            </Link>
          </li>
          <li>
            <Link to="/candidate-list">
              Candidate List
            </Link>
          </li>
          <li>
            <Link to="/voter-registration">
              Voter Registration
            </Link>
          </li>
          <li>
            <Link to="/voter-list">
              Voter List
            </Link>
          </li>
          <li>
            <Link to="/election-commision">
              Election Commission
            </Link>
          </li>
        </ul>  
      </nav>
    </header>
  );
};
export default NavigationBar;
