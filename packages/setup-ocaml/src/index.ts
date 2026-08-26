import * as process from "node:process";
import * as core from "@actions/core";
import { installer } from "./installer.js";
import { validateSubscription } from "../../common/src/validation.js";

async function run() {
  try {
    await validateSubscription();
    await installer();
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      core.error(error.message);
    }
    process.exit(1);
  }
}

void run();
