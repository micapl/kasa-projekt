
import useDarkMode from "use-dark-mode";
import AppRouter from "./app-router";
import { RouterProvider } from "react-router-dom";


export const App = () => {
  const darkMode = useDarkMode(false);
  return (
    <main className={`${darkMode.value ? "dark" : ""}`}>
      <RouterProvider router={AppRouter}/>
    </main>
  );
};

