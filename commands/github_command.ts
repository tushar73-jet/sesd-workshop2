import { Command } from "commander";
import axios from "axios";

export default class GithubCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("github <username>")
            .description("GitHub profile info")
            .action((username: string) => this.execute(username));
    }

    async execute(username: string) {
        try {
            const res = await axios.get(`https://api.github.com/users/${encodeURIComponent(username)}`);
            const data = res.data;

            console.log(`\n🐙 GitHub Profile: ${data.login}`);
            if (data.name) console.log(`🧑 Name: ${data.name}`);
            if (data.bio) console.log(`📝 Bio: ${data.bio}`);
            console.log(`🌟 Followers: ${data.followers} | Following: ${data.following}`);
            console.log(`📦 Public Repos: ${data.public_repos}`);
            console.log(`🔗 URL: ${data.html_url}\n`);

        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                console.log(`GitHub user '${username}' not found.`);
            } else {
                console.log("Failed to fetch GitHub profile.");
            }
        }
    }
}
