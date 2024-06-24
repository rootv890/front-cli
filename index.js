#!/usr/bin/env node

// node modules
const { exec } = require("child_process");
const fs = require("fs");
const { PerformanceObserver, performance } = require("perf_hooks");
const { error, warn, log } = require("console");

// Commands
const commands = require("./commands");

// Performance Observer
const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    log(`${entry.name}: ${entry.duration}ms`);
  });
  performance.clearMarks();
});

obs.observe({ entryTypes: ["measure"] });

// Get project name and template name
let projectName = process.argv[2];
let templateName = process.argv[3];

// Handle no arguments
if (!projectName && !templateName) {
  console.log(`Usage: front-cli <project-name> <template-name>`);

  error("Templates :");
  Object.keys(commands).forEach((name) => {
    error(`-${name} : For  ${commands[name].name} Project`);
  });

  process.exit(1);
}

if (!projectName || projectName === "." || projectName === "./") {
  // set project name : my project
  projectName = "./";
}

if (!templateName) {
  // set template name : nextjs
  templateName = commands.nextjs.name;
}

// Program Start
performance.mark("start");
// Project path
const projectPath = `${process.cwd()}/${projectName}`;

// Handle Project path
/**
 * If the told dir exits &&
 * Check if the directory is empty and if not donot proceed
 * else proceed with the command
 **/
if (fs.existsSync(projectPath)) {
  // Check for content in the that dir
  if (fs.readdirSync(projectPath).length > 0) {
    warn("Directory is not empty");
    process.exit(1);
  }
}
console.log("\x1b[32m", `Creating ${templateName} project...`);
performance.mark("project path success");

// Execute the command
try {
  exec(commands[templateName].command(projectName), (error, stdout, stderr) => {
    // Handle Error
    if (error) {
      throw new Error(error);
    }

    // Handle Success

    console.log(stdout);
    console.log(stderr);
    log(
      "\x1b[32m",
      `Your ${templateName} project ${projectName} created successfully!`
    );
    performance.mark("project succcess");

    // Measure performance
    // between start and success
    performance.measure("Total Time taken: ", "start", "project succcess");
  });
} catch (error) {
  error(`Error : ${error.stderr.toString()}`);
}
