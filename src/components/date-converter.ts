import { ComplexAttributeConverter } from "lit";

export const dateConverter: ComplexAttributeConverter<Date> = {
    toAttribute: (date: Date) => {
        return date.toLocaleDateString('en-US')
    },
    fromAttribute: (value: string) => {
        return new Date(value)
    }
}