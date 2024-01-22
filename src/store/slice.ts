/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


export interface User {
    accessToken: string;
    auth: unknown;
    displayName: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    metadata: unknown;
    phoneNumber: string | null;
    photoURL: string | null;
    providerData: unknown[];
    providerId: string;
    uid: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {user: {}},
    reducers: {
        setUser: (state, action) => {
            const user = action.payload;
            console.log(user)
            state.user = user;
            // return user;
        },
        removeUser: (state) => {
            state = {user: {}};
            // return {} as User;
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;