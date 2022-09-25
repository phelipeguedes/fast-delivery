class Order {
    
    constructor(
        public address: string, 
        public number: number,
        public complement: string,
        public paymentOption: string,
        public item: ItemOrder[] = []
    ){}
}

class ItemOrder {
    
    constructor(
        public id: string, 
        public qtdItems: number){}
}

export {Order, ItemOrder}

