import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: null | {
        id: string;
        email: string;
        name: string;
    };
    email: string;
    password: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    email: '',
    password: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState['user']>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setEmail: (state, action: PayloadAction<AuthState['email']>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<AuthState['password']>) => {
            state.password = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, setEmail, setPassword, logout } = authSlice.actions;
export default authSlice.reducer;