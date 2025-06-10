const path = require("path");
const fs = require("fs");

// Resolve the main entry file for msw/native
const mswNativePath = require.resolve("msw/native");

// Find the msw package root directory
let dir = mswNativePath;
console.log(dir);
