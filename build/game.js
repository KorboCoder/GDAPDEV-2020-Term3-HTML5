"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.go_list = new Array();
    }

    _createClass(Game, [{
        key: "addGO",
        value: function addGO(go) {
            this.stage.addChild(go);
            this.go_list.push(go);
        }
    }, {
        key: "initGame",
        value: function initGame() {
            this.canvas = document.getElementById("myCanvas");
            this.stage = new createjs.Stage("myCanvas");

            // more doc on addEventListener and other events you can listen to
            // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
            this.canvas.addEventListener("keyup", this.on_key_event.bind(this));
            this.canvas.addEventListener("keydown", this.on_key_event.bind(this));

            this.go_list.forEach(function (element) {
                element.init();
            }.bind(this));

            createjs.Ticker.addEventListener("tick", this.run.bind(this));
            createjs.Ticker.framerate = 300;
        }
    }, {
        key: "focus",
        value: function focus() {
            //force focus on canvas object
            this.canvas.setAttribute('tabindex', '0');
            this.canvas.focus();
        }
    }, {
        key: "run",
        value: function run(event) {

            var delta = event.delta;
            this.render();
            this.update(delta);
        }
    }, {
        key: "render",
        value: function render() {
            //clear everything before we render
            this.stage.update();
        }
    }, {
        key: "update",
        value: function update(delta) {
            this.go_list.forEach(function (element) {
                element.update(delta);
            });
        }
    }, {
        key: "on_key_event",
        value: function on_key_event(event) {
            this.go_list.forEach(function (element) {
                element.process_event(event);
            });
        }
    }]);

    return Game;
}();