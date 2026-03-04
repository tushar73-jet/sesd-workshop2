#!/usr/bin/env node
import { CLI_Engine } from "./cli_engine/cli_engine";

import GreetCommand from "./commands/greet_command";
import JokeCommand from "./commands/joke_command";
import WeatherCommand from "./commands/weather_command";
import GithubCommand from "./commands/github_command";
import QuoteCommand from "./commands/quote_command";
import FactCommand from "./commands/fact_command";

import PalindromeCommand from "./commands/palindrome_command";
import CountdownCommand from "./commands/countdown_command";
import CoinflipCommand from "./commands/coinflip_command";
import AgeCommand from "./commands/age_command";

const engine = new CLI_Engine();

engine.registerCommands([
    GreetCommand,
    JokeCommand,
    WeatherCommand,
    GithubCommand,
    QuoteCommand,
    FactCommand,
    PalindromeCommand,
    CountdownCommand,
    CoinflipCommand,
    AgeCommand
]);

engine.run();