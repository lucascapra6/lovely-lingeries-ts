import LoginButton from "./LoginButton";
import Colors from "../../theme/colors/Colors";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <LoginButton
        labelButtonColor={Colors.white}
        backgroundButtonColor={Colors.main}
      />
      <Navigation />
    </header>
  );
};
export default Header;
