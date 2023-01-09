// Code 	Description
// 0 	Clear sky
// 1, 2, 3 	Mainly clear, partly cloudy, and overcast
// 45, 48 	Fog and depositing rime fog
// 51, 53, 55 	Drizzle: Light, moderate, and dense intensity
// 56, 57 	Freezing Drizzle: Light and dense intensity
// 61, 63, 65 	Rain: Slight, moderate and heavy intensity
// 66, 67 	Freezing Rain: Light and heavy intensity
// 71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
// 77 	Snow grains
// 80, 81, 82 	Rain showers: Slight, moderate, and violent
// 85, 86 	Snow showers slight and heavy
// 95 * 	Thunderstorm: Slight or moderate
// 96, 99 * 	Thunderstorm with slight and heavy hail

function getWeatherDescr(weatherCode: number) {
  switch (weatherCode) {
    case 0:
      return "clear sky";
      break;
    case 1:
      return "mainly clear";
      break;
    case 2:
      return "partly cloudy";
      break;
    case 3:
      return "overcast";
      break;
    case 45:
      return "fog";
      break;
    case 48:
      return "rime fog";
      break;
    case 51:
      return "light drizzle";
      break;
    case 53:
      return "moderate drizzle";
      break;
    case 55:
      return "intense drizzle";
      break;
    case 56:
      return "light freezing drizzle";
      break;
    case 57:
      return "dense freezing drizzle";
      break;
    case 61:
      return "slight rain";
      break;
    case 63:
      return "moderate rain";
      break;
    case 65:
      return "heavy rain";
      break;
    case 66:
      return "light freezing rain";
      break;
    case 67:
      return "heavy freezing rain";
      break;
    case 71:
      return "slight snow fall";
      break;
    case 73:
      return "moderate snow fall";
      break;
    case 75:
      return "heavy snow fall";
      break;
    case 77:
      return "snow grains";
      break;
    case 80:
      return "slight rain showers";
      break;
    case 81:
      return "moderate rain showers";
      break;
    case 82:
      return "violent rain showers";
      break;
    case 85:
      return "slight snow showers";
      break;
    case 86:
      return "heavy snow showers";
      break;
    case 95:
      return "thunderstorm";
      break;
    case 96:
      return "thunderstorm with slight hail";
      break;
    case 99:
      return "thunderstorm with heavy hail";
      break;

    default:
      return "";
      break;
  }
}

export default getWeatherDescr;
