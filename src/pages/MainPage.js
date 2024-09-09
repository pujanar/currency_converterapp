import React ,{useState} from 'react'

export default function MainPage() {

  //states
  const [date,setDate]=useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const[targetCurrency, setTargetCurrency]= useState("");
  const[amountInSourceCurrency, setAmountInSourceCurrency]= useState(0);
  const[amountInTargetCurrency, setAmountInTargetCurrency]= useState(0);

  //handle submit method
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(
      date,
      setSourceCurrency,
      targetCurrency,
      amountInSourceCurrency
    )
  }
  return (
    <div>
        <h1 className='lg:mx-32 text-5xl font-bold text-yellow-500 font-serif'>Convert Your Currencies Today</h1>
        <p className='lg:mx-32 opacity-80 py-6'>The Currency Converter App offers real-time currency conversions with accurate exchange rates. It features a simple interface where users can select their base and target currencies for instant results. Designed for travelers, shoppers, and financial professionals, it ensures users are always updated with global rates. Additionally, the app supports historical data and exchange rate charts for deeper insights.</p>

        <div className='mt-5 flex items-center justify-center flex-col'>
          <section className='w-full lg:w-1/2'>
            <form onSubmit={handleSubmit}>
              
              <div className="mb-4">
                <label 
                htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input 
                onChange={(e)=>setDate(e.target.value)}
                type="Date" id={date}
                name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500" placeholder="name@flowbite.com" required />
              </div>

              <div className="mb-4">
                <label htmlFor={sourceCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                <select
                onChange={(e)=>setAmountInSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500"
                id={sourceCurrency}
                name={sourceCurrency}
                value={sourceCurrency}>
                  <option value="">Select relevant currency</option>
                </select>
                
              </div>

              <div className="mb-4">
                <label htmlFor={targetCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency </label>
                <select
                onChange={(e)=>setAmountInTargetCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500"
                id={targetCurrency}
                name={targetCurrency}
                value={targetCurrency}>
                  <option value="">Select Target currency</option>
                </select>
                
              </div>

              <div className="mb-4">
                <label for={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                <input 
                onChange={(e)=>setAmountInSourceCurrency(e.target.value)}
                type="number" id={amountInSourceCurrency}
                name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500" placeholder="" required />
              </div>
              <button className='bg-yellow-300 hover:bg-yellow-500 text-black font-extrabold py-2 px-4 rounded-md'>Get Exchange Rate </button>
              
              
            </form>
          </section>
        </div>
    </div>
  )
}
