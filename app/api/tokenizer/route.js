import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

// Midtrans Snap
let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey:process.env.NEXT_PUBLIC_CLIENT
});

export async function POST(request) {
    const{id, productName, price, quantity} = await request.json();
    // set 2 parameter yang berdasarkan minimum midtrans harus ada transactions detail
        let parameter = {
            item_details: {
                name: productName,
                price: price,
                quantity: quantity
            },
            transaction_details: {
                order_id: id,
                // kalkulasi agar price mengikuti quantity yang dibeli
                gross_amount: price * quantity
            }
        }
        // midtrans library snap
        const token = await snap.createTransactionToken(parameter);
        console.log(token)
        
        // ngirim response ke frontend pakai next
        return NextResponse.json({ token })
}