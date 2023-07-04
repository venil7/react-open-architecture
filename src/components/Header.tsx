import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

export function Header() {
  return (
    <Navbar className="my-2" color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="https://reactstrap.github.io/logo-white.svg"
          style={{
            height: 40,
            width: 40,
          }}
        />
        React Open Architecture
      </NavbarBrand>
      <NavbarText>using https://swapi.dev/ API</NavbarText>
    </Navbar>
  );
}
