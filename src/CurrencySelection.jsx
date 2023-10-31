import { useEffect, useState, useContext} from "react"
import CurrencyContext from "./CurrencyContext";

export default function CurrencySelection(){
    
const [currencies, setCurrencies] = useState ([]);
const [exchangeRate, setExchangeRate] = useState(1);

// const currencyFromContext =useContext(CurrencyContext);

// const [currency, setCurrency]= useState (currencyFromContext || 'EUR');
  const { currency, setCurrency } = useContext(CurrencyContext);



const handleCurrencyChange =(event) => {
    setCurrency(event.target.value);
}
const loadExchangeRate = async (currency) => {
    const response = await fetch ('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency='+currency);
    const data = await response.json();
    setExchangeRate(data.rate);
} 

const loadCurrencies = async () => {
    const response = await fetch ('https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php')
 const data = await response.json();
 setCurrencies(data);
}


useEffect(
    () => {
        loadExchangeRate(currency);
    },
    [
        currency
    ]
)

useEffect(() => {
    loadCurrencies()
}, []);
    const contextValue = {
        currency,
        setCurrency,
    };

    return(

        
        <>
        <CurrencyContext.Provider value ={contextValue}>
       <select 
       name="currency" 
       value= {currency}
       onChange= {handleCurrencyChange}
       >
        {
            currencies.map(currency => (
                <option key={ currency} value= {currency}>{currency}
                </option>
            ))
        }
       </select>
       <br/>
        Exchange rate: {exchangeRate} {currency} / 1 EUR
        </CurrencyContext.Provider>
    </>
    )
}