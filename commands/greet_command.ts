import { Command } from "commander";

export default class GreetCommand {
  program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  register() {
    this.program
      .command("greet <name>")
      .description("Time-aware greeting")
      .action((name: string) => this.execute(name));
  }

  execute(name: string) {
    const hour = new Date().getHours();
    let timeGreeting = "Good evening";
    if (hour < 12) timeGreeting = "Good morning";
    else if (hour < 18) timeGreeting = "Good afternoon";

    console.log(`${timeGreeting}, ${name}!`);
  }
}
