import React from 'react'
import Image from 'next/image'

const Checkout = () => {
  return (
   <>
 <div className="bg-gray-100">
  <div className="max-w-7xl mx-auto p-6">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white p-6 rounded-lg shadow-md">
     <h2 className="text-lg font-semibold mb-4">
      Contact information
     </h2>
     <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
       Email address
      </label>
      <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="email"/>
     </div>
     <h2 className="text-lg font-semibold mb-4">
      Shipping information
     </h2>
     <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
       <label className="block text-sm font-medium text-gray-700">
        First name
       </label>
       <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
      </div>
      <div>
       <label className="block text-sm font-medium text-gray-700">
        Last name
       </label>
       <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
      </div>
     </div>
     <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
       Company
      </label>
      <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
     </div>
     <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
       Address
      </label>
      <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
     </div>
     <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
       Apartment, suite, etc.
      </label>
      <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
     </div>
     <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
       <label className="block text-sm font-medium text-gray-700">
        City
       </label>
       <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
      </div>
      <div>
       <label className="block text-sm font-medium text-gray-700">
        Country
       </label>
        <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
     </div>
     <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
       <label className="block text-sm font-medium text-gray-700">
        State / Province
       </label>
       <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
      </div>
      <div>
       <label className="block text-sm font-medium text-gray-700">
        Postal code
       </label>
       <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
      </div>
     </div>
     <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
       Phone
      </label>
      <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text"/>
     </div>
     <h2 className="text-lg font-semibold mb-4">
      Delivery method
     </h2>
     <div className="grid grid-rows sm:grid-cols-2 gap-4 mb-4">
      <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between">
       <label className="flex items-center">
        <input  className="form-radio text-indigo-600" name="delivery" type="radio"/>
        <span className="ml-2">
         Standard
        </span>
       </label>
       <span>
        $5.00
       </span>
      </div>
      <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between">
       <label className="flex items-center">
        <input className="form-radio text-indigo-600" name="delivery" type="radio"/>
        <span className="ml-2">
         Express
        </span>
       </label>
       <span>
        $16.00
       </span>
      </div>
     </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
     <h2 className="text-lg font-semibold mb-4">
      Order summary
     </h2>
     <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex items-center mb-4">
       <img alt="Black T-shirt" className="w-16 h-16 rounded-md mr-4" height="60" src="https://storage.googleapis.com/a1aa/image/2vnfYfetZBcfqRNegkIcTAk80L55bXydRjwATMbJ9wFeuJS5E.jpg" width="60"/>
       <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-700">
         Basic Tee
        </h3>
        <p className="text-sm text-gray-500">
         Black
        </p>
        <p className="text-sm text-gray-500">
         Large
        </p>
       </div>
       <div className="text-sm font-medium text-gray-900">
        $32.00
       </div>
       <button className="ml-4 text-gray-400 hover:text-gray-500">
        <i className="fas fa-trash">
        </i>
       </button>
      </div>
      <div className="flex items-center">
       <img alt="Sienna T-shirt" className="w-16 h-16 rounded-md mr-4" height="60" src="https://storage.googleapis.com/a1aa/image/5ieTU5DLERzSPqJnRF8HiuJtd4dXB7yt7hB8PiPbMvGdTkyJA.jpg" width="60"/>
       <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-700">
         Basic Tee
        </h3>
        <p className="text-sm text-gray-500">
         Sienna
        </p>
        <p className="text-sm text-gray-500">
         Large
        </p>
       </div>
       <div className="text-sm font-medium text-gray-900">
        $32.00
       </div>
       <button className="ml-4 text-gray-400 hover:text-gray-500">
        <i className="fas fa-trash">
        </i>
       </button>
      </div>
     </div>
     <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
       <span>
        Subtotal
       </span>
       <span>
        $64.00
       </span>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
       <span>
        Shipping
       </span>
       <span>
        $5.00
       </span>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
       <span>
        Taxes
       </span>
       <span>
        $5.52
       </span>
      </div>
     </div>
     <div className="flex justify-between text-lg font-semibold text-gray-900 mb-4">
      <span>
       Total
      </span>
      <span>
       $75.52
      </span>
     </div>
     <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
      Confirm order
     </button>
    </div>
   </div>
  </div>
 </div>
   </>
  )
}

export default Checkout
