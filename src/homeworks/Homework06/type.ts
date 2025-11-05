let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;
let nullableValue: null = null;
const numbers: number[] = [1, 2, 3, 4];
const names: string[] = ["Alice", " Bob", "Charlie"];
const mixed: (number | string)[] = [1, "Alice", 2, "Bob"];
const colors: (number | string | boolean)[] = [123, "red", true, "blue"];
const getSub = (a: number, b: number): number => {
  const sub: number = a - b;
  return sub;
};
const logMessage = (message: string): void => {
  console.log(message);
};
