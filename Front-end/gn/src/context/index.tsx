import { ReactNode } from "react";
import { UserProvider } from "./authProvider";
import { TransactionProvider } from "./transactionProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <UserProvider>
      <TransactionProvider>{children}</TransactionProvider>
    </UserProvider>
  );
};
