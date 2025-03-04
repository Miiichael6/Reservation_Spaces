import { AppDataSource } from "./postgres.config";

export async function initDatabase() {
    try {
        await AppDataSource.initialize()
        console.log(">> database connected succesfully 🐘 <<".blue);
    } catch (error) {
        
        console.log(">> An error in database config happened".red);
        console.log(`>> error: `, error.message);
        throw error;
    }
}