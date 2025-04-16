
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DataChart from '@/components/DataChart';

// Sample data for charts
const inequalityTrendsData = [
  { year: 2000, gini: 0.45, wealth_ratio: 0.32, income_ratio: 0.28, poverty_rate: 0.22 },
  { year: 2005, gini: 0.47, wealth_ratio: 0.35, income_ratio: 0.30, poverty_rate: 0.20 },
  { year: 2010, gini: 0.49, wealth_ratio: 0.39, income_ratio: 0.33, poverty_rate: 0.18 },
  { year: 2015, gini: 0.51, wealth_ratio: 0.42, income_ratio: 0.36, poverty_rate: 0.16 },
  { year: 2020, gini: 0.53, wealth_ratio: 0.45, income_ratio: 0.39, poverty_rate: 0.15 },
  { year: 2023, gini: 0.52, wealth_ratio: 0.44, income_ratio: 0.38, poverty_rate: 0.14 },
];

const sectoralData = [
  { sector: 'Agriculture', income_share: 0.18, employment_share: 0.42 },
  { sector: 'Manufacturing', income_share: 0.22, employment_share: 0.18 },
  { sector: 'Services', income_share: 0.38, employment_share: 0.25 },
  { sector: 'IT', income_share: 0.12, employment_share: 0.08 },
  { sector: 'Others', income_share: 0.10, employment_share: 0.07 },
];

const DataInsights: React.FC = () => {
  return (
    <Layout className="container py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Data Insights</h1>
        <p className="text-muted-foreground mt-2">
          Explore trends in income inequality across India with interactive charts and visualizations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <DataChart
          title="Income Inequality Trends"
          description="Historical trends of key inequality metrics in India"
          type="line"
          data={inequalityTrendsData}
          dataKey="year"
          categories={['gini', 'wealth_ratio', 'income_ratio', 'poverty_rate']}
        />

        <DataChart
          title="Sectoral Income Distribution"
          description="Income vs employment share by sector"
          type="bar"
          data={sectoralData}
          dataKey="sector"
          categories={['income_share', 'employment_share']}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Findings</CardTitle>
          <CardDescription>Summary of major trends in income inequality</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Growing Wealth Gap</h3>
            <p className="text-sm text-muted-foreground">
              The gap between the richest 10% and poorest 50% has widened over the past two decades,
              with the Gini coefficient rising from 0.45 in 2000 to 0.52 in 2023.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Urban-Rural Divide</h3>
            <p className="text-sm text-muted-foreground">
              Urban areas continue to show higher income levels but also greater inequality
              compared to rural regions, with certain metropolitan cities showing exceptionally high
              concentration of wealth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Sectoral Disparities</h3>
            <p className="text-sm text-muted-foreground">
              The IT and services sectors generate a disproportionately high share of income
              relative to their employment share, while agriculture employs a large portion of the
              workforce but contributes less to overall income.
            </p>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default DataInsights;
