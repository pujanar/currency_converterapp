import React from 'react'

export default function MainPage() {
  return (
    <div>
        <h1 className='lg:mx-32 text-5xl font-bold text-yellow-500'>Convert Your Currencies Today</h1>
        <p className='lg:mx-32 opacity-80 py-6'>The Currency Converter App offers real-time currency conversions with accurate exchange rates. It features a simple interface where users can select their base and target currencies for instant results. Designed for travelers, shoppers, and financial professionals, it ensures users are always updated with global rates. Additionally, the app supports historical data and exchange rate charts for deeper insights.</p>

        <div className='mt-5 flex items-center justify-center flex-col'>
          <section className='w-full lg:w-1/2'>
            <form>
              
              <div className="mb-4">
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500" placeholder="name@flowbite.com" required />
              </div>

              <div className="mb-4">
                <label htmlFor="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500"
                id=''
                name=''>
                  <option value="">Select relevant currency</option>
                </select>
                
              </div>

              <div className="mb-4">
                <label htmlFor="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency </label>
                <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500"
                id=''
                name=''>
                  <option value="">Select Target currency</option>
                </select>
                
              </div>

              <div className="mb-4">
                <label for="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                <input type="text" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-yellow-500" placeholder="" required />
              </div>
              <button className='bg-yellow-300 hover:bg-yellow-500 text-black font-extrabold py-2 px-4 rounded-md'>SUBMIT</button>
              
              
            </form>
          </section>
        </div>
    </div>
  )
}
