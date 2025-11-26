// controllers/scroll_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("scroll controller connected");
    if (!this.element) return;
    this.observer = new MutationObserver(() => {
      requestAnimationFrame(() => this.scrollToBottom());
    });
    this.observer.observe(this.element, {
      childList: true,
      subtree: true,
      characterData: false,
    });
    requestAnimationFrame(() => this.scrollToBottom());
  }
  disconnect() {
    console.log("scroll controller disconnected");
    if (this.observer) this.observer.disconnect();
  }
  scrollToBottom() {
    if (!this.element) return;
    this.element.scrollTop = this.element.scrollHeight;
  }
}
