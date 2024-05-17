import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummeryCard } from "./style";

export function Summary() {
    return (
        <SummaryContainer>
            <SummeryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>17.400,00</strong>
            </SummeryCard>
            <SummeryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>17.400,00</strong>
            </SummeryCard>
            <SummeryCard variant="green">
                <header>
                    <span>Entradas</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>17.400,00</strong>
            </SummeryCard>
 
        </SummaryContainer>
    )
}