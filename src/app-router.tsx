import { BrowserRouter, Route, Routes } from "react-router-dom";
import WplatyPage from "./routes/wplaty";
import WyplatyPage from "./routes/wyplaty";
import InwentaryzacjaPage from "./routes/inwentaryzacja";
import RaportyPage from "./routes/raporty";
function AppRouter(){
    return(

    <BrowserRouter>
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
    </BrowserRouter>

    )
}

export default AppRouter