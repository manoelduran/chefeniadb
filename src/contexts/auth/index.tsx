/*import React, { createContext, useState } from "react";

interface AuthState {
    user: User;
    token: string;
}

interface AuthResponse {
    user: User;
    type: string;
    token: string;
    refresh_token: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    loading: boolean;
    signIn: (data: SignInCredentials) => Promise<void>;
    signOut: () => void;
    createUser: (data: FormUser) => Promise<User>;
    updateUser: (data: User) => Promise<User>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState)
    const [loading, setLoading] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                user: data.user,
                loading,
                createUser,
                signIn,
                signOut,
                updateUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}*/