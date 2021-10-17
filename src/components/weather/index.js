import { QUESTION_WEATHER } from "./queries";
import { useQuery } from "@apollo/client";
import WeatherCard from "./WeatherCard";

function Weather({ selectedCity }) {
  const { loading, error, data } = useQuery(QUESTION_WEATHER, {
    variables: { name: selectedCity },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(data);
  const { getCityByName } = data;

  const convertTimestampToDate = (timestamp) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(timestamp);
  };

  return (
    <div>
      <WeatherCard className="weatherCard"
        dt={convertTimestampToDate(getCityByName.weather.timestamp)}
        temp_min={(getCityByName.weather.temperature.min - 273.15).toFixed(0)}
        temp_max={(getCityByName.weather.temperature.max - 273.15).toFixed(0)}
        humidity={getCityByName.weather.clouds.humidity}
        wind={getCityByName.weather.wind.speed}
        main={getCityByName.weather.summary.title}
        icon={getCityByName.weather.summary.icon}
      />
    </div>
  );
}

export default Weather;
