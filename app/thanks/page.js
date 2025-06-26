"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SuccessAnimation from "../components/lottie";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      {isLoading ? (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      ) : (
        <>
          <SuccessAnimation />
          <h3 className="text-center -mt-6">Terimakasih telah melakukan pembayaran</h3>
          <Link
            href="/"
            className="rounded bg-indigo-500 px-4 py-2 text-sm font-medium transition hover:scale-105 text-white"
          >
            Kembali
          </Link>
        </>
      )}
    </div>
  );
};

export default Page;
