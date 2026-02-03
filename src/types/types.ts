export type UserInputType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
  durationType: "Month" | "Year";
};

export type UserInputProps = {
  userInput: UserInputType;
  onChange: (field: keyof UserInputType, value: string | number) => void;
};

export type ResultProps = {
  input: {
    principal: number;
    annualContribution: number;
    interestRate: number;
    years: number;
    durationType: "Month" | "Year";
  };
};

export type YearData = {
  year: number;
  valueEndOfYear: number;
  interest: number;
  annualInvestment: number;
};

export type InvestmentParams = {
  principal: number;
  annualContribution: number;
  interestRate: number;
  years: number;
  durationType: string;
};

export type AnnualInvestmentData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};
