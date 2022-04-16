import "./index.scss";
import headerLogo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <section className="header-container">
      <img src={headerLogo} />
    </section>
  );
};
export default Header;
