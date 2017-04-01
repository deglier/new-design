define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Toggle = (function () {
        function Toggle(toggleId, menuId, isActive) {
            this.toggleId = document.getElementById(toggleId);
            this.menuId = document.getElementById(menuId);
            this.changeClass = isActive ? isActive : 'is-active';
            this.addEvents(this.toggleId);
        }
        Toggle.prototype.addEvents = function (el) {
            var _this = this;
            el.addEventListener('click', function () { _this.toggle(); });
        };
        Toggle.prototype.toggle = function () {
            console.log("click");
            this.menuId.classList.toggle(this.changeClass);
        };
        return Toggle;
    }());
    exports.default = Toggle;
});
