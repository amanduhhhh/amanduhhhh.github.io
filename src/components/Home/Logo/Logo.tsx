import "./Logo.scss";
import SolidLogo from "../../../assets/images/logo.svg";
const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={SolidLogo} alt="Logo" />
    </div>
  );
};

export default Logo;
