import LoginButton from "./LoginButton";
import Colors from "../../theme/colors/Colors";
import Navigation from "./Navigation";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <header>
      <LoginButton
        labelButtonColor={Colors.white}
        backgroundButtonColor={Colors.main}
      />
      <Navigation />
      <Logo />
    </header>
  );
};
export default Header;
