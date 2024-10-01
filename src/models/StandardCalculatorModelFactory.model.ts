import { ICalculatorModel } from "../interfaces/calculator-model.interface";
import { AbstractCalculatorModelFactory } from "./abstractcalculator.model";
import { StandardCalculatorModel } from "./calculator.model";

export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {
    constructor() {
        super();
    }

    makeCalculator(): ICalculatorModel {
        return new StandardCalculatorModel();
    }
}