import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    // const [auth, setAuth] = useState({});
    let auth = sessionStorage;
    const navigate = useNavigate();

    const setAuth = (item) => {
        auth.setItem('auth', item);
    }

    const removeAuth = () => {
        navigate("/login");
        auth.removeItem('auth');
    }

    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            removeAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;