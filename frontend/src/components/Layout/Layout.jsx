
import { Outlet } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
    return (
        <>
            <TopBar />
            <Outlet />
        </>
    );
}