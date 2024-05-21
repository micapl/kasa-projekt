import { createBrowserRouter } from "react-router-dom";
import WplatyPage from "./routes/wplaty";
import WyplatyPage from "./routes/wyplaty";
import InwentaryzacjaPage from "./routes/inwentaryzacja";
import RaportyPage from "./routes/raporty";
import { Top } from "./NavbarTop";

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Top/>,
      children: [
        {
          path: "/wplaty",
          element: <WplatyPage/>,
        },
        {
            path: "/wyplaty",
            element: <WyplatyPage/>,
        },
        {
            path: "/inwentaryzacja",
            element: <InwentaryzacjaPage/>,
        },
        {
            path: "/raporty",
            element: <RaportyPage/>,
        },
      ],
    },
  ]);

/*
function AppRouter(){
    return(
        
    <Routes>
        <Route path="/wplaty" element={
            <WplatyPage/>
        }/>
        <Route path="/wyplaty" element={
            <WyplatyPage/>
        }/>
        <Route path="/inwentaryzacja" element={
            <InwentaryzacjaPage/>
        }/>
        <Route path="/raporty" element={
            <RaportyPage/>
        }/>
    </Routes>

    )
}
*/
export default AppRouter