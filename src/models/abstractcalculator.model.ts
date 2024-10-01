import { ICalculatorModel } from "../interfaces/calculator-model.interface";

export abstract class AbstractCalculatorModelFactory {
    abstract makeCalculator(): ICalculatorModel;
}