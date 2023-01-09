import sunny from "../assets/weather-icons/Sunny.png";
import clear from "../assets/weather-icons/Clear.png";
import partlyCloudyDay from "../assets/weather-icons/PartlyCloudyDay.png";
import partlyCloudyNight from "../assets/weather-icons/PartlyCloudyNight.png";
import cloudy from "../assets/weather-icons/Cloudy.png";
import fog from "../assets/weather-icons/Fog.png";
import occLightRain from "../assets/weather-icons/OccLightRain.png";
import occLightSleet from "../assets/weather-icons/OccLightSleet.png";
import modRain from "../assets/weather-icons/ModRain.png";
import modSleet from "../assets/weather-icons/ModSleet.png";
import occLightSnow from "../assets/weather-icons/OccLightSnow.png";
import cloudRainThunder from "../assets/weather-icons/CloudRainThunder.png";
import cloudSleetSnowThunder from "../assets/weather-icons/CloudSleetSnowThunder.png";

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

function getIconSrc(weatherCode: number, night = false) {
  switch (weatherCode) {
    case 0:
      return night ? clear : sunny;
      break;
    case 1:
    case 2:
      return night ? partlyCloudyNight : partlyCloudyDay;
      break;
    case 3:
      return cloudy;
      break;
    case 45:
    case 48:
      return fog;
      break;
    case 51:
    case 53:
    case 55:
      return occLightRain;
      break;
    case 56:
    case 57:
      return occLightSleet;
      break;
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return modRain;
      break;
    case 66:
    case 67:
      return modSleet;
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return occLightSnow;
      break;
    case 95:
      return cloudRainThunder;
      break;
    case 96:
    case 99:
      return cloudSleetSnowThunder;
      break;
    default:
      return night ? clear : sunny;
      break;
  }
}

export default getIconSrc;
