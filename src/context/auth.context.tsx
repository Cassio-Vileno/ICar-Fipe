import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDialog } from "../hooks/useDialog";
import AuthService from "../services/auth.service";
import { Credentials } from "../types/user";

type AuthContextData = {
  signed: boolean;
  user: object | null | any;
  signOut(): Promise<void>;
  login(credentials: Credentials): Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { openDialog, closeDialog } = useDialog();
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string>("");

  async function login(credentials: Credentials) {
    try {
      const data = await AuthService.signIn(credentials);
      await AsyncStorage.setItem("@iCar:token", data.user.token);
      const item = {
        data,
        timestamp: Date.now(),
      };

      await AsyncStorage.setItem("@iCar:user", JSON.stringify(item));

      setToken(data.user.token);
      setUser({
        id: data.user.id,
        name: data.user.name,
      });

      return data
    } catch (err: any) {
      openDialog({
        title: "Ops!",
        subtitle: err.response.data?.message || "Ocorreu algum erro",
        buttonText: "Tentar novamente",
        buttonPress: () => {
          closeDialog();
        },
      });
      return err
    }
  }

  async function signOut() {
    await AsyncStorage.multiRemove(["@iCar:token", "@iCar:user"]);
    setUser({} as any);
    setToken("");
  }

  const getSession = useCallback(async () => {
    const tokenData = await AsyncStorage.getItem("@iCar:token");
    const userData = await AsyncStorage.getItem("@iCar:user");

    if (userData) {
      const { data, timestamp } = JSON.parse(userData);
      if (!timestamp) {
        signOut();
        return;
      }
      if (Date.now() - timestamp > 86400000) {
        signOut();
        return;
      }
      setUser({
        id: data.user.id,
        name: data.user.name,
      });
    }

    if (tokenData) {
      setToken(tokenData);
    }
  }, []);

  useEffect(() => {
    getSession();
  }, [getSession]);

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(token),
        user,
        login,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
