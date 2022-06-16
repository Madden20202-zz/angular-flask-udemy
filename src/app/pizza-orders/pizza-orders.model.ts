export class PizzaOrder {

    private crust: String
    private size: String
    private toppings: String

    constructor(Crust: String, Size: String, Toppings:String) {
        this.crust = Crust,
        this.size = Size,
        this.toppings = Toppings
    }

    getPizzaInformation(): String {
        return this.crust, this.size, this.toppings
    }
}