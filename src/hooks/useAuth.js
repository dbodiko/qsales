import React, { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { setItem, removeItem, getItem } from "../utils/localStorage";

const authContext = createContext({});

function useProvideAuth() {
    const navigate = useNavigate();

    const signIn = (access_token) => {
        setItem("access_token", access_token.token);
        navigate("/staffs", { replace: true });
    };

    const singOut = () => {
        removeItem("access_token");
        navigate("/login", { replace: true });
    };

    return {
        accessToken: getItem("access_token"),
        signIn,
        singOut,
    };
}

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};
