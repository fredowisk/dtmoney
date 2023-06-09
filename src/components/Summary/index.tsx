import {useTransactions } from "../../hooks/useTransactions";

import incomeImg from "./../../assets/income.svg";
import outcomeImg from "./../../assets/outcome.svg";
import totalImg from "./../../assets/total.svg";

import { Container } from "./styles";

export const Summary = (): JSX.Element => {
  const { transactions } = useTransactions();

  const { deposits, withdraws } = transactions.reduce(
    (accumulator, current) => {
      if (current.type === "deposit") accumulator.deposits += current.amount;
      else accumulator.withdraws += current.amount;

      return accumulator;
    },
    { deposits: 0, withdraws: 0 }
  );

  const formatMoney = (quantity: number) =>
    new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(quantity);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>${formatMoney(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>${formatMoney(withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>${formatMoney(deposits - withdraws)}</strong>
      </div>
    </Container>
  );
};
