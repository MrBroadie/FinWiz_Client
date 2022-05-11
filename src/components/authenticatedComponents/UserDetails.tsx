// Local imports
import { IUserDetails } from './interfaces/IUserDetails';

// Styles 
import './styles/UserDetails.scss';

const UserDetails = ({ user, profile }: IUserDetails) => {
  return (
    <div className="userDetailsContainer">
      <h1>{user.given_name}&apos;s Portfolio</h1>
      <p>Portfolio Value: <span>${profile.totalInvestmentValue}</span></p>
      <p>Largest Stock Hold: <span>APPL - $123</span></p>
      <p>Largest Crypto Hold: <span>BTC - $1242</span></p>
    </div>
  );
};

export default UserDetails;