import { useState } from "react";
import "./lottery.css"
import { generateTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winningSum }) {
    let [ticket, setTicket] = useState(generateTicket(n));
    let isWinning = sum(ticket) === winningSum;

    function buyTicket() {
        setTicket(generateTicket(n));
    }

    return <div>
        {/* <h1>Lottery Game</h1>
         <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>Buy new Ticket</button>
        <h3>{isWinning && "Congratulation, You Won"}</h3> */}
        <div className="LotteryContainer">
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Buy new Ticket</button>
            <h3 className="winText">{isWinning && "Congratulation, You Won"}</h3>
        </div>

    </div>
}
