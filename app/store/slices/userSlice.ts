import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface UserState {
    userSearch: string;
}

const initialState: UserState = {
    userSearch: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserSearch: (state, action: PayloadAction<string>) => {
            state.userSearch = action.payload;
        },
    },
});

export const { setUserSearch } = userSlice.actions;
export const userSelector = (store: RootState) => store.user;
export default userSlice.reducer;