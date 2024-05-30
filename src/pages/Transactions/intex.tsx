import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";


export function Transactions() {
    interface TransactionType {
        id:number;
        description: string;
        type: 'income' | 'outcome';
        category: string;
        createdAt: string;
        price: number
    }

    const [transactions, setTransactions] = useState<TransactionType[]>([])


    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        setTransactions(data)
    }
    useEffect(() => {
        loadTransactions()
    }, [])

        
    return (
        <div>
            <Header/>
            <Summary />
            <TransactionContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        {transactions.map( transaction => {
                            return(
                                <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td ><PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight></td>
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