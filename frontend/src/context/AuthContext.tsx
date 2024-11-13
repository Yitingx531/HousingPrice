import React, { createContext, useState, ReactNode, useContext } from "react";
import { AuthError, NetworkError, APIError, handleAPIResponse } from "../types/errorTypes";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (email: string, password: string) => {
    setError(null); // Reset error state before attempting sign-in
    try {
      const response = await fetch("http://localhost:4000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Send cookies with the request
      });

      const data = await handleAPIResponse(response); // Use handleAPIResponse

      setIsAuthenticated(true);
      scheduleTokenRefresh();
    } catch (error) {
        console.log("Caught error:", error); 
      if (error instanceof AuthError) {
        setError("Invalid email or password");
      } else if (error instanceof NetworkError) {
        setError("Network error. Please try again.");
      } else if (error instanceof APIError) {
        setError(`API Error: ${error.message}`);
      } else {
        setError("An unknown error occurred.");
      }
      console.error("Sign-in error:", error);
      setIsAuthenticated(false);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/refresh", {
        method: "POST",
        credentials: "include", // Send cookies with the request
      });

      await handleAPIResponse(response); // Check response with handleAPIResponse
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      if (error instanceof APIError) {
        console.error(`API Error during token refresh: ${error.message}`);
      } else {
        console.error("Error refreshing token:", error);
      }
    }
  };

  const scheduleTokenRefresh = () => {
    const refreshAfter = 60 * 60 * 1000 - 60000; // Adjust as needed
    setTimeout(refreshAccessToken, refreshAfter);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
