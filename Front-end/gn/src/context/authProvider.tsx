
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

interface userProviderProps {
  children: ReactNode;
}

interface Iuser {
  username: string;
  password: string;
  accountId: string;
}

interface AuthState {
  token: string;
  user: Iuser;
}

interface userAccount{
  username:string;
  balance:number;
}

interface AuthContextData {
  token: string;
  user:userAccount;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  getUser: () => void;
}

interface SignInCredentials {
  username: string;
  password: string;
}

const UsersContext = createContext<AuthContextData>({} as AuthContextData);

const useUser = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUser must be used within an userProvider");
  }
  return context;
};

const UserProvider = ({ children }: userProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<userAccount>({} as userAccount);
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@GN:token");
    const user = localStorage.getItem("@GN:user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      try{
        const response = await api.post("/user/signin", { username, password });
        const { token } = response.data;

        toast.success("Welcome boss!")
  
        localStorage.setItem("@GN:token", token);
        localStorage.setItem("@GN:user", JSON.stringify(username));
        getUser()
  
        navigate("/home");
      }catch(err){
        toast.error("Wrong username or password ")
      }
     
    },
    []
  );

  const getUser = useCallback(async () => {
    const token = localStorage.getItem("@GN:token");
    await api
      .get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@GN:token");
    localStorage.removeItem("@GN:user");
    navigate("/");
    setData({} as AuthState);
  }, [navigate]);

  return (
    <UsersContext.Provider
      value={{ token: data.token,user, signIn, signOut, getUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UserProvider, useUser };
