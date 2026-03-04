# SESD Workshop 2 - Custom CLI Tool

A fully functional, Object-Oriented Command Line Interface (CLI) built using Node.js and TypeScript. 

This project fulfills the SESD Workshop 2 requirements by providing a class-based architecture with an integrated `CLI_Engine` and 10 custom commands, including 5 distinct API integrations.

## 🚀 Setup Instructions

Follow these steps to set up and run the CLI tool on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- `npm` (comes with Node)

### Installation
1. Clone the repository and navigate into the project directory:
   ```bash
   cd sesd-workshop2
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Compile the TypeScript code to JavaScript:
   ```bash
   npx tsc
   ```

## 🛠️ Available Commands

The CLI comes packed with 10 custom commands structured as individual classes:

| Command | Description |
|---|---|
| `greet <name>` | Greets you based on the current time of day |
| `joke` | Fetches a random joke with a punchline from the Official Joke API |
| `weather <city>` | Pulls live weather data for any specified city via Open-Meteo |
| `github <username>` | Retrieves GitHub profile information and repository count |
| `quote` | Generates a random inspirational quote from the ZenQuotes API |
| `fact` | Fetches a random interesting fact from the Useless Facts API |
| `palindrome <word>` | Checks if a provided word reads the same forwards and backwards |
| `countdown <n>` | Runs an animated countdown timer in your terminal |
| `coinflip` | Flips a coin (heads or tails) with a dramatic pause |
| `age <birthyear>` | Calculates your current age based on the year provided |

## 📖 Example Usage

You can run the CLI using `npx ts-node index.ts <command>` or by executing the compiled JS via `./dist/index.js <command>`.

**Time-aware Greeting:**
```bash
$ npx ts-node index.ts greet Alice
Good evening, Alice!
```

**Fetch a Joke (API):**
```bash
$ npx ts-node index.ts joke

😂 What do you call corn that joins the army?
🥁 Kernel.
```

**Check Weather in a City (API):**
```bash
$ npx ts-node index.ts weather London

🌍 Weather in London, United Kingdom:
🌡️  Temperature: 12.4°C
💨 Wind Speed: 13 km/h
```

**Check GitHub Profile (API):**
```bash
$ npx ts-node index.ts github octocat

🐙 GitHub Profile: octocat
🧑 Name: The Octocat
📝 Bio: 
🌟 Followers: 12839 | Following: 9
📦 Public Repos: 8
🔗 URL: https://github.com/octocat
```

**Animated Countdown:**
```bash
$ npx ts-node index.ts countdown 3
⏳ Starting countdown from 3...
⏱️  Time remaining: 1s
🚀 Liftoff! Countdown finished.
```