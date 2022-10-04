export interface card{
    number: number,
    suit: string
}

export interface deck{
    player: card[],
    computer: card[]
}

export type deckFunction = () => card[];

