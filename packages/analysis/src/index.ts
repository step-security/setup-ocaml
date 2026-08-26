import * as process from "node:process";
import * as core from "@actions/core";
import { validateSubscription } from "../../common/src/validation.js";
import { analysis } from "./analysis.js";
import { installDune, installOpamPackages } from "./opam.js";

async function run() {
  try {
    await validateSubscription();
    await installOpamPackages();
    await installDune();
    await analysis();
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      core.error(error.message);
    }
    process.exit(1);
  }
}

void run();
