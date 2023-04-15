import validate from "uuid-validate";

export class UUID {
    readonly value: string;

    constructor(value: string) {
        this.ensureValid(value)

        this.value = value;
    }

    private ensureValid(id: string): void {
        if (!validate(id)) {
            throw new Error(`<${this.constructor.name}> does not allow the value ${id}`)
        }
    }

    toString(): string {
        return this.value
    }
}