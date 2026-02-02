import { useState } from "react";
import { Header } from "./component/Header";
import { Result } from "./component/Result";
import { UserInput } from "./component/UserInput";

// User input type
export type UserInputType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
  durationTyple: "Month" | "Year";
};

function App() {
  
  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
    durationTyple: "Month",
  });

  const isValidInput = userInput.duration > 0;


  function handleInput(
    field: keyof UserInputType,
    value: string | number
  ) {
    setUserInput((prev) => ({
      ...prev,
      [field]:
        field === "durationTyple" ? (value as "Month" | "Year") : Number(value),
    }));
  }

  const resultInput = {
    principal: userInput.initialInvestment,
    annualContribution: userInput.annualInvestment,
    interestRate: userInput.expectedReturn,
    years:
      userInput.durationTyple === "Month"
        ? userInput.duration / 12
        : userInput.duration,
         durationtype: userInput.durationTyple,
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInput} />
      {!isValidInput && <p>Please enter a valid duration greater than zero.</p>}
      {isValidInput && <Result input={resultInput} />}
    </>
  );
}

export default App;
