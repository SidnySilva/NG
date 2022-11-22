import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "./authProvider";
import { Navigate } from "react-router-dom";

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  data: ITransaction[];
  setData: Dispatch<SetStateAction<ITransaction[]>>;
  getTransaction: (type: string) => Promise<void>;
  transferTo: (type: Transference) => Promise<void>;
  loading: boolean;
}
interface ITransaction {
  debited_id: string;
  credited_id: string;
  balance: number;
  createdAt: string;
}
interface Transference{
    username:string;
    quantity:number;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useProject must be used within an TransactionProvider");
  }
  return context;
};
export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [data, setData] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(false);
  const {getUser} = useUser()
 

  const getTransaction = useCallback(async (type: string) => {
    setLoading(true);
    const token = localStorage.getItem("@GN:token")
    await api
      .get(`transaction/${type}`,{headers:{
        'Content-Type': 'application/json',
        'Authorization': `${token}`} })
      .then((res) => res.data)
      .then((data) => {
        
        setLoading(false);
        setData(data);
        
      });
  }, []);
  
  const transferTo = useCallback(async (data: Transference) => {
    setLoading(true);
    const token = localStorage.getItem("@GN:token")
    await api
      .post(`transaction/cashout`,data,{ headers:{
        'Content-Type': 'application/json',
        'Authorization': `${token}`}})
      .then((res) => res.data)
      .then((data) => {
        toast.success('Success')
        getUser()
        getTransaction('all')
        setData(data);
        
      }).catch(err => toast.error('Something went wrong'));
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        data: data,
        setData,
        getTransaction,
        transferTo,
        loading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
