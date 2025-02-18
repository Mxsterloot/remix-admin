import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface CompanyState {
    companySearch: string;
}

const initialState: CompanyState = {
    companySearch: '',
};

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setCompanySearch: (state, action: PayloadAction<string>) => {
            state.companySearch = action.payload;
        },
    },
});

export const { setCompanySearch } = companySlice.actions;
export const companySelector = (store: RootState) => store.company;
export default companySlice.reducer;