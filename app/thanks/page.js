import Link from 'next/link'
import React from 'react'
import SuccessAnimation from '../components/lottie'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-4'>
            <SuccessAnimation/>
            <h3 className='text-center -mt-6'>Terimakasih telah melakukan pembayaran</h3>
            <Link href="/" className="rounded bg-indigo-500 px-4 py-2 text-sm font-medium transition hover:scale-105 text-white">Kembali</Link>
        </div>
    )
}

export default page