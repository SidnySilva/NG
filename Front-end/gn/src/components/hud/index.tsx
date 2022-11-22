import { useEffect, useState } from "react";
import { useUser } from "../../context/authProvider";
import { useTransaction } from "../../context/transactionProvider";
import { ButtonBox } from "../buttonBox";
import { Container, Header } from "./styles";
import { FaUser, FaPowerOff } from "react-icons/fa";
import { History } from "../history";
import { Transfer } from "../transfer";
export const Hud = () => {
  const { signOut, user, getUser } = useUser();
  const [screen, setScreen] = useState("");
  const { getTransaction } = useTransaction();

  useEffect(() => {
    getUser();
  }, []);

  const toHistory = () => {
    getTransaction("all");
    setScreen("history");
  };
  return (
    <Container>
      <Header >
        <div className="profile">
          <FaUser />
          <h2>{user.username}</h2>
        </div>

        <h1>Balance B$ {user.balance}</h1>

        <button className="loggout" onClick={signOut}>
          <FaPowerOff />
        </button>
      </Header>
      <div className="buttons">
        <ButtonBox
          text="Transfer"
          onClick={() => setScreen("transfer")}
        ></ButtonBox>
        <ButtonBox text="History" onClick={() => toHistory()}></ButtonBox>
      </div>
      <div className="history">
        {screen === "transfer" ? <Transfer /> : <History />}
      </div>
    </Container>
  );
};
