const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1600, height: 1000,
    minWidth:350, minHeight: 300,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })

  // load the dist folder from Angular
  mainWindow.loadURL(path.join(__dirname, '/dist/index.html'));


  // win.webContents.openDevTools()
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);
// on macOS, closing the window doesn't quit the app

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
