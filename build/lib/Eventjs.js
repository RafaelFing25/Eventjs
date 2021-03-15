"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eventjs = /** @class */ (function () {
    function Eventjs() {
        var _this = this;
        this.events = {};
        this.on = function (event, cb) {
            _this.events[event] = _this.events[event] || [];
            _this.events[event].push(cb);
        };
        this.emmit = function (event) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            if (!_this.events[event])
                return;
            _this.events[event].forEach(function (cb) {
                cb.apply(void 0, rest);
            });
        };
        this.leave = function (event) {
            _this.events[event].splice(_this.events[event].indexOf(event), 1);
        };
    }
    return Eventjs;
}());
exports.default = Eventjs;
