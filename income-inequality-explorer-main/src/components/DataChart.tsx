
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DataChartProps {
  title: string;
  description?: string;
  type?: 'bar' | 'line';
  data: any[];
  dataKey: string;
  categories: string[];
  className?: string;
}

const DataChart: React.FC<DataChartProps> = ({
  title,
  description,
  type = 'bar',
  data,
  dataKey,
  categories,
  className,
}) => {
  const [timeRange, setTimeRange] = React.useState('all');

  const getTimeRangeData = () => {
    if (timeRange === 'all') return data;
    if (timeRange === 'last5') return data.slice(-5);
    if (timeRange === 'last10') return data.slice(-10);
    return data;
  };

  const filteredData = getTimeRangeData();

  const colors = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8',
    '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'
  ];

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All data</SelectItem>
              <SelectItem value="last5">Last 5 years</SelectItem>
              <SelectItem value="last10">Last 10 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={300}>
          {type === 'bar' ? (
            <BarChart data={filteredData}>
              <XAxis dataKey={dataKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              {categories.map((category, index) => (
                <Bar 
                  key={category} 
                  dataKey={category} 
                  fill={colors[index % colors.length]} 
                  name={category.replace('_', ' ')}
                />
              ))}
            </BarChart>
          ) : (
            <LineChart data={filteredData}>
              <XAxis dataKey={dataKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              {categories.map((category, index) => (
                <Line
                  key={category}
                  type="monotone"
                  dataKey={category}
                  stroke={colors[index % colors.length]}
                  name={category.replace('_', ' ')}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DataChart;
