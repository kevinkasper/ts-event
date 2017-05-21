"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventDispatcher = (function () {
    function EventDispatcher() {
        this.handlers = new Array();
    }
    EventDispatcher.prototype.Off = function (handler) {
        var index = this.handlers.indexOf(handler);
        if (index > -1) {
            this.handlers.splice(index, 1);
        }
    };
    EventDispatcher.prototype.On = function (handler) {
        if (handler !== undefined && handler !== null) {
            this.handlers.push(handler);
        }
    };
    EventDispatcher.prototype.Trigger = function (sender, args) {
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(sender, args);
        }
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;
