const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const ipcMain = electron.ipcMain;

const fs = require("fs");
const path = require("path");
const os = require("os");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
    show: false,
    center: true,
    icon: path.join(__dirname, "dist/favicon.ico"),
  });
  mainWindow.maximize();
  mainWindow.show();

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  mainWindow.setMenu(null);
  mainWindow.resizable = false;

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on("print", (event, content) => {
  const win = new BrowserWindow();
  // Cargar el contenido HTML en la ventana de impresión
  const html = `<img src="${content}" />`;

  win.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);

  win.webContents.on("did-finish-load", () => {
    // Una vez que la ventana de impresión ha terminado de cargar, se llama a la función de impresión
    win.webContents.print(
      { silent: false, printBackground: true, showDialog: true },
      (success, errorType) => {
        if (!success) console.log(errorType);
      }
    );
  });
});
