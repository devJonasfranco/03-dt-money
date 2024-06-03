import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer, SummeryCard } from './style'

import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  // essa função summary retorna um useReduce()
  const summary = useSummary()

  return (
    <SummaryContainer>
      {/* card 1 Entrada */}
      <SummeryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummeryCard>
      {/* Card 2 Saída */}
      <SummeryCard>
        <header>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummeryCard>
      {/* Card 3 Total */}
      <SummeryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummeryCard>
    </SummaryContainer>
  )
}
