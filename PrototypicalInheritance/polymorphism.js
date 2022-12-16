function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focued");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
  this.render = function () {
    return `<select>
                  ${this.items
                    .map((item) => `<option>${item}</option>`)
                    .join(" ")}
              </select>`;
  };
}

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement();
const s = new HtmlSelectElement([1, 3, 4]);
