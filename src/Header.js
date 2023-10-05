import { Link } from 'react-router-dom';


export const Header = ({cartLength, price}) => {

  return ( <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 mt-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
            <span className="self-center text-xl font-normal whitespace-nowrap dark:text-white">Shoppster</span>
             </Link>
            <div className="flex md:order-2">
              <Link to="/cart" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cart: {cartLength} / ${price}</Link>
             </div>
           <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
               <li>
                 <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 text-xl font-normal" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl font-normal">Cart</Link>
               </li>
              </ul>
            </div>
       </div>
    </nav>
  



  )
}
