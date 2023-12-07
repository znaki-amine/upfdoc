import {Outlet} from "react-router-dom";

export default function Layout(){
    return<>
        <header></header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
    </>
}
