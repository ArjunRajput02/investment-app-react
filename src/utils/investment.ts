import type { InvestmentParams, AnnualInvestmentData } from "../types/types";

export function calculateInvestmentResults({
  principal,
  annualContribution,
  interestRate,
  years,
  durationType,
}: InvestmentParams): AnnualInvestmentData[] {
  const annualData: AnnualInvestmentData[] = [];
  let investmentValue = principal;
  years = years * (durationType === "Month" ? 1 : 12);

  for (let i = 0; i < years; i++) {
    const interestEarnedInYear = investmentValue * (interestRate / 100);
    investmentValue += interestEarnedInYear + annualContribution;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualContribution,
    });
  }
  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
