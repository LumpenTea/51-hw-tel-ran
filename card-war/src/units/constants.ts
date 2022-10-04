import { card, deck, deckFunction } from "./types";

export const cards: deck = {
    player: [],
    computer: []
}

const numbers: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits: string[] = ['\u2661', '\u2662', '\u2664', '\u2667']; //decode: Heart, Diamond, Spade, Club 



const createDeck: deckFunction = () => {
    const deck: card[] = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            deck.push({ number: numbers[j], suit: suits[i] });
        }
    }

    return deck;
}

const shuffleDeck: deckFunction = () => {
    const deck: card[] = createDeck();
    for (let i = deck.length - 1; i > 0; i--) {
        const temp: card = deck[i];
        const randomCard: number = Math.floor(Math.random() * (deck.length - 1));
        deck[i] = deck[randomCard];
        deck[randomCard] = temp;
    }

    return deck;
}

export const cardsDeal = () => {
    const deck: card[] = shuffleDeck();
    cards.player = deck.splice(0, deck.length / 2);
    cards.computer = deck;
}