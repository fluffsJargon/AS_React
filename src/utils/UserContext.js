import { createContext } from "react"

const UserContext = createContext({
    loggedInUser: 'fluffs'
});

export default UserContext;