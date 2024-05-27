const path = require("path");
const electronInstaller = require("electron-winstaller");

const outputDirectory = path.join(
  __dirname,
  "release-builds",
  "release-builds-Win",
  "win-installer"
);

const options = {
  appDirectory: path.join(
    __dirname,
    "release-builds",
    "release-builds-Win",
    "sabzlearn-win32-x64"
  ), // Path to the folder containing your packaged Electron app
  outputDirectory: outputDirectory,
  authors: "engrmh",
  exe: "sabzlearn.exe",
  setupExe: "SabzLearnInstaller.exe",
  setupIcon: path.join(__dirname, "assets", "app-icon", "win", "installer.ico"),
  noMsi: true,
};

electronInstaller
  .createWindowsInstaller(options)
  .then(() => {
    console.log(`Installer created successfully at ${outputDirectory}`);
  })
  .catch((error) => {
    console.error(`Error creating installer: ${error.message}`);
  });
