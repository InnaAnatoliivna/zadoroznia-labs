import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import BackToTop from '../ScrollTop/ScrollTop';


const SharedLayout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            {/* <Footer /> */}
            <BackToTop />
        </>
    )
};

export default SharedLayout;