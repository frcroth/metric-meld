import { UI } from "./ui";

const ui = new UI();

declare global {
  interface Window {
    ui: UI;
  }
}
window.ui = ui;
window.ui.init();
