const routes = [
    'misc',
    'CV'
]

const fs = require("fs-extra");
const path = require("path");
routes.forEach((route) => {
  fs.copySync(
    path.join("build", "index.html"),
    path.join("build", route, "index.html")
  );
});

// for CV deployment
fs.copySync(
  path.join("build", "assets"),
  path.join("build", "CV", "assets")
);
fs.remove(path.join("build", "assets"),)