import { createContext, ReactNode, useEffect, useState } from "react";

interface Transactions {
    id:number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string;
    price: number
}
interface TransactionContextType {
    transactions: Transactions[];
}

interface TransactionProviderProps {
    children: ReactNode;
}



export const TransactionContext = createContext({} as TransactionContextType )

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        setTransactions(data)
    }
    useEffect(() => {
        loadTransactions()
    }, [])



    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}