
if (process.env.NODE_ENV === "development") {
  require("piping")() // hot reloading in dev
}

require("./server.js")
