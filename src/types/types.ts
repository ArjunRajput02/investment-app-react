export type UserInputType = {
  initialInvestment: number | string;
  annualInvestment: number | string;
  durationType: string;
  expectedReturn: number | string;
  duration: number | string;
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
    durationtype: string;
  };
};

export type YearData = {
  year: number;
  valueEndOfYear: number;
  interest: number;
  annualInvestment: number;
};