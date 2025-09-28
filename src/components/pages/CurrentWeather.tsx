import type { GeocodingResponse, WeatherData } from "@/api/types";
import { Card, CardContent } from "../ui/card";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [currentWeather],
    main: { temp, feels, like, temp_min, temp_max, humidity },
    wind: { speed },
  } = data;

  return (
    <Card>
      <CardContent>

      </CardContent>

    </Card>
  );
};

export default CurrentWeather;
