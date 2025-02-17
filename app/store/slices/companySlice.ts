import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Company {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    logo: string;
    createdAt: string;
    updatedAt: string;
}

interface CompanyState {
    companySearch: string;
    companyList: Company[];
}

const initialState: CompanyState = {
    companySearch: '',
    companyList: [],
};

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setCompanySearch: (state, action: PayloadAction<CompanyState['companySearch']>) => {
            state.companySearch = action.payload;
        },
    },
});

export const { setCompanySearch } = companySlice.actions;
export default companySlice.reducer;