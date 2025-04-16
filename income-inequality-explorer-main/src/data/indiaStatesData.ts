
// Sample data for Indian states' inequality metrics
// This is example data for demonstration purposes

export interface StateData {
  name: string;
  code: string;
  yearlyData: {
    year: number;
    gini: number;
    income_ratio: number;
    wealth_ratio: number;
    poverty_rate: number;
  }[];
}

export const indiaStatesData: StateData[] = [
  {
    name: "Maharashtra",
    code: "MH",
    yearlyData: [
      { year: 2010, gini: 0.55, income_ratio: 8.2, wealth_ratio: 0.42, poverty_rate: 0.18 },
      { year: 2015, gini: 0.57, income_ratio: 8.7, wealth_ratio: 0.46, poverty_rate: 0.16 },
      { year: 2020, gini: 0.59, income_ratio: 9.1, wealth_ratio: 0.49, poverty_rate: 0.14 },
      { year: 2023, gini: 0.58, income_ratio: 8.9, wealth_ratio: 0.48, poverty_rate: 0.13 }
    ]
  },
  {
    name: "Tamil Nadu",
    code: "TN",
    yearlyData: [
      { year: 2010, gini: 0.48, income_ratio: 7.1, wealth_ratio: 0.36, poverty_rate: 0.19 },
      { year: 2015, gini: 0.50, income_ratio: 7.5, wealth_ratio: 0.39, poverty_rate: 0.15 },
      { year: 2020, gini: 0.51, income_ratio: 7.8, wealth_ratio: 0.41, poverty_rate: 0.12 },
      { year: 2023, gini: 0.49, income_ratio: 7.6, wealth_ratio: 0.40, poverty_rate: 0.10 }
    ]
  },
  {
    name: "Kerala",
    code: "KL",
    yearlyData: [
      { year: 2010, gini: 0.42, income_ratio: 6.2, wealth_ratio: 0.30, poverty_rate: 0.12 },
      { year: 2015, gini: 0.44, income_ratio: 6.5, wealth_ratio: 0.32, poverty_rate: 0.09 },
      { year: 2020, gini: 0.45, income_ratio: 6.7, wealth_ratio: 0.33, poverty_rate: 0.07 },
      { year: 2023, gini: 0.43, income_ratio: 6.4, wealth_ratio: 0.31, poverty_rate: 0.06 }
    ]
  },
  {
    name: "Uttar Pradesh",
    code: "UP",
    yearlyData: [
      { year: 2010, gini: 0.52, income_ratio: 7.8, wealth_ratio: 0.38, poverty_rate: 0.35 },
      { year: 2015, gini: 0.54, income_ratio: 8.1, wealth_ratio: 0.41, poverty_rate: 0.31 },
      { year: 2020, gini: 0.56, income_ratio: 8.5, wealth_ratio: 0.43, poverty_rate: 0.28 },
      { year: 2023, gini: 0.55, income_ratio: 8.3, wealth_ratio: 0.42, poverty_rate: 0.25 }
    ]
  },
  {
    name: "Gujarat",
    code: "GJ",
    yearlyData: [
      { year: 2010, gini: 0.51, income_ratio: 7.6, wealth_ratio: 0.37, poverty_rate: 0.21 },
      { year: 2015, gini: 0.53, income_ratio: 8.0, wealth_ratio: 0.40, poverty_rate: 0.18 },
      { year: 2020, gini: 0.55, income_ratio: 8.4, wealth_ratio: 0.42, poverty_rate: 0.16 },
      { year: 2023, gini: 0.54, income_ratio: 8.2, wealth_ratio: 0.41, poverty_rate: 0.15 }
    ]
  },
  {
    name: "Karnataka",
    code: "KA",
    yearlyData: [
      { year: 2010, gini: 0.49, income_ratio: 7.3, wealth_ratio: 0.35, poverty_rate: 0.22 },
      { year: 2015, gini: 0.51, income_ratio: 7.7, wealth_ratio: 0.38, poverty_rate: 0.19 },
      { year: 2020, gini: 0.53, income_ratio: 8.1, wealth_ratio: 0.41, poverty_rate: 0.17 },
      { year: 2023, gini: 0.52, income_ratio: 7.9, wealth_ratio: 0.40, poverty_rate: 0.16 }
    ]
  },
  {
    name: "West Bengal",
    code: "WB",
    yearlyData: [
      { year: 2010, gini: 0.47, income_ratio: 7.0, wealth_ratio: 0.33, poverty_rate: 0.26 },
      { year: 2015, gini: 0.49, income_ratio: 7.3, wealth_ratio: 0.35, poverty_rate: 0.22 },
      { year: 2020, gini: 0.50, income_ratio: 7.5, wealth_ratio: 0.36, poverty_rate: 0.19 },
      { year: 2023, gini: 0.48, income_ratio: 7.2, wealth_ratio: 0.35, poverty_rate: 0.17 }
    ]
  },
  {
    name: "Rajasthan",
    code: "RJ",
    yearlyData: [
      { year: 2010, gini: 0.48, income_ratio: 7.1, wealth_ratio: 0.34, poverty_rate: 0.27 },
      { year: 2015, gini: 0.50, income_ratio: 7.4, wealth_ratio: 0.36, poverty_rate: 0.24 },
      { year: 2020, gini: 0.51, income_ratio: 7.6, wealth_ratio: 0.37, poverty_rate: 0.22 },
      { year: 2023, gini: 0.50, income_ratio: 7.5, wealth_ratio: 0.36, poverty_rate: 0.20 }
    ]
  },
  {
    name: "Bihar",
    code: "BR",
    yearlyData: [
      { year: 2010, gini: 0.54, income_ratio: 8.1, wealth_ratio: 0.39, poverty_rate: 0.41 },
      { year: 2015, gini: 0.56, income_ratio: 8.5, wealth_ratio: 0.42, poverty_rate: 0.38 },
      { year: 2020, gini: 0.57, income_ratio: 8.8, wealth_ratio: 0.44, poverty_rate: 0.35 },
      { year: 2023, gini: 0.56, income_ratio: 8.6, wealth_ratio: 0.43, poverty_rate: 0.33 }
    ]
  },
  {
    name: "Andhra Pradesh",
    code: "AP",
    yearlyData: [
      { year: 2010, gini: 0.46, income_ratio: 6.8, wealth_ratio: 0.32, poverty_rate: 0.21 },
      { year: 2015, gini: 0.48, income_ratio: 7.1, wealth_ratio: 0.34, poverty_rate: 0.18 },
      { year: 2020, gini: 0.49, income_ratio: 7.3, wealth_ratio: 0.35, poverty_rate: 0.16 },
      { year: 2023, gini: 0.48, income_ratio: 7.2, wealth_ratio: 0.34, poverty_rate: 0.15 }
    ]
  }
];
