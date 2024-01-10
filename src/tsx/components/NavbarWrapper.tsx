import { Outlet } from "react-router-dom";
import Letters from "./Letters";
import Navbar from "./Navbar";


export default function NavbarWrapper() {
    return (
    <>
        <Navbar/>
        <Outlet/>
        <Letters />
    </>
    )
}