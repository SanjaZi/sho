import { useState } from "react";

export const CartPage = ({fullCartHome, onRemove, price}) => {

const [newCart, setNewCart] = useState(fullCartHome);

const handleRemoveFromCart = (id) => {
   let updatedArray = fullCartHome.filter(obj => obj.id !== id);
   setNewCart(updatedArray);
  };

 onRemove(newCart, newCart.length);

 

  return (<>
   <h2 className="text-center text-3xl font-bold my-12">Cart Items {newCart.length} / ${price}</h2>
   <div   >
    <ul className="flex flex-col">
      {fullCartHome.map((card) => (
        <li key={card.id}>
        <div className=" flex lg:flex-row flex-col justify-between items-center  w-full h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-20">
        <img className="p-8 rounded-t-lg cardImage" src={card.img} alt="" />
            <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white fontSize">{card.name}</h5>
            <span className="text-xl font-bold text-gray-900 dark:text-white">${card.price}</span>
           <button className="text-white mb-2.5 h-12 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-3	" onClick={() => handleRemoveFromCart(card.id, card)}>
            Remove
          </button>
    </div>

        </li>
      ))}
    </ul>
  </div>
    </>
  

   
  )
}