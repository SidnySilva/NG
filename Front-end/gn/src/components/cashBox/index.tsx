import { Container } from "./styles";

interface CashProps {
  id: string;
  debited_id: string;
  credited_id: string;
  value: number;
  createdAt: string;
}

export const CashBox = ({
  id,
  debited_id,
  credited_id,
  value,
  createdAt,
}: CashProps) => {
  const regex = createdAt.split("T");
  const date = regex[0].split("-").reverse().join("/");
  const time = regex[1].split(".")[0];

  return (
    <Container id={`card-${id}`}>
      <div className="data">
        <h3>From: {debited_id} </h3>
        <h3>To: {credited_id} </h3>
      </div>
      <div className="info">
        <h2> B$ {value}.00 </h2>
        <div className="time">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </Container>
  );
};
