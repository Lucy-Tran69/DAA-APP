import Home from "pages/home";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AppRouter;