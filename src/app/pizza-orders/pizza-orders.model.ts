export interface Deserializable {
    deserialize(input: any): this
}

export class PizzaOrder {

    size: String
    crust: String
    topping: String

}