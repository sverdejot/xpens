export class Expense {
    readonly id         : string
    readonly description: string
    readonly amount     : number
    readonly currency   : string
    readonly date       : number

    constructor(id: string, description:string, amount:number, currency:string, date:number) {        
        this.id             = id
        this.description    = description
        this.amount         = amount
        this.currency       = currency
        this.date           = date
    }
}