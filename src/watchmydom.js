

/**
 * 
 * Library: watchmydom
 * Author: Muhammed Saifudeen (saif)
 * Pen Name: saifkeralite
 * https://twitter.com/saifKeralite
 * 
 */

/**
 * Core constructor to add methods
 * @param {object} element => DOM element
 */
var core_methods = {};
var watchMyDom = function (element) {
    this.element = document.querySelectorAll(element);
    this.config = { attributes: true, childList: true, subtree: true }
    this.observer = {}
    this.observation = []
    this.actionTree = []
    this.clear = true
}

/**
 * Initilizes observer,
 * Set-up the callback
 */
watchMyDom.prototype.watch = function (action) {
    var _this = this;
    this.observer = {};
    this.observer = new MutationObserver(function (mutationsList, observer) {

        if (_this.clear) {
            _this.observation = [];
        }

        for (const mutation of mutationsList) {
            if (mutation.type == 'childList') {
                _this.observation.push({ type: mutation.type, target: _this.element, addedNodes: mutation.addedNodes[0], removedNodes: mutation.removedNodes[0] })
            }
            else if (mutation.type === 'attributes') {
                _this.observation.push({ type: mutation.type, target: _this.element, addedAttributes: mutation.target })
            }
        }


        /**
         * Callback function with the observation output.
         */
        try { action({ output: _this.observation }, mutationsList); }
        catch (e) {
        }


    });

    /*
    * Observer stars here for each element.  
    */
    Array.prototype.forEach.call(this.element, function (el, i) {
        _this.observer.observe(el, _this.config);
    })
};

/**
 * to stop the observer.
 */
watchMyDom.prototype.stop = function () {
    this.observer.disconnect();
    this.observer = {};
}


