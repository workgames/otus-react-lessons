import { createInterface } from "readline";
import { rpnTransform } from "./RPNTransform"
import { rpnCalculation } from "./RPNCalculation"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (): Promise<null> =>
  new Promise((resolve) => {
    rl.question("Введите данные > ", (answer: string) => {
      if (!answer || !/\S/.test(answer)) {
        console.log(`Result: не ввили данные`);
      } else {
        console.log(`Result: ${rpnCalculation.cacl(answer)}`);
      }
      resolve(null);
    });
  });

async function app(): Promise<void> {
  while (true) {
    await question();
  }
}

app();
