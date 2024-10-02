const { app, BrowserWindow, globalShortcut, screen } = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV === "development"; // Detectar si es desarrollo

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // Ventana sin bordes
    transparent: true, // Hacer la ventana transparente
    alwaysOnTop: true, // Mantener la ventana siempre encima de otras
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"), // Si tienes un script de preload
      nodeIntegration: true,
      contextIsolation: false,
      allowRunningInsecureContent: true,
      webSecurity: false,
      scrollbars: false,
      nodeIntegration: true,
    },
  });
  win.maximize();

  // win.loadURL("http://localhost:3000");
  // win.webContents.openDevTools();
  win.loadURL('https://phasmo-guia.firebaseapp.com');
  win.show(); // Mostrar la ventana de inmediato
}

app.whenReady().then(() => {
  createWindow(); // Crear y mostrar la ventana de inmediato

  // Shortcut para mostrar/ocultar ventana
  globalShortcut.register("Control+Shift+M", () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
      win.maximize();
      win.setAlwaysOnTop(true);
      setTimeout(() => {
        win.setFullScreen(true);
        win.focus();
      }, 100);
    }
  });

  // Shortcut para cerrar la aplicación
  globalShortcut.register("Control+C", () => {
    if (win !== undefined) {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
