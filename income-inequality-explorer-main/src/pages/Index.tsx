
import React from 'react';
import Layout from '@/components/Layout';
import IndiaMap from '@/components/IndiaMap';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout className="container py-8">
      <section className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Income Inequality Explorer</h1>
            <p className="text-muted-foreground mt-2">
              Explore economic inequality across Indian states with interactive maps and data visualizations
            </p>
          </div>
          <Button asChild>
            <Link to="/data-insights" className="flex items-center">
              View Data Insights <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="bg-card rounded-lg border shadow p-4">
          <p className="mb-4 text-sm">
            This map displays inequality metrics across Indian states. Select a metric and year to visualize the data.
          </p>
          <div className="h-[600px]">
            <IndiaMap />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card border rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">What is the Gini Coefficient?</h3>
            <p className="text-sm text-muted-foreground">
              The Gini coefficient is a measure of statistical dispersion intended to represent the income 
              inequality within a nation or any other group of people. A Gini coefficient of zero expresses 
              perfect equality, while a coefficient of one expresses maximal inequality.
            </p>
          </div>
          
          <div className="p-6 bg-card border rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Income Ratio Explained</h3>
            <p className="text-sm text-muted-foreground">
              The income ratio between top 10% and bottom 50% shows how many times more income the 
              richest tenth of the population makes compared to the poorest half. A higher value indicates 
              greater inequality.
            </p>
          </div>
          
          <div className="p-6 bg-card border rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Understanding Poverty Rate</h3>
            <p className="text-sm text-muted-foreground">
              The poverty rate represents the percentage of the population living below the poverty 
              line, which in India is defined based on minimum consumption expenditure. It's a key 
              indicator of economic well-being.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold tracking-tight">Explore Further</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/data-insights" className="group">
            <div className="p-6 bg-card border rounded-lg shadow-sm hover:shadow transition-shadow">
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary">
                Data Insights
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Dive deeper into the data with charts, trends, and analysis of inequality across Indian states.
              </p>
              <div className="text-primary flex items-center text-sm">
                View insights <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
          
          <Link to="/methodology" className="group">
            <div className="p-6 bg-card border rounded-lg shadow-sm hover:shadow transition-shadow">
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary">
                Methodology
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about the data sources, calculations, and methodology used in creating this explorer.
              </p>
              <div className="text-primary flex items-center text-sm">
                Read methodology <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
