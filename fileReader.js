const fs = require("fs").promises;

async function readFile(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    console.log("file contents: ", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFile("example.txt");
