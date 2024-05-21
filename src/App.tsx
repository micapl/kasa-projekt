import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  ButtonGroup,
  Button,
  Checkbox,
} from "@nextui-org/react";
import React, { useState } from "react";
import useDarkMode from "use-dark-mode";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";


export const App = () =>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Top />,
    },
  ]);
  const darkMode = useDarkMode(false);
  return(
    <main className={`${darkMode.value ? 'dark' : ''}`}>
          <RouterProvider router={router} />
    </main>
  )
 
}




export const Top = () => {
  const darkMode = useDarkMode(false);
  const [Disabled1, setDisabled1] = useState(false);
  const [Disabled2, setDisabled2] = useState(false);
  const [Disabled3, setDisabled3] = useState(false);
  const [Disabled4, setDisabled4] = useState(false);
  function DisableMe(event: React.MouseEvent<HTMLButtonElement>) {
    switch (event.currentTarget.id) {
      case "Button1":
        setDisabled1(true);
        setDisabled2(false);
        setDisabled3(false);
        setDisabled4(false);
        break;
      case "Button2":
        setDisabled1(false);
        setDisabled2(true);
        setDisabled3(false);
        setDisabled4(false);
        break;
      case "Button3":
        setDisabled1(false);
        setDisabled2(false);
        setDisabled3(true);
        setDisabled4(false);
        break;
      case "Button4":
        setDisabled1(false);
        setDisabled2(false);
        setDisabled3(false);
        setDisabled4(true);
        break;
      default:
        break;
    }
  }

  return (
    <Navbar>
      <NavbarBrand>
        <p style={{ fontSize: 25 }} className="font-bold text-foreground">Kasa Simulejtor</p>
      </NavbarBrand>
      <NavbarContent className="lg:flex gap-4" justify="center">
        <NavbarItem>
          <ButtonGroup>
            <Link to="">
            <Button
              color="secondary"
              id="Button1"
              size="lg"
              href="#"
              variant="shadow"
              onClick={DisableMe}
              isDisabled={Disabled1}
            >
              Wpłaty
            </Button>
            </Link>
            <Button
              color="secondary"
              id="Button2"
              size="lg"
              href="#"
              variant="shadow"
              onClick={DisableMe}
              isDisabled={Disabled2}
            >
              Wypłaty
            </Button>
          </ButtonGroup>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="secondary"
            id="Button3"
            size="lg"
            href="#"
            variant="shadow"
            onClick={DisableMe}
            isDisabled={Disabled3}
          >
            Inwentaryzacja
          </Button>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Button
            color="secondary"
            id="Button4"
            size="lg"
            href="#"
            variant="shadow"
            onClick={DisableMe}
            isDisabled={Disabled4}
          >
            Raporty
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Checkbox defaultSelected onValueChange={darkMode.toggle}></Checkbox>
        </NavbarItem>
      </NavbarContent>
      
    </Navbar>
  );
};


