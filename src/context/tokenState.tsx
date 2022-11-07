import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
interface TokenContextType {
  accessToken: string | null | undefined;
  setAccessToken: (token: string) => void;
}

const TokenContext = createContext<TokenContextType>({
  accessToken: null,
  setAccessToken: (token) => {
    console.error(`TokenProvider does not exists, token: ${token}`);
  },
});

export const TokenWrapper = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken !== null) {
      setAccessToken(accessToken);
    }
  }, []);
  return (
    <TokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  return useContext(TokenContext);
};
