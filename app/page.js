"use client";

import Image from "next/image";
import { product } from "./libs/product";
import Checkout from "./components/Checkout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // render midtrans snap token
    // karna gaada html head, diakalin menggunakan javascript 
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
    const clientKey = process.env.NEXT_PUBLIC_CLIENT

    const script = document.createElement("script");
    script.src = snapScript
    script.setAttribute('data-client-key', clientKey)
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script)
    }
  }, []);

  return (
    <>
      <main className="max-w-xl mx-auto sm:px-16 pb-16 pt-5">
        <div className="flex flex-col">
          <Image
            src={product.image}
            alt="..."
            width={250}
            height={250}
            className="w-full object-cover"
          />
          <div className="border border-gray-100 bg-white p-6">
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1.5 text-sm text-gray-700">Rp {product.price}</p>
            <p className="py-4 text-sm text-gray-700 text-justify">
              {product.description}
            </p>
            <Checkout />
          </div>
        </div>
      </main>
    </>
  );
}
