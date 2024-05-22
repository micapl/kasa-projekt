import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  ButtonGroup,
  Button,
  Divider,
  Switch,
} from "@nextui-org/react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SunIcon } from "./images/SunIcon";
import { MoonIcon } from "./images/MoonIcon";
import useDarkMode from "use-dark-mode";


export const Top = () => {
  const darkMode = useDarkMode();
  return (
    <>
      <Navbar position="static" className="lg:flex gap-4">
        <NavbarBrand>
          <p style={{ fontSize: 25 }} className="font-bold text-foreground">
            Kasa Simulejtor
          </p>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <ButtonGroup>
              <Button
                as={NavLink}
                color="secondary"
                size="lg"
                variant="shadow"
                to="/wplaty"
                isDisabled={useLocation().pathname === "/wplaty"}
              >
                Wpłaty
              </Button>
              <Button
                as={NavLink}
                color="secondary"
                size="lg"
                variant="shadow"
                to="/wyplaty"
                isDisabled={useLocation().pathname === "/wyplaty"}
              >
                Wypłaty
              </Button>
            </ButtonGroup>
          </NavbarItem>
          <Divider orientation="vertical" />
          <NavbarItem>
            <Button
              as={NavLink}
              color="secondary"
              size="lg"
              variant="shadow"
              to="/inwentaryzacja"
              isDisabled={useLocation().pathname === "/inwentaryzacja"}
            >
              Inwentaryzacja
            </Button>
          </NavbarItem>
          <Divider orientation="vertical" />
          <NavbarItem>
            <Button
              as={NavLink}
              color="secondary"
              size="lg"
              variant="shadow"
              to="/raporty"
              isDisabled={useLocation().pathname === "/raporty"}
            >
              Raporty
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Switch
              onValueChange={darkMode.toggle}
              defaultSelected={darkMode.value}
              color="warning"
              startContent={<SunIcon />}
              endContent={<MoonIcon />}
            ></Switch>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className={"flex-col flex-1 min-h-screen max-h-screen text-foreground bg-default-100 overflow-x-hidden overflow-y-auto"}>

        <Outlet />

      </div>
    </>
  );
};
