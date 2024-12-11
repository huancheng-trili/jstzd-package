#!/usr/bin/env node

const path = require("path");
const childProcess = require("child_process");

// Windows binaries end with .exe so we need to special case them.
const binaryName = "jstzd-bin";

function getBinaryPath() {
  try {
    // Resolving will fail if the optionalDependency was not installed
    return require.resolve(`${binaryName}`);
  } catch (e) {
    return path.join(__dirname, binaryName);
  }
}

module.exports.runBinary = function (...args) {
  console.log(getBinaryPath());
  foobar;
  childProcess.execFileSync(getBinaryPath(), args, {
    stdio: "inherit",
  });
};