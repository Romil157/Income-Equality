
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Methodology: React.FC = () => {
  return (
    <Layout className="container py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Methodology</h1>
        <p className="text-muted-foreground mt-2">
          Learn about the data sources, methodologies, and calculations used in this project.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Sources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Primary Sources</h3>
            <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1 mt-2">
              <li>World Inequality Database (WID)</li>
              <li>National Sample Survey Office (NSSO)</li>
              <li>Ministry of Statistics and Programme Implementation (MOSPI)</li>
              <li>Reserve Bank of India (RBI) household surveys</li>
              <li>Census of India</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Time Period</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Data collected spans from 2000 to 2023, with annual measurements for national-level metrics
              and 5-year intervals for state-level data.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inequality Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold">Gini Coefficient</h3>
            <p className="text-sm text-muted-foreground mt-1">
              The Gini coefficient measures the distribution of income across a population. 
              A coefficient of 0 expresses perfect equality (everyone has the same income), 
              while a coefficient of 1 expresses maximal inequality (one person has all the income).
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Formula: G = (2ΣᵢiYᵢ - (n+1)Σᵢ)/(n²μ)
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Where Yᵢ is income of person i, μ is mean income, and n is total population.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold">Top 10% / Bottom 50% Income Ratio</h3>
            <p className="text-sm text-muted-foreground mt-1">
              This ratio measures how many times more income the top 10% earners receive compared to the bottom 50%.
              It provides an intuitive measure of inequality between the top and bottom segments of society.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Formula: (Total income of top 10%) ÷ (Total income of bottom 50%)
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold">Wealth Distribution</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Measures the percentage of total wealth held by the top 1% of the population.
              This metric captures inequality in asset ownership rather than just income flows.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold">Poverty Rate</h3>
            <p className="text-sm text-muted-foreground mt-1">
              The percentage of population living below the national poverty line,
              as defined by the Planning Commission of India.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitations & Caveats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            While we strive for accuracy and comprehensiveness, users should be aware of the following limitations:
          </p>
          <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
            <li>Data for some states may be incomplete or estimated for certain years.</li>
            <li>Income inequality metrics may not fully capture non-monetary aspects of welfare.</li>
            <li>Household surveys may underrepresent both the very poor and very wealthy.</li>
            <li>Different data sources may use varying methodologies, creating some inconsistencies.</li>
            <li>All visualizations and analyses are for educational purposes only.</li>
          </ul>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Methodology;
