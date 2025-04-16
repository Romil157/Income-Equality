
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { indiaStatesData } from '@/data/indiaStatesData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import indiaStatesGeoJSON from '@/data/india-states.json';

// Define the map metrics that can be displayed
const metrics = [
  { id: 'gini', name: 'Gini Coefficient', description: 'Measures income inequality (0-1)' },
  { id: 'income_ratio', name: 'Top 10% / Bottom 50% Ratio', description: 'Income share ratio between top 10% and bottom 50%' },
  { id: 'wealth_ratio', name: 'Wealth Distribution', description: 'Wealth share held by top 1%' },
  { id: 'poverty_rate', name: 'Poverty Rate', description: 'Percentage of population below poverty line' }
];

// Generate a color based on the metric value
const getColor = (value: number | null) => {
  if (value === null) return 'map-unknown';
  if (value >= 0.7) return 'map-high-inequality';
  if (value >= 0.4) return 'map-medium-inequality';
  return 'map-low-inequality';
};

interface IndiaMapProps {
  className?: string;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ className }) => {
  const [selectedMetric, setSelectedMetric] = useState(metrics[0].id);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [year, setYear] = useState<number>(2023);
  const availableYears = [2010, 2015, 2020, 2023];

  const onEachFeature = (feature: any, layer: any) => {
    if (!feature.properties) return;
    
    layer.on({
      mouseover: () => setSelectedState(feature.properties.name),
      mouseout: () => setSelectedState(null),
      click: () => {
        console.log('Selected state:', feature.properties.name);
      }
    });
  };

  // Style function for the GeoJSON layer
  const style = (feature: any) => {
    if (!feature.properties) return {};
    
    // Get data for this state and the selected metric
    const stateData = indiaStatesData.find(s => s.name === feature.properties.name);
    const yearData = stateData?.yearlyData.find(y => y.year === year);
    const value = yearData ? yearData[selectedMetric as keyof typeof yearData] : null;
    
    const fillColor = getColor(value);
    
    return {
      fillColor: `var(--color-${fillColor})`,
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7
    };
  };

  return (
    <div className={className || 'w-full h-full flex'}>
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Card className="p-4">
            <h3 className="text-lg font-medium">Metric</h3>
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="mt-2 w-full">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                {metrics.map((metric) => (
                  <SelectItem key={metric.id} value={metric.id}>
                    {metric.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="mt-2 text-sm text-muted-foreground">
              {metrics.find(m => m.id === selectedMetric)?.description}
            </p>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-medium">Year</h3>
            <div className="mt-2 flex gap-2">
              {availableYears.map((y) => (
                <Button 
                  key={y} 
                  size="sm"
                  variant={year === y ? "default" : "outline"}
                  onClick={() => setYear(y)}
                >
                  {y}
                </Button>
              ))}
            </div>
          </Card>
        </div>
        
        <Card className="flex-1 min-h-[500px] overflow-hidden">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={4}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              data={indiaStatesGeoJSON}
              style={style}
              onEachFeature={onEachFeature}
            >
              {selectedState && (
                <Tooltip direction="top" opacity={1} permanent>
                  {selectedState}
                </Tooltip>
              )}
            </GeoJSON>
          </MapContainer>
        </Card>
        
        <Card className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-map-low-inequality rounded-full"></div>
              <span className="text-xs">Low</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-map-medium-inequality rounded-full"></div>
              <span className="text-xs">Medium</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-map-high-inequality rounded-full"></div>
              <span className="text-xs">High</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-map-unknown rounded-full"></div>
              <span className="text-xs">No data</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Data source: World Inequality Database, 2023
          </p>
        </Card>
      </div>
    </div>
  );
};

export default IndiaMap;
