import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TransactionsType {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  createdAt: string
  price: number
}
interface createTransactionsType {
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
}
interface TransactionContextType {
  transactions: TransactionsType[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: createTransactionsType) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createTransactions(data: createTransactionsType) {
    const { description, price, type, category } = data
    const response = await api.post('transactions', {
      description,
      price,
      type,
      category,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
    console.log(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
