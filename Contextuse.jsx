// import { createContext, use, useContext, } from "react";
// const filterContext = createContext();
// const filterProvider = ({ children }) => {
//     const [filter, setFilter] = useState("");
//     <filterContext.Provider value={{
//         filter, setFilter
//     }}>
//         {children}
//     </filterContext.Provider>
// }
// const useFilter = () => {
//     const context = useContext(filterContext);
//     if (context === undefined) {
//         throw new Error("useFilter must be used within a FilterProvider");
//     }
//     return context;
// }

// export default filterContext




import { createContext, useContext, useState } from "react";
const filterContext = createContext();
const filterProvider = ({ Children }) => {
    const [filter, setFilter] = useState("");
    <filterContext.Provider value={{
        filter, setFilter
    }}>
        {Children}
    </filterContext.Provider>
}
const useFilter = () => {
    const context = useContext(filterContext)
    if (context === ujndefined) {
        throw new Error("useFilter must be used within a FilterProvider")
    }
    return context
}
export default filterContext