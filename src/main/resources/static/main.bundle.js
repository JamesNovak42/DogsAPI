webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: rgb(52, 100, 148);\r\n    font-family: Arial, Helvetica, sans-serif\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h1>Dog Breeds</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <app-dog (showDogEvent)=\"breedImageUrl=$event\"></app-dog>\r\n        </div>\r\n        <div class=\"col\">\r\n            <app-display [imageUrl]=\"breedImageUrl\"></app-display>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.breedImageUrl = '';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dog_dog_component__ = __webpack_require__("./src/app/components/dog/dog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dog_service__ = __webpack_require__("./src/app/services/dog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_display_display_component__ = __webpack_require__("./src/app/components/display/display.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_dog_dog_component__["a" /* DogComponent */], __WEBPACK_IMPORTED_MODULE_7__components_display_display_component__["a" /* DisplayComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_dog_service__["a" /* DogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/display/display.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n    /*background-color: dimgray;*/\r\n}"

/***/ }),

/***/ "./src/app/components/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"img-fluid\" src=\"{{imageUrl}}\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
    }
    DisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], DisplayComponent.prototype, "imageUrl", void 0);
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-display',
            template: __webpack_require__("./src/app/components/display/display.component.html"),
            styles: [__webpack_require__("./src/app/components/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/dog/dog.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nul {\r\n    max-height: 80vh;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n}\r\n\r\nli.a-dog-name {\r\n    cursor: pointer;\r\n}\r\n\r\nli.a-dog-name:hover {\r\n    color: gold;\r\n}\r\n\r\nli.a-dog-name.selected {\r\n    color: orange;\r\n}"

/***/ }),

/***/ "./src/app/components/dog/dog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form (submit)=\"applyFilter(filterString.value)\">\n        <div>\n            <label for=\"dogs-filter\">\n                Search Filter:\n            </label>\n            <div class=\"input-group\">\n                <input class=\"form-control\" type=\"text\" name=\"dogs-filter\" placeholder=\"Enter Breed\" #filterString>\n                <div class=\"input-group-append\">\n                    <button class=\"btn\" type=\"submit\">Apply</button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"row\">\n    <ul class=\"list-group\">\n        <li class=\"list-group-item a-dog-name\" [class.selected]=\"isDogSelected(dog)\" *ngFor=\"let dog of dogs\" (click)=\"dogSelected(dog)\">\n            <span>{{dog.breed | titlecase}}</span>\n            <div *ngIf=\"dog === selectedDog && dog.hasSubBreeds()\">\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item a-dog-name\" *ngFor=\"let sub of dog.subBreeds\" (click)=\"subBreedClick(dog,sub); $event.stopPropagation()\">\n                        <span>{{sub | titlecase}}</span>\n                    </li>\n                </ul>\n            </div>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/dog/dog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dog_service__ = __webpack_require__("./src/app/services/dog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DogComponent = /** @class */ (function () {
    function DogComponent(dogService) {
        this.dogService = dogService;
        this.showDogEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    DogComponent.prototype.ngOnInit = function () {
        this.dogs = this.dogService.getAllBreeds();
    };
    DogComponent.prototype.showDog = function (res) {
        console.log('in showDog()');
        if (res.hasOwnProperty('message')) {
            this.showDogEvent.emit(res['message'][0]);
        }
    };
    DogComponent.prototype.applyFilter = function (filterString) {
        console.log('applyFilter(' + filterString + ')');
        this.dogs = this.dogService.filterBreed(filterString.toLowerCase());
    };
    DogComponent.prototype.dogSelected = function (dog) {
        var _this = this;
        this.selectedDog = (dog !== this.selectedDog) ? dog : null;
        if (this.selectedDog && !this.selectedDog.hasSubBreeds()) {
            this.dogService.getBreed(this.selectedDog.breed)
                .subscribe(function (res) { return _this.showDog(res); });
        }
        console.log(dog.breed + ', breeds: [' + dog.subBreeds + ']');
    };
    DogComponent.prototype.isDogSelected = function (dog) {
        return this.selectedDog === dog;
    };
    DogComponent.prototype.subBreedClick = function (dog, subBreed) {
        var _this = this;
        this.dogService.getSubBreed(dog.breed, subBreed)
            .subscribe(function (res) { return _this.showDog(res); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], DogComponent.prototype, "showDogEvent", void 0);
    DogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dog',
            template: __webpack_require__("./src/app/components/dog/dog.component.html"),
            styles: [__webpack_require__("./src/app/components/dog/dog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dog_service__["a" /* DogService */]])
    ], DogComponent);
    return DogComponent;
}());



/***/ }),

/***/ "./src/app/models/dog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dog; });
var Dog = /** @class */ (function () {
    function Dog(breed, subBreeds) {
        this.breed = breed;
        this.subBreeds = subBreeds;
    }
    ;
    Dog.prototype.hasSubBreeds = function () {
        return this.subBreeds.length > 0;
    };
    Dog.prototype.hasBreedFragment = function (breedStr) {
        var result = false;
        if (this.breed.includes(breedStr))
            result = true;
        else if (this.hasSubBreeds()) {
            result = this.subBreeds.some(function (sub) { return sub.includes(breedStr); });
        }
        return result;
    };
    return Dog;
}());



/***/ }),

/***/ "./src/app/services/dog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_dog__ = __webpack_require__("./src/app/models/dog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DogService = /** @class */ (function () {
    function DogService(http) {
        var _this = this;
        this.http = http;
        // TODO: pull this into a config/environment file
        this.breedsApiFrag = '/api/breeds';
        this.imgApiFrag = '/api/images/';
        this.breeds = [];
        this.http.get(this.breedsApiFrag)
            .subscribe(function (res) { return _this.arrayifyResponse(res); });
    }
    DogService.prototype.arrayifyResponse = function (response) {
        if (!response.hasOwnProperty("message")) {
            alert("error, no breeds fetched!");
            return;
        }
        var breedsObj = response['message'];
        for (var breed in breedsObj) {
            var dogObj = new __WEBPACK_IMPORTED_MODULE_2__models_dog__["a" /* Dog */](breed, breedsObj[breed]);
            this.breeds.push(dogObj);
        }
    };
    DogService.prototype.getAllBreeds = function () {
        return this.breeds;
    };
    DogService.prototype.getBreed = function (breed) {
        return this.http.get(this.imgApiFrag + breed);
    };
    DogService.prototype.getSubBreed = function (breed, subBreed) {
        return this.http.get(this.imgApiFrag + breed + "/" + subBreed);
    };
    DogService.prototype.filterBreed = function (breedStr) {
        return this.breeds.filter(function (breed) { return breed.hasBreedFragment(breedStr); });
    };
    DogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DogService);
    return DogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    urls: {
        "allBreedsUrl": "/api/breeds/list/all",
        "breedImagesUrl": "/api/breeds/images/"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map