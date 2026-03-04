import { Command } from "commander";
import axios from "axios";

export default class WeatherCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("weather <city>")
            .description("Live weather data via Open-Meteo")
            .action((city: string) => this.execute(city));
    }

    async execute(city: string) {
        try {
            // 1. Geocode the city
            const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);

            if (!geoRes.data.results || geoRes.data.results.length === 0) {
                console.log(`Could not find location: ${city}`);
                return;
            }

            const location = geoRes.data.results[0];
            const lat = location.latitude;
            const lon = location.longitude;
            const locationName = `${location.name}, ${location.country}`;

            // 2. Get Weather
            const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const current = weatherRes.data.current_weather;

            console.log(`Weather in ${locationName}:`);
            console.log(`Temperature: ${current.temperature}°C`);
            console.log(`Wind Speed: ${current.windspeed} km/h`);
            console.log(`\n`);

        } catch (error) {
            console.log("Failed to fetch weather data.");
        }
    }
}
