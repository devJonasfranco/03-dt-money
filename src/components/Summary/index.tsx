import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummeryCard } from "./style";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";


export function Summary() {
    const {transactions} = useContext(TransactionContext)

    const summary = transactions.reduce( 
        (acc, transaction) => {
            if (transaction.type === "income") {
                acc.income += transaction.price
                acc.total += transaction.price
            }else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }
            return acc
        }, 
    {
        income:0,
        outcome: 0,
        total: 0
    })

    return (
        <SummaryContainer>
            {/* card 1 Entrada */}
            <SummeryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummeryCard>
            {/* Card 2 Saída */}
            <SummeryCard>
                <header>
                    <span>Saída</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummeryCard>
            {/* Card 3 Total */}
            <SummeryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummeryCard>
 
        </SummaryContainer>
    )
}