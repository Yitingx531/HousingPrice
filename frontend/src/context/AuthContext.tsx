import React, { createContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
    accessToken: string | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
  const refreshToken = document.cookie.replace(/(?:(?:^|.*;\s*)refresh_token\s*=\s*([^;]*).*$)|^.*$/, "$1");

  const refreshAccessToken = async () => {
    try{
      const response = await fetch('/auth/refresh', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            refresh_token: refreshToken
        }) 
      })
      if(!response.ok){
        console.log('Failed to refresh access token')
      }
      const data = await response.json();
      setAccessToken(data.access_token);
      localStorage.setItem('access_token', data.access_token);
      scheduleTokenRefresh();
    }catch(error){
        console.log(error)
    }
  }

  const scheduleTokenRefresh = () => {
    if(!accessToken) return;

    const jwtPayload = JSON.parse(atob(accessToken.split('.')[1]));
    const expiresInMs = jwtPayload.exp*1000 - Date.now(); // it expires in 1h in our case
    setTimeout(refreshAccessToken, expiresInMs - 60000);// Refresh to get another access token 1 minute before expiry
  }

  useEffect(() => {
    if(accessToken){
        scheduleTokenRefresh();
    }
  }, [accessToken])

  return (
    <AuthContext.Provider value={{accessToken}}>
        {children}
    </AuthContext.Provider>
  )
}