import { useState } from "react";
import { Header } from "./component/Header";
import { Result } from "./component/Result";
import { UserInput } from "./component/UserInput";
import type { UserInputType } from "./types/types";

function App() {
  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
    durationType: "Month",
  });

  const isValidInput = userInput.duration > 0;

  function handleInput(
    field: keyof UserInputType,
    value: string | number
  ) {
    setUserInput((prev) => ({
      ...prev,
      [field]:
        field === "durationType"
          ? (value as "Month" | "Year")
          : Number(value),
    }));
  }

  const resultInput = {
    principal: userInput.initialInvestment,
    annualContribution: userInput.annualInvestment,
    interestRate: userInput.expectedReturn,
    years: userInput.duration,
    durationType: userInput.durationType,
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInput} />
      {!isValidInput && (
        <p>Please enter a valid duration greater than zero.</p>
      )}
      {isValidInput && <Result input={resultInput} />}
    </>
  );
}

export default App;
