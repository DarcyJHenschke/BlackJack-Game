import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];

    const [dealer, setDealer] = useState(0);
    const [player, setPlayer] = useState(0);
    const [commentator, SetCommentator] = useState("Welcome to Black Jack");
    const [sit, setSit] = useState(false);
    const randomCard = () => {
        return Math.floor(Math.random() * deck.length);
    };
    console.log(randomCard());

    const deal = () => {
        setDealer(deck[randomCard()]);
        setPlayer(deck[randomCard()] + deck[randomCard()]);
    };

    const hit = () => {
        setPlayer(player + deck[randomCard()]);
    };

    const dealersHand = () => {
        while (dealer < 17) {
            setDealer(dealer + deck[randomCard()]);
        }
    };

    useEffect(() => {
        if (player === 21) {
            SetCommentator("BlackJack!! Player Wins");
        }
        if (player <= 21 && !sit) {
            SetCommentator(`You are on ${player}`);
        }
        if (player > 21) {
            SetCommentator("You Bust! Dealer wins");
        }
        if (dealer > player && dealer <= 21 && sit) {
            SetCommentator(`Dealer Wins`);
        }
        if (player > dealer && dealer <= 21 && sit) {
            SetCommentator(`Player Wins`);
        }

        if (dealer > 21) {
            SetCommentator("Player Wins");
        }
    }, [player]);

    console.log(dealer);
    console.log(player);
    return (
        <div className="App">
            <p>Dealers total: {dealer}</p>
            <p>Players total: {player}</p>
            {dealer > 0 && <button onClick={hit}>Hit</button>}
            {dealer > 0 && <button onClick={dealersHand}>Sit</button>}
            {dealer <= 0 && <button onClick={deal}>Deal</button>}
            <p>{commentator}</p>
        </div>
    );
}

export default App;
