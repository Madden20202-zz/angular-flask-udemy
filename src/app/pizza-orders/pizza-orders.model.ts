export interface Deserializable {
    deserialize(input: any): this
}

export class PizzaOrder implements Deserializable {

    public crust: String
    public size: String
    public toppings: String

    deserialize(input: any): this {
        return Object.assign(this, input)
    }

    showPizzaOrder() {
        return this.crust, this.size, this.toppings
    }
    
}