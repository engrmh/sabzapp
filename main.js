const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("node:path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, "icon", "win.ico"),
  });

  mainWindow.loadURL("https://sabzlearn.ir/");
  mainWindow.removeMenu();

  mainWindow.webContents.on("devtools-opened", () => {
    mainWindow.webContents.closeDevTools();
    mainWindow.close();
  });

  mainWindow.webContents.on("context-menu", (e) => {
    e.preventDefault();
  });

  globalShortcut.register("PrintScreen", () => {
    mainWindow.close();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
