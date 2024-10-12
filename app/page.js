import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


export default function Home() {

  return (
    <>
      <div className="w-full content-center h-16 sm:h-36 md:h-44 mt-5 mb-5 text-5xl md:text-9xl text-center font-extrabold italic bg-clip-text text-transparent bg-center bg-cover" style={{ backgroundImage: "url('/images/back.jpg')" }}>
        KrishnOrganic
      </div>

      <Cards/>
      <Cart/>
      <Checkout/>
      <div className="w-full">
        <main className="">
        </main>
        <footer className="bg-slate-100 text-base sm:text-xl">
          <div className="p-2">
            <p className="pt-2 pb-2 text-lg sm:text-xl">Question and Answer</p>
            <hr />
            <p className="pt-1 pb-1 text-base">Q.What kind of products can we find while buying groceries online?</p>
            <p className="pt-1 pb-1 text-base">A.The online grocery offers various products like dal, flour, spices, cooking masala, salt, sugar, oils, dry fruits, breakfast cereals, cookies, etc. You can scroll, search, compare, and buy all your needed products from one place using your phone only.</p>
            <hr />
            <p className="pt-1 pb-1 text-base">Q.What is the quality of online groceries?</p>
            <p className="pt-1 pb-1 text-base">A.Various brands are offering high-quality groceries online. Items are fresh and ready to be used</p>
            <hr />
            <p className="pt-1 pb-1 text-base">Q.Can I use my coupons while purchasing online groceries?</p>
            <p className="pt-1 pb-1 text-base">A.Yes. You can use relevant coupons in your shopping when paying before check out</p>
            <hr />
            <p className="pt-1 pb-1 text-base">Q.Can I shop for my relatives who live in different cities than mine?</p>
            <p className="pt-1 pb-1 text-base">A.Yes. You can buy it for anyone, and you just need to put their address in the delivery address while purchasing.</p>
            <hr />
            <p className="pt-1 pb-1 text-base">Q.While online grocery shopping, can I pay with my debit cards?</p>
            <p className="pt-1 pb-1 text-base">A.Yes. You can pay using your credit cards, debit cards, online payment methods, and other options</p>
            <hr />
          </div>
          <hr />
        </footer>
      </div>



    </>
  );
}
