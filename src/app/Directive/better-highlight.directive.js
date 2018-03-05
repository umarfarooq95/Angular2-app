"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BetterHighlightDirective = (function () {
    function BetterHighlightDirective(eleRef, renderer) {
        this.eleRef = eleRef;
        this.renderer = renderer;
    }
    BetterHighlightDirective.prototype.ngOnInit = function () {
        this.backgroundColor = this.defaultColor;
        //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    };
    BetterHighlightDirective.prototype.mouseover = function (eventData) {
        //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','violet')
        this.backgroundColor = this.highlightColor;
    };
    BetterHighlightDirective.prototype.mouseleave = function (eventData) {
        //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
        this.backgroundColor = this.defaultColor;
    };
    __decorate([
        core_1.Input()
    ], BetterHighlightDirective.prototype, "defaultColor");
    __decorate([
        core_1.Input('appBetterHighlight')
    ], BetterHighlightDirective.prototype, "highlightColor");
    __decorate([
        core_1.HostBinding('style.backgroundColor')
    ], BetterHighlightDirective.prototype, "backgroundColor");
    __decorate([
        core_1.HostListener('mouseenter')
    ], BetterHighlightDirective.prototype, "mouseover");
    __decorate([
        core_1.HostListener('mouseleave')
    ], BetterHighlightDirective.prototype, "mouseleave");
    BetterHighlightDirective = __decorate([
        core_1.Directive({
            selector: '[appBetterHighlight]'
        })
    ], BetterHighlightDirective);
    return BetterHighlightDirective;
}());
exports.BetterHighlightDirective = BetterHighlightDirective;
//# sourceMappingURL=better-highlight.directive.js.map