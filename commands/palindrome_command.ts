import { Command } from "commander";

export default class PalindromeCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("palindrome <word>")
            .description("Check if a word is a palindrome")
            .action((word: string) => this.execute(word));
    }

    execute(word: string) {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reversed = cleanWord.split("").reverse().join("");

        if (cleanWord === reversed) {
            console.log(`Yes, "${word}" is a palindrome!`);
        } else {
            console.log(`No, "${word}" is not a palindrome.`);
        }
    }
}
