import { Command } from "commander";

class GreetCommand {
  program: Command;

   constructor(program: Command) {
   this.program = program;
   }

   register() {
   this.program
    .command("greet <name>")
    .action((name: string) => {
    this.sayHello(name);
    });
  }

  sayHello(name: string) {
   console.log(`Hello ${name}`);
  }
}

const program = new Command();

const greetCommand = new GreetCommand(program);
greetCommand.register();

program.parse(process.argv);


module.exports = GreetCommand;