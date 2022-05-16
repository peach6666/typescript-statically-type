declare function calculate(amount: number, format: boolean): number | string;
declare let taxNumber: number;
declare let taxString: string;
declare function calculateTax(amount: number, discount?: number, ...extraFees: number[]): number;
declare let taxValue: number;
