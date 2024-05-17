import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";


export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary />
            <TransactionContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolviemnto de site</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburger</td>
                            <td ><PriceHighlight variant="outcome">R$ -12.000,00</PriceHighlight></td>
                            <td>Alimentação</td>
                            <td>22/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Pedido de Roupas</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td >Venda</td>
                            <td >10/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Estudo react</td>
                            <td ><PriceHighlight variant="outcome">R$ -12.000,00</PriceHighlight></td>
                            <td >Estudo</td>
                            <td >13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Passeio no shopp</td>
                            <td ><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                            <td >Lazer</td>
                            <td >13/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
                
            </TransactionContainer>


        </div>
    )
}