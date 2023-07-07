import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
@Injectable({
  providedIn: 'root',
})
export class IpcService {
  ipc: IpcRenderer | undefined;
  constructor() {
    if (window.require) {
      try {
        this.ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron IPC was not loaded');
    }
  }

  public send(channel: string, ...args: any[]): void {
    if (!this.ipc) {
      console.log('Electron IPC was not loaded');
      return;
    }
    console.log('Sending to channel: ' + channel);
    this.ipc.send(channel, ...args);
  }
}
