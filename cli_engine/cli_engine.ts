import { Command } from "commander";

export class CLI_Engine {
    program: Command;

    constructor() {
        this.program = new Command();
    }

    registerCommands(commands: any[]) {
        commands.forEach((CommandClass) => {
            const cmdInstance = new CommandClass(this.program);
            cmdInstance.register();
        });
    }

    run() {
        this.program.parse();
    }
}