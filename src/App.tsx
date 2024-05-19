import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function Top() {
  return (
    <Navbar>
    <NavbarBrand>
      <p className="font-bold text-inherit">Kasa Simulejtor</p>
    </NavbarBrand>
    <NavbarContent className="lg:flex gap-4" justify="center">
      <NavbarItem>
        <Button color="secondary" size="lg" href="#" variant="shadow">
          Wpłaty
        </Button>
      </NavbarItem>
      <NavbarItem>
      <Button color="secondary" size="lg" href="#" variant="shadow">
          Wypłaty
        </Button>
      </NavbarItem>
      <NavbarItem>
      <Button color="secondary" size="lg" href="#" variant="shadow">
          Inwentaryzacja
        </Button>
      </NavbarItem>
      <NavbarItem className="lg:flex">
      <Button color="secondary" size="lg" href="#" variant="shadow">
          Raporty
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);
}

export default Top;
