import React, { Dispatch, SetStateAction } from "react";
import { createContext } from "react"
export type Theme ='dark'|'light';

const UserContext = createContext<{theme: Theme, loggedInUser: string, setUserName: Dispatch<SetStateAction<string>>,  setThemeValue: Dispatch<SetStateAction<Theme>>}>({
    theme: 'light',
    loggedInUser: 'default',
    setUserName: ()=> {},
    setThemeValue: ()=> {},

});

export default UserContext;