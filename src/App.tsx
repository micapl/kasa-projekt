import AppRouter from "./app-router";
import { RouterProvider } from "react-router-dom";
import { getdarkmode } from "./darkmodecontroller";


export const App = () => {
  console.log(getdarkmode())
  return (
    <main className={getdarkmode()? "dark": "light"}>
      <RouterProvider router={AppRouter}/>
    </main>
  );
};

