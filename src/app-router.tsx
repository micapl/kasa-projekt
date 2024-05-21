import { BrowserRouter, Route, Routes } from "react-router-dom";
import WplatyPage from "./routes/wplaty";
import WyplatyPage from "./routes/wyplaty";
import InwentaryzacjaPage from "./routes/inwentaryzacja";
import RaportyPage from "./routes/raporty";
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

export default AppRouter