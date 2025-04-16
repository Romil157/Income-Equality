
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart3, Map, FileDigit, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout className="container py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About the Project</h1>
        <p className="text-muted-foreground mt-2">
          Understanding and visualizing income inequality in India.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The Income Inequality Explorer is an interactive web application designed to visualize and
            analyze income inequality patterns across various states and regions in India. By combining
            geographic data with economic metrics, this tool aims to provide educational insights into
            the complex landscape of income distribution in the world's largest democracy.
          </p>
          <p className="mt-4">
            This project is intended for educational and research purposes, allowing users to explore historical
            trends, compare different states, and understand the underlying factors that contribute to economic
            disparities.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <CardTitle>Educational Purpose</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This project was created to help students, researchers, and the general public understand
              the patterns of income distribution in India. It serves as a visual learning tool to
              explore economic data through interactive maps and charts.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              All data visualizations are intended to promote discussion and awareness around income inequality
              issues rather than to make policy prescriptions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileDigit className="h-5 w-5 text-primary" />
              <CardTitle>Technical Implementation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This application is built using modern web technologies including:
            </p>
            <ul className="list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1">
              <li>React for the user interface</li>
              <li>Leaflet for interactive mapping</li>
              <li>Recharts for data visualization</li>
              <li>TailwindCSS for responsive design</li>
              <li>React Router for navigation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact & Feedback</CardTitle>
          <CardDescription>We value your input to improve this educational resource</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This project is open source and welcomes contributions from the community. If you have
            suggestions, feedback, or would like to contribute to the codebase, please visit our
            GitHub repository or contact the project team.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              GitHub Repository
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Contact via Email
            </a>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default About;
