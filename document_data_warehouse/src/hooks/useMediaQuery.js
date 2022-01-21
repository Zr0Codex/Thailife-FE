import { useEffect, useState } from "react";

const useMediaQuery = (minWidth) => {
    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        isDesiredWidth: false,
    })

    useEffect(() => {
        const resizeHandler = () =>{
            const currentWindowsWidth = window.innerWidth;
            const isDesiredWidth = currentWindowsWidth < minWidth;
            setState({ windowWidth: currentWindowsWidth, isDesiredWidth});
        };
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, [state.windowWidth])

    return state.isDesiredWidth;
}





export default useMediaQuery;