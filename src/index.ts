import { UI } from './ui';

let ui = new UI();

declare global {
  interface Window {
    ui: UI;
  }
}
window.ui = ui;
window.ui.init();
