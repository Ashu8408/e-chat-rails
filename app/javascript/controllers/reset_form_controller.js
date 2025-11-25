import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form"]
  connect(){
    console.log("reset form connected")
  }
  reset() {
    console.log("Reset triggered");
    this.formTarget.reset();
  }
}
