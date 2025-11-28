const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveData: (data) => ipcRenderer.invoke('save-data', data),
  loadData: () => ipcRenderer.invoke('load-data'),
  exportFile: (csvData) => ipcRenderer.invoke('export-file', csvData),
  importFile: () => ipcRenderer.invoke('import-file')
});
