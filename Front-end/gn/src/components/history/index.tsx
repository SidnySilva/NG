import { useEffect } from "react";
import { useTransaction } from "../../context/transactionProvider";
import { ButtonBox } from "../buttonBox";
import { CashBox } from "../cashBox";
import { Container } from "./styles";

export const History = () => {
  const { getTransaction, data } = useTransaction();

  useEffect(() => {
    getTransaction("all");
  }, []);

  return (
    <Container>
      <div className="buttons">
        <ButtonBox
          onClick={() => {
            getTransaction("all");
          }}
          text="All"
        ></ButtonBox>
        <ButtonBox
          onClick={() => {
            getTransaction("cashin");
          }}
          text="Cash in"
        ></ButtonBox>
        <ButtonBox
          onClick={() => {
            getTransaction("cashout");
          }}
          text="Cash out"
        ></ButtonBox>
      </div>
      <div className="cash">
        {data?.map((el: any) => (
          <CashBox
            key={`cards-${el.id}`}
            id={el.id}
            debited_id={el.debited_id}
            credited_id={el.credited_id}
            value={el.value}
            createdAt={el.createdAt}
          />
        ))}
      </div>
    </Container>
  );
};
