

import { set } from "mongoose";
import { store } from "./store";

export const setemail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
});

// export default setEmail