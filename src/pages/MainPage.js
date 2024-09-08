import React from 'react'

export default function MainPage() {
  return (
    <div>
        <h1 className='lg:mx-32 text-5xl font-bold text-yellow-500'>Convert Your Currencies Today</h1>
        <p className='lg:mx-32 opacity-80 py-6'>The Currency Converter App offers real-time currency conversions with accurate exchange rates. It features a simple interface where users can select their base and target currencies for instant results. Designed for travelers, shoppers, and financial professionals, it ensures users are always updated with global rates. Additionally, the app supports historical data and exchange rate charts for deeper insights.</p>

        <div className='mt-5 flex items-center justify-center flex-col'>
          <section className='w-full lg:w-1/2'>
            <form>
              
              <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="date" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>
              
            </form>
          </section>
        </div>
    </div>
  )
}
