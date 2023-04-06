import { useState } from "react";
import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App(): JSX.Element {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () =>
    setIsNewTransactionModalOpen(true);
  const handleCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen(false);

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
