import { useAppDispatch, useAppSelector } from "~/store";

import { useNavigate } from "@remix-run/react";
import { setUser } from "~/store/slices/authSlice";

export const useSignin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, user, email, password } = useAppSelector((state) => state.auth);

    const handleSignin = async (email: string, password: string) => {
        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const data = await response.json();
            dispatch(setUser(data.user));
            navigate('/');
        } catch (error) {
            console.error('Signin failed:', error);
            throw error;
        }
    };

    return { handleSignin, user, isAuthenticated, email, password };
};
