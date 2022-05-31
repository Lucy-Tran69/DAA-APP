import { useAppDispatch } from "app/hooks";
import { useEffect } from "react";
import { homeActions } from "./home.slice";
import { getPostItem } from "./home.thunk";

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(getPostItem());
      }, [dispatch]);
    
    return (
        <>
        <div>Home</div>
        </>
    );
};

export default Home;