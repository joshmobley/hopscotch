webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerComponent = (function () {
    function SpeakerComponent(dataService, router, activatedRoute) {
        this.dataService = dataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    SpeakerComponent.prototype.getImage = function (index) {
        if (this.data[index].acf.image_hover) {
            return this.data[index].acf.image_hover.sizes['800'];
        }
        else {
            return 'http://placehold.it/400x400';
        }
    };
    SpeakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slug = this.activatedRoute.snapshot.params.slug;
        this.dataService.getPosts('lineup?slug=' + this.slug).subscribe(function (res) {
            _this.data = res.json();
            console.log(_this.data);
        }, function (err) { return console.log(err); });
    };
    return SpeakerComponent;
}());
SpeakerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-speaker',
        template: __webpack_require__(177),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], SpeakerComponent);

var _a, _b, _c;
//# sourceMappingURL=speaker.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent(dataService) {
        this.dataService = dataService;
    }
    NewsComponent.prototype.formatDate = function (date) {
        var dateObj = new Date(date);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dateString = months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
        return dateString;
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts('posts').subscribe(function (res) {
            _this.data = res.json();
        }, function (err) { return console.log(err); });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__(178)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], NewsComponent);

var _a;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_single_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewsModule = (function () {
    function NewsModule() {
    }
    return NewsModule;
}());
NewsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                { path: 'news', component: __WEBPACK_IMPORTED_MODULE_4__news_component__["a" /* NewsComponent */] },
                { path: 'news/:slug', component: __WEBPACK_IMPORTED_MODULE_5__single_single_component__["a" /* SingleComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_5__single_single_component__["a" /* SingleComponent */]]
    })
], NewsModule);

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleComponent = (function () {
    function SingleComponent(dataService, activatedRoute) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
    }
    SingleComponent.prototype.formatDate = function (date) {
        var dateObj = new Date(date);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dateString = months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
        return dateString;
    };
    SingleComponent.prototype.getImage = function (index) {
        if (this.data[index].acf.image) {
            return '<img [src]="' + this.data[index].acf.image.sizes['1600'] + '" class="post__image" />';
        }
    };
    SingleComponent.prototype.checkSlug = function (slug) {
        if (slug === this.slug) {
            return true;
        }
    };
    SingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.slug = res.slug;
            _this.dataService.getPosts('posts?slug=' + _this.slug).subscribe(function (res) {
                _this.data = res.json();
                _this.author = _this.dataService.getUser(_this.data[0]['author']).subscribe(function (res) { return _this.author = res.json(); });
            }, function (err) { return console.log(err); });
            _this.dataService.getPosts('posts?per_page=5').subscribe(function (res) {
                _this.posts = res.json();
            });
        });
    };
    return SingleComponent;
}());
SingleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-single',
        template: __webpack_require__(179)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], SingleComponent);

var _a, _b;
//# sourceMappingURL=single.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.getImage = function () {
        var styles = {};
        styles['background-image'] = 'url(' + this.data['image'].sizes['1600'] + ')';
        return styles;
    };
    BannerComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    return BannerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], BannerComponent.prototype, "data", void 0);
BannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-banner',
        template: __webpack_require__(180)
    }),
    __metadata("design:paramtypes", [])
], BannerComponent);

//# sourceMappingURL=banner.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(181)
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(182)
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadlineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadlineComponent = (function () {
    function HeadlineComponent() {
    }
    HeadlineComponent.prototype.ngOnInit = function () {
    };
    return HeadlineComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], HeadlineComponent.prototype, "data", void 0);
HeadlineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-headline',
        template: __webpack_require__(183),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], HeadlineComponent);

//# sourceMappingURL=headline.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineupComponent = (function () {
    function LineupComponent(dataService) {
        this.dataService = dataService;
    }
    LineupComponent.prototype.getPhoto = function (slug) {
        /*this.dataService.getPosts('posts?slug=' + slug).subscribe(
          (res) => {
            console.log(res);
          }
        )*/
    };
    LineupComponent.prototype.ngOnInit = function () {
    };
    return LineupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], LineupComponent.prototype, "data", void 0);
LineupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-lineup',
        template: __webpack_require__(184),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], LineupComponent);

var _a;
//# sourceMappingURL=lineup.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromoComponent = (function () {
    function PromoComponent() {
    }
    PromoComponent.prototype.isEvenCount = function () {
        if (this.count % 2 == 0) {
            return true;
        }
    };
    PromoComponent.prototype.getImage = function () {
        var styles = {};
        styles['background-image'] = 'url(' + this.data['image'].sizes['800'] + ')';
        return styles;
    };
    PromoComponent.prototype.ngOnInit = function () {
        console.log('promo');
    };
    return PromoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], PromoComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], PromoComponent.prototype, "count", void 0);
PromoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-promo',
        template: __webpack_require__(185)
    }),
    __metadata("design:paramtypes", [])
], PromoComponent);

//# sourceMappingURL=promo.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsorsComponent = (function () {
    function SponsorsComponent() {
    }
    SponsorsComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    return SponsorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], SponsorsComponent.prototype, "data", void 0);
SponsorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-sponsors',
        template: __webpack_require__(186),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], SponsorsComponent);

//# sourceMappingURL=sponsors.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TicketsComponent = (function () {
    function TicketsComponent() {
    }
    TicketsComponent.prototype.ngOnInit = function () {
    };
    return TicketsComponent;
}());
TicketsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-tickets',
        template: __webpack_require__(187)
    }),
    __metadata("design:paramtypes", [])
], TicketsComponent);

//# sourceMappingURL=tickets.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketsModule = (function () {
    function TicketsModule() {
    }
    return TicketsModule;
}());
TicketsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tickets_component__["a" /* TicketsComponent */]]
    })
], TicketsModule);

//# sourceMappingURL=tickets.module.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'http://hopdesign.wpengine.com/wp-json/wp/v2/';
    }
    DataService.prototype.getPosts = function (path) {
        return this.http.get(this.url + path);
    };
    DataService.prototype.getUser = function (id) {
        return this.http.get(this.url + 'users/' + id);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div *ngFor=\"let post of data; let i = index;\">\n\n  <section class=\"promo--video\">\n    <div class=\"promo__content\">\n      <i href=\"#\" class=\"icon eye\">Play</i>\n      <h3>See the Experience</h3>\n    </div>\n  </section>\n\n  <section class=\"tiles\">\n\n    <div *ngFor=\"let tile of data[0].acf.experience; let i = index;\" [class]=\"getClasses(i)\" [ngStyle]=\"getImage(i)\">\n      <div class=\"tile__content\">\n        <h3 *ngIf=\"tile.title && !tile.image\">{{ tile.title }}</h3>\n        <div *ngIf=\"tile.text && !tile.image\" [innerHtml]=\"tile.text\"></div>\n        <div *ngIf=\"tile.button_label\" [innerHtml]=\"getButton(i)\"></div>\n      </div>\n    </div>\n\n\n  </section>\n\n  <section class=\"promo--headline\">\n    <div class=\"promo__content\">\n      <h3><a href=\"#\">More to Come...</a></h3>\n      <div class=\"button-container\">\n        <a href=\"#\" class=\"button\">In Other News</a>\n      </div>\n    </div>\n  </section>\n\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div *ngFor=\"let item of data; let i = index;\">\n  <app-banner *ngIf=\"item.acf_fc_layout === 'banner'\" [data]=\"item\"></app-banner>\n  <app-promo *ngIf=\"item.acf_fc_layout === 'promo'\" [data]=\"item\"></app-promo>\n  <app-lineup *ngIf=\"item.acf_fc_layout === 'lineup'\" [data]=\"item\"></app-lineup>\n  <app-headline *ngIf=\"item.acf_fc_layout === 'headline'\" [data]=\"item\"></app-headline>\n  <app-sponsors *ngIf=\"item.acf_fc_layout === 'sponsors'\" [data]=\"item\"></app-sponsors>\n</div>\n\n<!--\n<section class=\"promo\">\n    <img class=\"triplet-image\" src=\"http://placehold.it/800x800\" />\n    <div class=\"promo__content\">\n      <h3>2 Beautiful Days.<br/>42 Inspiring Speakers.<br/>Endless Inspiration.</h3>\n      <p>Breathe.</p>\n      <p>Slow down.</p>\n      <p>Challenge assumptions.</p>\n      <p>Push yourself.</p>\n      <p>Shape the future.</p>\n      <div class=\"button-container\">\n        <a href=\"#\" class=\"button\">Experience</a>\n      </div>\n    </div>\n</section>\n\n<section class=\"promo--headline\">\n    <h2>News</h2>\n    <div class=\"promo__content\">\n      <h3><a href=\"#\">Early Bird Tickets<br />On Sale Now</a></h3>\n      <div class=\"button-container\">\n        <a href=\"#\" class=\"button\">In Other News</a>\n      </div>\n    </div>\n</section>\n\n<section class=\"promo--grid\">\n    <h2>2017 Speakers</h2>\n    <div class=\"grid--between\">\n        <div class=\"grid__item\">\n            <img src=\"http://placehold.it/300x300\" />\n            <h5>Speaker Name</h5>\n            <p>Profession + Company</p>\n        </div>\n        <div class=\"grid__item\">\n            <img src=\"http://placehold.it/300x300\" />\n            <h5>Speaker Name</h5>\n            <p>Profession + Company</p>\n        </div>\n        <div class=\"grid__item\">\n            <img src=\"http://placehold.it/300x300\" />\n            <h5>Speaker Name</h5>\n            <p>Profession + Company</p>\n        </div>\n        <div class=\"grid__item\">\n            <img src=\"http://placehold.it/300x300\" />\n            <h5>Speaker Name</h5>\n            <p>Profession + Company</p>\n        </div>\n    </div>\n    <div class=\"button-container\">\n      <a href=\"#\" class=\"button\">See Full Lineup</a>\n    </div>\n</section>\n\n<section class=\"promo--right\">\n    <img class=\"triplet-image\" src=\"http://placehold.it/800x800\" />\n    <h2>Pricing</h2>\n    <div class=\"promo__content\">\n      <h3>Generate New Insights.<br />Learn New Tools.<br />Discover the Future.</h3>\n      <h4>Register Now</h4>\n      <dl>\n          <dt>Early Bird</dt>\n          <dd>$175</dd>\n          <dt>Regular Price</dt>\n          <dd>$225</dd>\n          <dt>Week Of</dt>\n          <dd>$275</dd>\n      </dl>\n      <div class=\"button-container\">\n        <a href=\"#\" class=\"button\">Buy Your Ticket</a>\n      </div>\n    </div>\n</section>\n\n<section class=\"promo--grid\">\n    <h2>Sponsors</h2>\n    <div class=\"grid\">\n      <a href=\"#\" class=\"grid__item\"><img src=\"\" /></a>\n      <a href=\"#\" class=\"grid__item\"><img src=\"\" /></a>\n    </div>\n    <div class=\"button-container\">\n      <a href=\"#\" class=\"button\">Be a Sponsor</a>\n    </div>\n</section>\n-->\n<app-footer></app-footer>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1 class=\"page-title\">Lineup</h1>\n\n<section class=\"promo--grid\">\n  <div class=\"grid\">\n    <!--<div class=\"grid__item--large\">\n        <img src=\"http://placehold.it/300x300\" />\n        <h5>Speaker Name</h5>\n        <p>Profession + Company</p>\n    </div>\n    <div class=\"grid__item--med\">\n        <img src=\"http://placehold.it/300x300\" />\n        <h5>Speaker Name</h5>\n        <p>Profession + Company</p>\n    </div>\n    <div class=\"grid__item--med\">\n        <img src=\"http://placehold.it/300x300\" />\n        <h5>Speaker Name</h5>\n        <p>Profession + Company</p>\n    </div>-->\n    <a *ngFor=\"let item of data; let i = index;\" [routerLink]=\"['/lineup/' + item.slug]\" class=\"grid__item\">\n        <div class=\"grid__image-container\">\n          <img class=\"grid__image\" [src]=\"getImage(i)\" />\n          <img class=\"grid__image--hover\" [src]=\"getHoverImage(i)\" />\n        </div>\n        <h5>{{ item.title.rendered }}</h5>\n        <p>{{ item.acf.job_title }} <i class=\"icon square--small\">-</i> {{ item.acf.organization }}</p>\n    </a>\n  </div>\n</section>\n<!--\n<h2 class=\"page-title\">Past Speakers</h2>\n\n<section class=\"promo--grid\">\n  <div class=\"grid--simple\">\n    <div class=\"grid__item\">\n        <h5>Speaker Name</h5>\n    </div>\n  </div>\n</section>\n-->\n<app-footer></app-footer>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <div *ngFor=\"let speaker of data; let i = index;\" class=\"profile\">\n    <a routerLink=\"/lineup\" class=\"back-link\">&larr; back to lineup</a>\n    <div class=\"profile__content\">\n      <div class=\"profile__header\">\n        <h1>{{ speaker.title.rendered }}</h1>\n        <h2>{{ speaker.acf.job_title }} <i class=\"icon square\">-</i> {{ speaker.acf.organization }}</h2>\n      </div>\n      <img [src]=\"getImage(i)\" class=\"profile__image\" />\n      <div [innerHtml]=\"speaker.acf.bio\"></div>\n      <a href=\"{{ speaker.acf.website }}\" class=\"button\" target=\"_blank\">Website</a>\n    </div>\n  </div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1 class=\"page-title--floating\">News</h1>\n\n<section class=\"news-list\">\n\n  <div class=\"news-list__item--featured\">\n    <h3><a href=\"#\">Primary News Headline</a></h3>\n  </div>\n\n  <div *ngFor=\"let item of data; let i = index;\" class=\"news-list__item\">\n    <p class=\"date\">{{ formatDate(item.date) }}</p>\n    <h3><a [routerLink]=\"['/news/' + item.slug ]\">{{ item.title.rendered }}</a></h3>\n    <p [innerHtml]=\"item.excerpt.rendered\"></p>\n  </div>\n\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n  <div *ngFor=\"let item of data; let i = index;\" class=\"post\">\n    <a routerLink=\"/news\" class=\"back-link\">&larr; back to news</a>\n          {{ getImage(i) }}\n      <img src=\"http://placehold.it/1600x800\" class=\"post__image\" />\n\n    <div class=\"post__content\">\n      <div class=\"post__header\">\n        <h1>{{ item.title.rendered }}</h1>\n        <p class=\"post__meta\">{{ author.name }} // {{ formatDate(item.date) }}</p>\n      </div>\n      <div [innerHtml]=\"item.content.rendered\"></div>\n      <div>\n        <a href=\"#\" class=\"button\" target=\"_blank\">Buy Tickets</a>\n        <a routerLink=\"/news\" class=\"button\">Back to News</a>\n      </div>\n    </div>\n\n    <div class=\"post__sidebar\">\n      <h2>In Other News</h2>\n\n      <div *ngFor=\"let post of posts; let i = index;\" class=\"post__sidebar-item\">\n        <h3><a [routerLink]=\"['/news/' + post.slug ]\" routerLinkActive=\"is-active\">{{ post.title.rendered }}</a></h3>\n        <p>{{ formatDate(post.date) }}</p>\n      </div><!--__sidebar-item-->\n    </div><!--__sidebar-->\n  </div><!--.post-->\n<app-footer></app-footer>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<section class=\"banner\">\n    <h1 class=\"hop-board\">\n      <i class=\"h\">H</i>\n      <i class=\"o\">o</i>\n      <i class=\"p\">p</i>\n      <i class=\"s\">s</i>\n      <i class=\"c\">c</i>\n      <i class=\"o2\">o</i>\n      <i class=\"t\">t</i>\n      <i class=\"c2\">c</i>\n      <i class=\"h2\">h</i>\n    </h1>\n    <h2><span>September 7-8, 2017</span> <span>Raleigh, NC</span></h2>\n    <div class=\"banner__image\" [ngStyle]=\"getImage()\"></div>\n    <p [innerHTML]=\"data.text\"></p>\n    <div class=\"button-container\">\n      <a href=\"{{ data.button_link }}\" class=\"button--light\">{{ data.button_label }}</a>\n    </div>\n</section>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = " <section class=\"mailing-list\">\n    <p>\n        <strong>Don't miss the adventure.</strong>\n        Subscribe to our mailing list.\n    </p>\n    <form>\n        <label for=\"email\">Email</label>\n        <input type=\"email\" name=\"email\" />\n        <input type=\"submit\" value=\"Subscribe\" />\n    </form>\n</section>\n\n<section class=\"promo--photo\">\n  <div class=\"promo__content\">\n    <blockquote>\n        <div class=\"quote\">The energy, passion, and enthusiasm that I witnessed has now been rekindled in me.</div> <span>2016 Hopscotcher</span>\n    </blockquote>\n    <p>Sept 7-8, 2017 <i class=\"icon line\">|</i> Raleigh, NC</p>\n    <div class=\"button-container\">\n      <a href=\"#\" class=\"button--light\">Buy Tickets</a>\n    </div>\n  </div>\n  <div class=\"promo__image\" style=\"background-image:url(http://placehold.it/1600x400)\"></div>\n</section>\n\n<footer id=\"site-footer\">\n  <i class=\"icon h\">Hopscotch</i>\n    <nav class=\"footer-nav\">\n      <ul>\n          <li><a href=\"{{ path }}/experience\">Experience</a></li>\n          <li><a href=\"{{ path }}/lineup\">Lineup</a></li>\n          <li><a href=\"{{ path }}/news\">News</a></li>\n          <li><a href=\"{{ path }}/travel\">Travel</a></li>\n          <li><a href=\"{{ path }}/contact\">Contact</a></li>\n          <li><a href=\"{{ path }}/tickets\">Buy Tickets</a></li>\n      </ul>\n    </nav>\n    <p>Produced by New Kind and Hopscotch Music Festival</p>\n    <img src=\"http://placehold.it/300x100\" />\n    <span>+</span>\n    <img src=\"http://placehold.it/300x100\" />\n    <ul class=\"social-links\">\n        <li><a href=\"#\">Facebook</a></li>\n        <li><a href=\"#\">Twitter</a></li>\n        <li><a href=\"#\">Instagram</a></li>\n    </ul>\n    <p class=\"copyright\">&copy; 2017. Site design by <a href=\"http://newkind.com\" target=\"_blank\">New Kind</a>.</p>\n</footer>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<header>\n    <a class=\"logo\" routerLink=\"/\"><i class=\"icon h\">Hopscotch</i> <strong>Design</strong> Festival</a>\n    <nav class=\"site-nav\" v-bind:class=\"{ 'is-visible': menuOpen }\">\n        <ul>\n            <li><a routerLink=\"/experience\">Experience</a></li>\n            <li><a routerLink=\"/lineup\">Lineup</a></li>\n            <li><a routerLink=\"/news\">News</a></li>\n            <li><a routerLink=\"/contact\">Contact</a></li>\n            <li><a routerLink=\"/tickets\"><span>Buy Tickets</span></a></li>\n        </ul>\n    </nav>\n    <span class=\"nav-toggle\" v-bind:class=\"{ 'is-fixed': menuOpen }\">\n      <a href=\"#site-footer\" v-on:click=\"toggleMenu\">Menu</a>\n    </span>\n</header>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<section class=\"promo--headline\">\n    <h2>{{ data.header }}</h2>\n    <div class=\"promo__content\">\n      <h3><a href=\"{{ data.title_link }}\" [innerHtml]=\"data.title\"></a></h3>\n      <div class=\"button-container\">\n        <a href=\"{{ data.button_link }}\" class=\"button\">{{ data.button_label }}</a>\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<section class=\"promo--grid\">\n    <h2>{{ data.header }}</h2>\n    <div class=\"grid--between\">\n        <div *ngFor=\"let item of data.speakers\" class=\"grid__item\">\n            <img [src]=\"getPhoto(item.speaker.post_name)\" />\n            <h5>{{ item.speaker.post_title }}</h5>\n            <p>{{ item.speaker}} + Company</p>\n        </div>\n    </div>\n    <div class=\"button-container\">\n      <a href=\"{{ data.button_link }}\" class=\"button\">{{ data.button_label }}</a>\n    </div>\n</section>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<section class=\"promo\" [class.promo--right]=\"isEvenCount()\">\n    <div class=\"triplet-image\" [ngStyle]=\"getImage()\"></div>\n    <div class=\"promo__content\">\n      <h3 [innerHtml]=\"data.title\"></h3>\n      <div [innerHtml]=\"data.text\"></div>\n      <div class=\"button-container\">\n        <a href=\"{{ data.button_link }}\" class=\"button\">{{ data.button_label }}</a>\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<section class=\"promo--grid\">\n    <h2>Sponsors</h2>\n    <div class=\"grid\">\n      <a href=\"#\" class=\"grid__item\"><img src=\"\" /></a>\n    </div>\n    <div class=\"button-container\">\n      <a href=\"#\" class=\"button\">Be a Sponsor</a>\n    </div>\n</section>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<p>\n  tickets works!\n</p>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__banner_banner_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__promo_promo_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lineup_lineup_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__headline_headline_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sponsors_sponsors_component__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__banner_banner_component__["a" /* BannerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__promo_promo_component__["a" /* PromoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__lineup_lineup_component__["a" /* LineupComponent */],
            __WEBPACK_IMPORTED_MODULE_8__headline_headline_component__["a" /* HeadlineComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sponsors_sponsors_component__["a" /* SponsorsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__banner_banner_component__["a" /* BannerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__promo_promo_component__["a" /* PromoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__lineup_lineup_component__["a" /* LineupComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sponsors_sponsors_component__["a" /* SponsorsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__headline_headline_component__["a" /* HeadlineComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(113);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(173)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__experience_experience_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lineup_lineup_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__news_news_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tickets_tickets_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__experience_experience_module__["a" /* ExperienceModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__lineup_lineup_module__["a" /* LineupModule */],
            __WEBPACK_IMPORTED_MODULE_8__news_news_module__["a" /* NewsModule */],
            __WEBPACK_IMPORTED_MODULE_9__tickets_tickets_module__["a" /* TicketsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = (function () {
    function ExperienceComponent(dataService) {
        this.dataService = dataService;
    }
    ExperienceComponent.prototype.getButton = function (index) {
        var item = this.data[0]['acf'].experience[index];
        if (item.button_label && (item.width == 'two')) {
            return '<a class="button--white" href="' + item.button_url + '">' + item.button_label + '</a>';
        }
        else {
            return '<a class="button" href="' + item.button_url + '">' + item.button_label + '</a>';
        }
    };
    ExperienceComponent.prototype.getImage = function (index) {
        var item = this.data[0]['acf'].experience[index];
        var styles = {};
        if (item.image) {
            styles['background-image'] = 'url(' + item.image.sizes['800'] + ')';
            return styles;
        }
    };
    ExperienceComponent.prototype.getClasses = function (index) {
        var item = this.data[0]['acf'].experience[index];
        var classList = [];
        if (item.button_label && !item.title) {
            classList.push('tile--button');
        }
        if (item.width == 'two') {
            classList.push('tile--med');
        }
        if (classList.length == 0) {
            classList.push('tile--small');
        }
        classList.join(' ');
        return classList;
    };
    ExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts('pages?slug=experience&d').subscribe(function (res) {
            _this.data = res.json();
            console.log(_this.data);
        });
    };
    return ExperienceComponent;
}());
ExperienceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-experience',
        template: __webpack_require__(174)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ExperienceComponent);

var _a;
//# sourceMappingURL=experience.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experience_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExperienceModule = (function () {
    function ExperienceModule() {
    }
    return ExperienceModule;
}());
ExperienceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                { path: 'experience', component: __WEBPACK_IMPORTED_MODULE_4__experience_component__["a" /* ExperienceComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__experience_component__["a" /* ExperienceComponent */]]
    })
], ExperienceModule);

//# sourceMappingURL=experience.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.promoCounter = 0;
    }
    HomeComponent.prototype.promoCounterInc = function () {
        this.promoCounter++;
        console.log('ran' + this.promoCounter);
        return this.promoCounter;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts('pages?slug=home&d').subscribe(function (res) {
            console.log(res);
            res = res.json();
            _this.data = res[0].acf.content;
        }, function (err) { return console.log(err); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(175)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineupComponent = (function () {
    function LineupComponent(dataService) {
        this.dataService = dataService;
    }
    LineupComponent.prototype.getImage = function (index) {
        if (this.data[index].acf.image) {
            return this.data[index].acf.image.sizes['400'];
        }
        else {
            return 'http://placehold.it/400x400';
        }
    };
    LineupComponent.prototype.getHoverImage = function (index) {
        if (this.data[index].acf.image_hover) {
            return this.data[index].acf.image_hover.sizes['400'];
        }
        else {
            return 'http://placehold.it/400x400';
        }
    };
    LineupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getPosts('lineup?orderby=title&order=asc&per_page=100&a').subscribe(function (res) {
            res = res.json();
            _this.data = res;
            console.log(_this.data);
        }, function (err) { return console.log(err); });
    };
    return LineupComponent;
}());
LineupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-lineup',
        template: __webpack_require__(176)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], LineupComponent);

var _a;
//# sourceMappingURL=lineup.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lineup_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_speaker_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LineupModule = (function () {
    function LineupModule() {
    }
    return LineupModule;
}());
LineupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                { path: 'lineup', component: __WEBPACK_IMPORTED_MODULE_4__lineup_component__["a" /* LineupComponent */] },
                { path: 'lineup/:slug', component: __WEBPACK_IMPORTED_MODULE_5__speaker_speaker_component__["a" /* SpeakerComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__lineup_component__["a" /* LineupComponent */],
            __WEBPACK_IMPORTED_MODULE_5__speaker_speaker_component__["a" /* SpeakerComponent */]
        ]
    })
], LineupModule);

//# sourceMappingURL=lineup.module.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map