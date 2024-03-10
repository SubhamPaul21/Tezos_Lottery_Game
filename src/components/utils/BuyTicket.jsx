import React from "react";

export default async function BuyTicket(contract) {
    const operation = await contract.methods.buy_ticket().send({ amount: 1 });
    await operation.confirmation();
    alert("Ticket Bought");
}