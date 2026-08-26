import * as process from "node:process";
import * as core from "@actions/core";
import { validateSubscription } from "../../common/src/validation.js";
import { opamDuneLint, opamLint } from "./lint.js";
import { installOpamDuneLint, installOpamPackages } from "./opam.js";

async function run() {
  try {
    await validateSubscription();
    await installOpamPackages();
    await installOpamDuneLint();
    await opamLint();
    await opamDuneLint();
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      core.error(error.message);
    }
    process.exit(1);
  }
}

void run();
