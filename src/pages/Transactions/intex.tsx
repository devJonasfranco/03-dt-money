
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";


export function Transactions() {
    const {transactions} = useContext(TransactionContext)

        
    return (
        <div>
            {/* Newtransactions */}
            <Header/>

            {/*  Card com valores de Entrada/Saída/Total */}
            <Summary />


            <TransactionContainer>
                {/* Imput de pesquisa de transações */}
                <SearchForm />

                {/* Tabela lista de transações */}
                <TransactionTable>
                    <tbody>
                        {transactions.map( transaction => {
                            return(
                                <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td >
                                    <PriceHighlight variant={transaction.type}>
                                    {transaction.type === 'outcome' && '- '}    
                                    {priceFormatter.format(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td >{transaction.category}</td>
                                <td >{transaction.createdAt}</td>
                            </tr>

                            )
                        })}


                    </tbody>
                </TransactionTable>
                
            </TransactionContainer>


        </div>
    )
}