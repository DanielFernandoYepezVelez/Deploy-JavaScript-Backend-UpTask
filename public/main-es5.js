function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/pages-routing.module */
    "./src/app/pages/pages-routing.module.ts");
    /* harmony import */


    var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page404/page404.component */
    "./src/app/page404/page404.component.ts");
    /* Routing Modules(childs) */

    /* Components */


    var routes = [
    /* path: '/dashboard' PagesRouting */

    /* path: '/auth' AuthRouting */
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__["Page404Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _pages_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'FrontendUpTaskTypeScript';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/pages.module */
    "./src/app/pages/pages.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page404/page404.component */
    "./src/app/page404/page404.component.ts");
    /* Routing Modules */

    /* Component Modules */

    /* Components */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"]],
        imports: [_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"]],
          imports: [_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__["PagesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* Components */


    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* Components */


    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_small_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Correo Electr\xF3nico No V\xE1lido");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Correo Electr\xF3nico Obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contrase\xF1a No V\xE1lida");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Contrase\xF1a Obligatoria");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/register"];
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, ngZone, formBuilder, loginService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.ngZone = ngZone;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        /**
         * Generals Logics Properties
         */

        this.validateOne = false;
        this.validateTwo = false;
        this.validateFour = false;
        this.validateThree = false;
        this.loginFormDataBuild();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Array.from(this.inputs = document.querySelectorAll('.main__form input'));
          Array.from(this.labels = document.querySelectorAll('.main__form label'));
          this.emailPositionInitialRemember();
          /* Prepara El Boton Con Su Id Para Iniciar La Authenticación De Google(IMPORTANTE!!) */

          this.startApp();
        }
        /**
         * Input Field Email Position Inital Remember
         */

      }, {
        key: "emailPositionInitialRemember",
        value: function emailPositionInitialRemember() {
          if (this.formForma.get('email').value) {
            this.fieldValueTransitionLabel(this.formForma.get('email').value, 0, 'label__finally');
          }
        }
        /**
         * Input Field Event DOM
         */

      }, {
        key: "input",
        value: function input(e) {
          var value = e.target.value;
          var attribute = e.target.getAttribute('type');

          switch (attribute) {
            case 'email':
              this.fieldValueTransitionLabel(value, 0, 'label__finally');
              break;

            case 'password':
              this.fieldValueTransitionLabel(value, 1, 'label__finally');
              break;
          }
        }
        /**
         * Login Form Transition Label
         */

      }, {
        key: "fieldValueTransitionLabel",
        value: function fieldValueTransitionLabel(value, index, classCss) {
          if (value.length) {
            this.labels[index].classList.add(classCss);
          } else {
            this.labels[index].classList.remove(classCss);
          }
        }
        /**
         * Login Form Data Build (ANGULAR)
         */

      }, {
        key: "loginFormDataBuild",
        value: function loginFormDataBuild() {
          this.formForma = this.formBuilder.group({
            email: [localStorage.getItem('email') || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            remember: [false]
          });
        }
        /**
         * Login Form Get Data And Send To Server
         */

      }, {
        key: "loginFormDataSaved",
        value: function loginFormDataSaved() {
          var _this = this;

          if (this.formForma.status === 'INVALID' || this.formForma.dirty === false || this.formForma.valid === false) {
            Object.values(this.formForma.controls).forEach(function (controlsField, index) {
              if (controlsField.status === 'INVALID' || controlsField.valid === false) {
                _this.inputs[index].classList.add('borderInput');

                _this.validateTwo = _this.generalConditional('email');
                _this.validateFour = _this.generalConditional('password');
              }
            });
            return;
          }
          /* Response Backend */


          this.loginService.login(this.formForma.value).subscribe(function () {
            _this.savedRememberLocalStorage();

            _this.router.navigateByUrl('/dashboard');
          }, function (error) {
            return _this.showAlertError(error.error.error);
          });
        }
        /**
         * Guardar Email En El LocalStorage Si El Usuario Lo Desea
         */

      }, {
        key: "savedRememberLocalStorage",
        value: function savedRememberLocalStorage() {
          if (this.formForma.get('remember').value) {
            localStorage.setItem('email', this.formForma.get('email').value);
          } else {
            localStorage.removeItem('email');
          }
        }
        /**
         * Mostrar Mensaje De Error Si Existe En La Respuesta Del Backend
         */

      }, {
        key: "showAlertError",
        value: function showAlertError(message) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          });
        }
        /**
         * Login Form Validate Every Input Value
         */

      }, {
        key: "validateInput",
        value: function validateInput(inputName) {
          switch (inputName) {
            case 'email':
              if (this.generalConditionalThird('email')) {
                this.validateOne = false;
                this.validateTwo = false;
                this.inputs[0].classList.remove('borderInput');
              }

              if (!this.validateTwo) {
                this.validateOne = this.generalConditionalSecond('email');

                if (this.validateOne) {
                  this.inputs[0].classList.add('borderInput');
                }
              }

              break;

            case 'password':
              if (this.generalConditionalThird('password')) {
                this.validateThree = false;
                this.validateFour = false;
                this.inputs[1].classList.remove('borderInput');
              }

              if (!this.validateFour) {
                this.validateThree = this.generalConditionalSecond('password');

                if (this.validateThree) {
                  this.inputs[1].classList.add('borderInput');
                }
              }

              break;
          }
        }
        /**
         * Big And General Conditional One (VALIDATION INPUT)
         */

      }, {
        key: "generalConditional",
        value: function generalConditional(inputName) {
          return this.formForma.get(inputName).status === 'INVALID' && !this.formForma.get(inputName).dirty && this.formForma.get(inputName).untouched && !this.formForma.get(inputName).valid;
        }
        /**
         * Big And General Conditional Second (VALIDATION INPUT)
         */

      }, {
        key: "generalConditionalSecond",
        value: function generalConditionalSecond(inputName) {
          return this.formForma.get(inputName).status === 'INVALID' && this.formForma.get(inputName).dirty && !this.formForma.get(inputName).valid;
        }
        /**
         * Big And General Conditional Third (VALIDATION INPUT)
         */

      }, {
        key: "generalConditionalThird",
        value: function generalConditionalThird(inputName) {
          return this.formForma.get(inputName).status === 'VALID' && this.formForma.get(inputName).valid;
        }
        /**
         * Frontend Google Sign In Logic (Boton Personalizado)
         * Las Arrow Functions Las Implemento Para Que No Cambien El This(Contexto) De Las Funciones
         */

      }, {
        key: "startApp",
        value: function startApp() {
          var _this2 = this;

          gapi.load('auth2', function () {
            _this2.auth2 = gapi.auth2.init({
              client_id: '24949782543-ks08iocf3mi3tko0gn8ilpgspmb5rtcg.apps.googleusercontent.com',
              cookiepolicy: 'single_host_origin'
            });

            _this2.attachSignin(document.getElementById('googleBtn'));
          });
        }
      }, {
        key: "attachSignin",
        value: function attachSignin(element) {
          var _this3 = this;

          this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var _googleUser$getAuthRe = googleUser.getAuthResponse(),
                id_token = _googleUser$getAuthRe.id_token;

            _this3.loginService.loginGoogle(id_token).subscribe(function () {
              _this3.ngZone.run(function () {
                _this3.router.navigateByUrl('/dashboard');
              });
            });
          }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 40,
      vars: 8,
      consts: [[1, "article__auth--container", "animated", "fadeIn", "fast"], [1, "auth__container"], [1, "auth__header"], [1, "auth__figure"], ["src", "./assets/image/logo.png", "alt", "logoauth", 1, "auth__image"], [1, "auth__paragraph"], [1, "main__auth"], [1, "main__h2"], ["autocomplete", "off", 1, "main__form", 3, "formGroup", "ngSubmit"], [1, "campo"], ["type", "email", "formControlName", "email", 3, "change", "input"], [4, "ngIf"], ["type", "password", "formControlName", "password", 3, "change", "input"], ["type", "submit"], [1, "main__remember"], [3, "formGroup"], ["type", "checkbox", "formControlName", "remember"], [1, "main__auth2"], ["id", "googleBtn"], [1, "fab", "fa-google"], [1, "register"], [3, "routerLink"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figure", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "UpTask - Administrador De Proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "article", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Inicia Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
            return ctx.loginFormDataSaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_13_listener($event) {
            return ctx.input($event);
          })("input", function LoginComponent_Template_input_input_13_listener() {
            return ctx.validateInput("email");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Correo Electr\xF3nico");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_small_16_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_19_listener($event) {
            return ctx.input($event);
          })("input", function LoginComponent_Template_input_input_19_listener() {
            return ctx.validateInput("password");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginComponent_small_22_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_small_23_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Iniciar Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Recu\xE9rdame");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Inicia Sesi\xF3n Con Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "No Tienes Ninguna Cuenta ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Reg\xEDstrate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formForma);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validateOne);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validateTwo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validateThree);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validateFour);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formForma);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".article__auth--container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.auth__container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    justify-items: center;\r\n    grid-template-rows: 3.5rem auto;\r\n}\r\n\r\n.auth__header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.auth__image[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.auth__paragraph[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n}\r\n\r\n.main__auth[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    min-height: 587px;\r\n    border-radius: 40px;\r\n    padding: 3rem 1.5rem 0;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\n.main__h2[_ngcontent-%COMP%] {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 1rem;\r\n    flex-direction: column;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    padding-left: .5rem;\r\n    margin-bottom: .3rem;\r\n    background-color: inherit;\r\n    border-bottom: 2px solid var(--lightColor);\r\n}\r\n\r\n.campo[_ngcontent-%COMP%] {\r\n    display: inherit;\r\n    position: relative;\r\n    margin-bottom: 2rem;\r\n    flex-direction: column;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    opacity: .6;\r\n    left: .5rem;\r\n    top: -0.7rem;\r\n    position: absolute;\r\n    transition: font-size .2s ease, top .2s ease;\r\n}\r\n\r\n.label__finally[_ngcontent-%COMP%], .main__form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\r\n    top: -0.7rem;\r\n    font-size: .5rem;\r\n}\r\n\r\n\r\n\r\n.borderInput[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid var(--redColor) !important;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: var(--redColor);\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    border-radius: 40px;\r\n    background-color: var(--botonColor);\r\n}\r\n\r\n.main__remember[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 2.5rem;\r\n    justify-content: space-between;\r\n}\r\n\r\n.main__remember[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%] {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-left: .5rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 365px) {\r\n    .auth__paragraph[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 400px) {\r\n    .auth__paragraph[_ngcontent-%COMP%] {\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .auth__image[_ngcontent-%COMP%] {\r\n        width: 55px;\r\n        height: 55px;\r\n    }\r\n    .auth__paragraph[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .main__auth[_ngcontent-%COMP%] {\r\n        min-height: 610px;\r\n        padding: 3.5rem 1.5rem 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jc3MvYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLCtDQUErQztJQUMvQyxvREFBb0Q7SUFDcEQsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7Ozs7SUFJSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUdBLGdCQUFnQjs7QUFFaEI7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFHQSwwQkFBMEI7O0FBRTFCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jc3MvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVfX2F1dGgtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRoX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMy41cmVtIGF1dG87XHJcbn1cclxuXHJcbi5hdXRoX19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRoX19pbWFnZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmF1dGhfX3BhcmFncmFwaCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5tYWluX19hdXRoIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDU4N3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHBhZGRpbmc6IDNyZW0gMS41cmVtIDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1saWdodENvbG9yKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbn1cclxuXHJcbi5tYWluX19oMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluX19mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0Q29sb3IpO1xyXG59XHJcblxyXG4uY2FtcG8ge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSBsYWJlbCB7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGxlZnQ6IC41cmVtO1xyXG4gICAgdG9wOiAtMC43cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIC4ycyBlYXNlLCB0b3AgLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5sYWJlbF9fZmluYWxseSxcclxuLm1haW5fX2Zvcm0gaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMrbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cytsYWJlbCxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzK2xhYmVsIHtcclxuICAgIHRvcDogLTAuN3JlbTtcclxuICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbn1cclxuXHJcblxyXG4vKiBJbnRlcmFjdGl2ZSAqL1xyXG5cclxuLmJvcmRlcklucHV0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1yZWRDb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW5fX2Zvcm0gc21hbGwge1xyXG4gICAgY29sb3I6IHZhcigtLXJlZENvbG9yKTtcclxufVxyXG5cclxuLm1haW5fX2Zvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3RvbkNvbG9yKTtcclxufVxyXG5cclxuLm1haW5fX3JlbWVtYmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tYWluX19yZW1lbWJlciBhOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5tYWluX19hdXRoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ubWFpbl9fYXV0aDIgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubWFpbl9fYXV0aDIgaSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLm1haW5fX2F1dGgyIHAgYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbn1cclxuXHJcbi5tYWluX19hdXRoMiBwIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi8qIE1FRElBIFFVRVJZUyBHRU5FUkFMUyAqL1xyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzY1cHgpIHtcclxuICAgIC5hdXRoX19wYXJhZ3JhcGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmF1dGhfX3BhcmFncmFwaCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYXV0aF9faW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgIH1cclxuICAgIC5hdXRoX19wYXJhZ3JhcGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5tYWluX19hdXRoIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MTBweDtcclxuICAgICAgICBwYWRkaW5nOiAzLjVyZW0gMS41cmVtIDA7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['../css/auth.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/register.service */
    "./src/app/auth/services/register.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, registerService, router) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this.router = router;
        this.registerFormCreate();
      }
      /**
       * HTML Builder After
       */


      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Array.from(this.labels = document.querySelectorAll('.main__form label'));
          Array.from(this.inputs = document.querySelectorAll('.main__form input'));
        }
        /**
         * Event Inputs Transition Labels
         */

      }, {
        key: "input",
        value: function input(e) {
          var value = e.target.value; // const attribute: string = e.target.getAttribute('type');

          var attribute = e.target.getAttribute('formControlName');

          switch (attribute) {
            case 'name':
              this.fieldValueTransitionLabel(value, 0, 'label__finally');
              break;

            case 'email':
              this.fieldValueTransitionLabel(value, 1, 'label__finally');
              break;

            case 'password':
              this.fieldValueTransitionLabel(value, 2, 'label__finally');
              break;

            case 'repeat_password':
              this.fieldValueTransitionLabel(value, 3, 'label__finally');
              break;
          }
        }
        /**
         * Register Form Label Transition
         */

      }, {
        key: "fieldValueTransitionLabel",
        value: function fieldValueTransitionLabel(value, index, classCss) {
          if (value.length) {
            this.labels[index].classList.add(classCss);
          } else {
            this.labels[index].classList.remove(classCss);
          }
        }
        /**
         * Register Form Data Builder And Validation (ANGULAR REACTIVE)
         */

      }, {
        key: "registerFormCreate",
        value: function registerFormCreate() {
          this.formForma = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            repeat_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
          }, {
            validators: this.statusFieldPasswords('password', 'repeat_password')
          });
        }
        /**
         * Los Validadores Sincronos Deben Retornar Una Function, Asi Funcionan
         * Los Passwords Se Validan A Nivel De Formulario
         * Recibimos En El Parametro Todo El Formulario
         * Hacemos La Lógica Para Validar Ambos Passwords, Antes De Enviar La Data
         */

      }, {
        key: "statusFieldPasswords",
        value: function statusFieldPasswords(pass1Name, pass2Name) {
          return function (formGroup) {
            var pass1Control = formGroup.controls[pass1Name];
            var pass2Control = formGroup.controls[pass2Name];

            if (pass1Control.value === pass2Control.value) {
              pass2Control.setErrors(null);
            } else {
              pass2Control.setErrors({
                noEsIgual: true
              });
            }
          };
        }
        /**
         * Register Form Every Field Value (ANGULAR REACTIVE)
         */

      }, {
        key: "statusField",
        value: function statusField(e) {
          var attribute = e.target.getAttribute('formControlName');

          switch (attribute) {
            case 'name':
              this.validationTemplateLogicInput('name', 0, 'borderInput', 'Nombre No Válido');
              break;

            case 'email':
              this.validationTemplateLogicInput('email', 1, 'borderInput', 'Correo Eléctronico No Válido');
              break;

            case 'password':
              this.validationTemplateLogicInput('password', 2, 'borderInput', 'Contraseña No Válida');
              break;

            case 'repeat_password':
              this.validationTemplateLogicInput('repeat_password', 3, 'borderInput', 'Contraseñas No Son Iguales');
              break;
          }
        }
        /**
         * Register Form Validate Input Logic
         */

      }, {
        key: "validationTemplateLogicInput",
        value: function validationTemplateLogicInput(fieldName, index, classCss) {
          var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          // tslint:disable-next-line: max-line-length
          if (this.formForma.get(fieldName).status === 'VALID' && this.formForma.get(fieldName).dirty && !this.formForma.get(fieldName).invalid && this.formForma.get(fieldName).valid) {
            if (this.labels[index].nextElementSibling || this.inputs[index].classList.contains(classCss)) {
              this.inputs[index].classList.remove(classCss);
              this.registerFormTemplateValidate(index);
            }
          } else if (!this.formForma.get(fieldName).valid && this.formForma.get(fieldName).dirty) {
            if (!this.labels[index].nextElementSibling || !this.inputs[index].classList.contains(classCss)) {
              this.inputs[index].classList.add(classCss);
              this.registerFormTemplateValidate(index, message);
            }
          }
        }
        /**
         * Register Form Data Saved And Send Server
         * Register Form All Data
         */

      }, {
        key: "saveRegisterFormData",
        value: function saveRegisterFormData() {
          var _this4 = this;

          // tslint:disable-next-line: max-line-length
          if (this.formForma.status === 'INVALID' || this.formForma.touched === false || this.formForma.dirty === false || this.formForma.valid === false) {
            this.completeFormValidate();
            return;
          }
          /* Response Backend */


          this.registerService.createUser(this.formForma.value).subscribe(function () {
            _this4.router.navigateByUrl('/login');
          }, function (error) {
            return _this4.showAlertError(error.error.error);
          });
        }
        /**
         * Show Alert Errors Response Backend, If Exist!
         */

      }, {
        key: "showAlertError",
        value: function showAlertError(message) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            icon: 'error',
            title: 'Oops...',
            text: message
          });
        }
        /**
         * Register Form Every Field Validate Controls
         */

      }, {
        key: "completeFormValidate",
        value: function completeFormValidate() {
          var _this5 = this;

          Object.values(this.formForma.controls).forEach(function (controlsField, index) {
            if (controlsField.status === 'INVALID' || controlsField.valid === false) {
              _this5.inputs[index].classList.add('borderInput');

              _this5.registerFormPositionValidate(index);
            }
          });
        }
        /**
         * Register Form Position Field Validate
         */

      }, {
        key: "registerFormPositionValidate",
        value: function registerFormPositionValidate(index) {
          if (index === 0) {
            this.registerFormTemplateValidate(index, 'Nombre Obligatorio');
          } else if (index === 1) {
            this.registerFormTemplateValidate(index, 'Correo Eléctronico Obligatorio');
          } else if (index === 2) {
            this.registerFormTemplateValidate(index, 'Contraseña Obligatoria');
          } else if (index === 3) {
            this.registerFormTemplateValidate(index, 'Contraseñas No Son Iguales');
          }
        }
        /**
         * Register Form Template Builder Validate HTML
         */

      }, {
        key: "registerFormTemplateValidate",
        value: function registerFormTemplateValidate(index) {
          var mensajeValidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var small = document.createElement('small');

          if (!this.labels[index].nextElementSibling) {
            small.style.color = '#f50808';
            small.innerHTML = mensajeValidate;
            this.inputs[index].nextElementSibling.insertAdjacentElement('afterend', small);
          } else if (this.labels[index].nextElementSibling && !this.inputs[index].classList.contains('borderInput')) {
            this.labels[index].nextElementSibling.remove();
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 34,
      vars: 3,
      consts: [[1, "article__auth--container", "animated", "fadeIn", "fast"], [1, "auth__container"], [1, "auth__header"], [1, "auth__figure"], ["src", "./assets/image/logo.png", "alt", "logoauth", 1, "auth__image"], [1, "auth__paragraph"], [1, "main__auth"], [1, "main__h2"], ["autocomplete", "off", 1, "main__form", 3, "formGroup", "ngSubmit"], [1, "campo"], ["type", "text", "formControlName", "name", 3, "blur", "input"], ["type", "email", "formControlName", "email", 3, "change", "input"], ["type", "password", "formControlName", "password", 3, "change", "input"], ["type", "password", "formControlName", "repeat_password", 3, "blur", "input"], ["type", "submit"], [1, "main__remember"], [1, "main__password"], [3, "routerLink"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figure", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "UpTask - Administrador De Proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "article", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Crear Cuenta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() {
            return ctx.saveRegisterFormData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function RegisterComponent_Template_input_blur_13_listener($event) {
            return ctx.input($event);
          })("input", function RegisterComponent_Template_input_input_13_listener($event) {
            return ctx.statusField($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_17_listener($event) {
            return ctx.input($event);
          })("input", function RegisterComponent_Template_input_input_17_listener($event) {
            return ctx.statusField($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Correo Electr\xF3nico");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_21_listener($event) {
            return ctx.input($event);
          })("input", function RegisterComponent_Template_input_input_21_listener($event) {
            return ctx.statusField($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function RegisterComponent_Template_input_blur_25_listener($event) {
            return ctx.input($event);
          })("input", function RegisterComponent_Template_input_input_25_listener($event) {
            return ctx.statusField($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Repetir Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Registrarse");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\xBFYa Tienes Una Cuenta?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formForma);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".article__auth--container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.auth__container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    justify-items: center;\r\n    grid-template-rows: 3.5rem auto;\r\n}\r\n\r\n.auth__header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.auth__image[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.auth__paragraph[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n}\r\n\r\n.main__auth[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    min-height: 587px;\r\n    border-radius: 40px;\r\n    padding: 3rem 1.5rem 0;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\n.main__h2[_ngcontent-%COMP%] {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 1rem;\r\n    flex-direction: column;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    padding-left: .5rem;\r\n    margin-bottom: .3rem;\r\n    background-color: inherit;\r\n    border-bottom: 2px solid var(--lightColor);\r\n}\r\n\r\n.campo[_ngcontent-%COMP%] {\r\n    display: inherit;\r\n    position: relative;\r\n    margin-bottom: 2rem;\r\n    flex-direction: column;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    opacity: .6;\r\n    left: .5rem;\r\n    top: -0.7rem;\r\n    position: absolute;\r\n    transition: font-size .2s ease, top .2s ease;\r\n}\r\n\r\n.label__finally[_ngcontent-%COMP%], .main__form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], input[type=\"email\"][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%] {\r\n    top: -0.7rem;\r\n    font-size: .5rem;\r\n}\r\n\r\n\r\n\r\n.borderInput[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid var(--redColor) !important;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: var(--redColor);\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n    border-radius: 40px;\r\n    background-color: var(--botonColor);\r\n}\r\n\r\n.main__remember[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 2.5rem;\r\n    justify-content: space-between;\r\n}\r\n\r\n.main__remember[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%] {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-left: .5rem;\r\n}\r\n\r\n.main__auth2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 365px) {\r\n    .auth__paragraph[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 400px) {\r\n    .auth__paragraph[_ngcontent-%COMP%] {\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .auth__image[_ngcontent-%COMP%] {\r\n        width: 55px;\r\n        height: 55px;\r\n    }\r\n    .auth__paragraph[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .main__auth[_ngcontent-%COMP%] {\r\n        min-height: 610px;\r\n        padding: 3.5rem 1.5rem 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jc3MvYXV0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLCtDQUErQztJQUMvQyxvREFBb0Q7SUFDcEQsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7Ozs7SUFJSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUdBLGdCQUFnQjs7QUFFaEI7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQzs7QUFHQSwwQkFBMEI7O0FBRTFCO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jc3MvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVfX2F1dGgtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRoX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMy41cmVtIGF1dG87XHJcbn1cclxuXHJcbi5hdXRoX19oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdXRoX19pbWFnZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmF1dGhfX3BhcmFncmFwaCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5tYWluX19hdXRoIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDU4N3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHBhZGRpbmc6IDNyZW0gMS41cmVtIDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1saWdodENvbG9yKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbn1cclxuXHJcbi5tYWluX19oMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluX19mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0Q29sb3IpO1xyXG59XHJcblxyXG4uY2FtcG8ge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSBsYWJlbCB7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGxlZnQ6IC41cmVtO1xyXG4gICAgdG9wOiAtMC43cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIC4ycyBlYXNlLCB0b3AgLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5sYWJlbF9fZmluYWxseSxcclxuLm1haW5fX2Zvcm0gaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMrbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cytsYWJlbCxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmZvY3VzK2xhYmVsIHtcclxuICAgIHRvcDogLTAuN3JlbTtcclxuICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbn1cclxuXHJcblxyXG4vKiBJbnRlcmFjdGl2ZSAqL1xyXG5cclxuLmJvcmRlcklucHV0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1yZWRDb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW5fX2Zvcm0gc21hbGwge1xyXG4gICAgY29sb3I6IHZhcigtLXJlZENvbG9yKTtcclxufVxyXG5cclxuLm1haW5fX2Zvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3RvbkNvbG9yKTtcclxufVxyXG5cclxuLm1haW5fX3JlbWVtYmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tYWluX19yZW1lbWJlciBhOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5tYWluX19hdXRoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ubWFpbl9fYXV0aDIgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubWFpbl9fYXV0aDIgaSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLm1haW5fX2F1dGgyIHAgYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbn1cclxuXHJcbi5tYWluX19hdXRoMiBwIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi8qIE1FRElBIFFVRVJZUyBHRU5FUkFMUyAqL1xyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzY1cHgpIHtcclxuICAgIC5hdXRoX19wYXJhZ3JhcGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmF1dGhfX3BhcmFncmFwaCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuYXV0aF9faW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgIGhlaWdodDogNTVweDtcclxuICAgIH1cclxuICAgIC5hdXRoX19wYXJhZ3JhcGgge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5tYWluX19hdXRoIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MTBweDtcclxuICAgICAgICBwYWRkaW5nOiAzLjVyZW0gMS41cmVtIDA7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['../css/auth.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/services/login.service.ts":
  /*!************************************************!*\
    !*** ./src/app/auth/services/login.service.ts ***!
    \************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppAuthServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pages_models_project_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pages/models/project.model */
    "./src/app/pages/models/project.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* Variables De Entorno */

    /* Project Model(For All Project) */


    var LoginService = /*#__PURE__*/function () {
      function LoginService(http, router, ngZone) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.router = router;
        this.ngZone = ngZone;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }
      /**
       * User Login Normal
       */


      _createClass(LoginService, [{
        key: "login",
        value: function login(formData) {
          var email = formData.email,
              password = formData.password;
          var loginForm = {
            email: email,
            password: password
          };
          return this.http.post("".concat(this.url, "/login"), loginForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resp) {
            return localStorage.setItem('token', resp.token);
          }));
        }
        /**
         * User Login Google
         */

      }, {
        key: "loginGoogle",
        value: function loginGoogle(token) {
          return this.http.post("".concat(this.url, "/login/google"), {
            token: token
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resp) {
            return localStorage.setItem('token', resp.tokenPropio);
          }));
        }
        /**
         * Validate Token LocalStorage And Renew
         * LOGICA PARA UN SERVICIO SINGLETON Y EL NOMBRE DE LOS PROYECTOS
         */

      }, {
        key: "loginRenew",
        value: function loginRenew() {
          var _this6 = this;

          var token = localStorage.getItem('token') || '';
          return this.http.get("".concat(this.url, "/login/renew"), {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resp) {
            var projectIds = [];
            var projectUrls = [];
            var projectNames = [];
            localStorage.setItem('token', resp.tokenValidado);
            resp.projects.forEach(function (project) {
              var id = project.id,
                  url = project.url,
                  name = project.name;
              projectIds.push(id);
              projectUrls.push(url);
              projectNames.push(name);
            });
            _this6.projects = new _pages_models_project_model__WEBPACK_IMPORTED_MODULE_4__["Project"](projectIds, projectUrls, projectNames);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }));
        }
        /**
         * Logout De Google - Delete Token LocalStorage
         */

      }, {
        key: "logout",
        value: function logout() {
          var _this7 = this;

          this.auth2 = gapi.auth2.getAuthInstance();
          this.auth2.signOut().then(function () {
            _this7.ngZone.run(function () {
              localStorage.removeItem('token');

              _this7.router.navigate(['/login']);
            });
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/services/register.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/auth/services/register.service.ts ***!
    \***************************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppAuthServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* Variables De Entorno */


    var RegisterService = /*#__PURE__*/function () {
      function RegisterService(http) {
        _classCallCheck(this, RegisterService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
      }

      _createClass(RegisterService, [{
        key: "createUser",
        value: function createUser(formRegister) {
          return this.http.post("".concat(this.url, "/register"), formRegister);
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ɵfac = function RegisterService_Factory(t) {
      return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegisterService,
      factory: RegisterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(loginService, router) {
        _classCallCheck(this, AuthGuard);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this8 = this;

          return this.loginService.loginRenew().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (authenticate) {
            return !authenticate ? _this8.router.navigateByUrl('/login') : authenticate;
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page404/page404.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/page404/page404.component.ts ***!
    \**********************************************/

  /*! exports provided: Page404Component */

  /***/
  function srcAppPage404Page404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page404Component", function () {
      return Page404Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/dashboard"];
    };

    var Page404Component = /*#__PURE__*/function () {
      function Page404Component() {
        _classCallCheck(this, Page404Component);
      }

      _createClass(Page404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page404Component;
    }();

    Page404Component.ɵfac = function Page404Component_Factory(t) {
      return new (t || Page404Component)();
    };

    Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Page404Component,
      selectors: [["app-page404"]],
      decls: 17,
      vars: 2,
      consts: [[1, "container__404"], [1, "header"], [1, "main__article"], [1, "main__image"], ["src", "./assets/image/Scarecrow.png", "alt", "mainImage"], [1, "main__section"], [1, "section__paragraph"], [1, "section__bottom"], [3, "routerLink"]],
      template: function Page404Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404 NOT FOUND");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "figure", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I Have Bad News For You");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "The Page You Are Looking For Might Be Removed Or Is Temporarily Unavailable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Back To Home Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".container__404[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n}\r\n\r\n.main__article[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.main__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 330px;\r\n    min-height: 330px;\r\n}\r\n\r\n.main__section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 1.9rem;\r\n}\r\n\r\n.section__paragraph[_ngcontent-%COMP%] {\r\n    width: 217px;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.section__bottom[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 920px) {\r\n    .main__article[_ngcontent-%COMP%] {\r\n        grid-template-columns: 400px 400px;\r\n    }\r\n    .main__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 370px;\r\n        min-height: 370px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtDQUFrQztBQUN0Qzs7QUFHQSwwQkFBMEI7O0FBRTFCO0lBQ0k7UUFDSSxrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9fNDA0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubWFpbl9fYXJ0aWNsZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW5fX2ltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMzBweDtcclxufVxyXG5cclxuLm1haW5fX3NlY3Rpb24gaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjlyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uX19wYXJhZ3JhcGgge1xyXG4gICAgd2lkdGg6IDIxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb25fX2JvdHRvbSB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcclxufVxyXG5cclxuXHJcbi8qIE1FRElBIFFVRVJZUyBHRU5FUkFMUyAqL1xyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTIwcHgpIHtcclxuICAgIC5tYWluX19hcnRpY2xlIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwMHB4IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1haW5fX2ltYWdlIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM3MHB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page404',
          templateUrl: './page404.component.html',
          styleUrls: ['./page404.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/components/progress/progress.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/components/progress/progress.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppPagesComponentsProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/task.service */
    "./src/app/pages/services/task.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "width": a0
      };
    };

    var ProgressComponent = /*#__PURE__*/function () {
      function ProgressComponent(taskService) {
        _classCallCheck(this, ProgressComponent);

        this.taskService = taskService;
        this.valueTask = 0;
      }

      _createClass(ProgressComponent, [{
        key: "valueFinal",
        get: function get() {
          var _this9 = this;

          var _a;

          var acSuma = 0;
          this.valueTask = 0;
          (_a = this.taskService.task) === null || _a === void 0 ? void 0 : _a.taskStates.forEach(function (elemento) {
            if (elemento === 1) {
              acSuma += 1;
              _this9.valueTask = acSuma * 100 / _this9.taskService.task.taskStates.length;
            }
          });
          return this.valueTask;
        }
      }]);

      return ProgressComponent;
    }();

    ProgressComponent.ɵfac = function ProgressComponent_Factory(t) {
      return new (t || ProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
    };

    ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressComponent,
      selectors: [["app-progress"]],
      decls: 4,
      vars: 3,
      consts: [[1, "animated", "fadeIn", "fast"], [1, "barra-avance", "animated", "fadeIn", "fast"], [1, "porcentaje", 3, "ngStyle"]],
      template: function ProgressComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Avance Del Proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.valueFinal + "%"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["h2[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.barra-avance[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    min-width: 200px;\r\n    border: 1px solid var(--lightColor);\r\n}\r\n\r\n\r\n.porcentaje[_ngcontent-%COMP%] {\r\n    width: 0%;\r\n    height: 100%;\r\n    transition: width .3s ease;\r\n    background-size: 1rem 1rem;\r\n    background-color: #00B762;\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n\r\n@media all and (min-width: 375px) {\r\n    .barra-avance[_ngcontent-%COMP%] {\r\n        min-width: 240px;\r\n    }\r\n}\r\n\r\n\r\n@media all and (min-width: 768px) {\r\n    h2[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0Esc0JBQXNCOzs7QUFFdEI7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1DQUFtQztBQUN2Qzs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGtNQUFrTTtBQUN0TTs7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiogTGluZWEgZGUgQXZhbmNlICoqL1xyXG5cclxuLmJhcnJhLWF2YW5jZSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRDb2xvcik7XHJcbn1cclxuXHJcbi5wb3JjZW50YWplIHtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxcmVtIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCNzYyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMTUpIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICAuYmFycmEtYXZhbmNlIHtcclxuICAgICAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progress',
          templateUrl: './progress.component.html',
          styleUrls: ['./progress.component.css']
        }]
      }], function () {
        return [{
          type: _services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/components/project-update/project-update.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/components/project-update/project-update.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProjectUpdateComponent */

  /***/
  function srcAppPagesComponentsProjectUpdateProjectUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectUpdateComponent", function () {
      return ProjectUpdateComponent;
    });
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/project.service */
    "./src/app/pages/services/project.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectUpdateComponent_small_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimo 6 Caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProjectUpdateComponent_small_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre Projecto Obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ProjectUpdateComponent = /*#__PURE__*/function () {
      function ProjectUpdateComponent(loginService, activatedRoute, formBuilder, projectService, router) {
        _classCallCheck(this, ProjectUpdateComponent);

        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.router = router;
        this.formUpdateProjectSubmitted = false;
        this.projectFormDataBuild();
      }

      _createClass(ProjectUpdateComponent, [{
        key: "projectFormDataBuild",

        /*
         * Update Project Form Builder
         */
        value: function projectFormDataBuild() {
          this.formForma = this.formBuilder.group({
            name: [this.titleProject, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
        /**
         * Update Project Form Send For Backend
         */

      }, {
        key: "projectUpdateFormDataSaved",
        value: function projectUpdateFormDataSaved() {
          var _this10 = this;

          if (this.formForma.status === 'INVALID' || this.formForma.valid === false) {
            this.formUpdateProjectSubmitted = true;
            return;
          }
          /* Send Data For Backend, If Is Right! */


          this.projectService.updateProject(this.formForma.value.name, this.urlProject, this.idProject, this.indexProject).subscribe(function () {
            _this10.ShowAlert();

            _this10.router.navigateByUrl('/dashboard');
          }); // this.formForma.reset();
        }
      }, {
        key: "ShowAlert",
        value: function ShowAlert() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Actualizar Proyecto',
            text: 'Proyecto Actualizado Exitosamente!',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!'
          });
        }
      }, {
        key: "titleProject",
        get: function get() {
          return this.loginService.projects.projectNames[this.indexProject];
        }
      }, {
        key: "urlProject",
        get: function get() {
          return this.activatedRoute.snapshot.paramMap.get('projectUrl');
        }
      }, {
        key: "idProject",
        get: function get() {
          // tslint:disable-next-line: radix
          return parseInt(this.activatedRoute.snapshot.paramMap.get('projectId'));
        }
      }, {
        key: "indexProject",
        get: function get() {
          // tslint:disable-next-line: radix
          return parseInt(this.activatedRoute.snapshot.paramMap.get('indice'));
        }
        /*
         * Coditionals DOM
         */

      }, {
        key: "conditionalNameHTML",
        get: function get() {
          return this.formForma.get('name').invalid && this.formForma.get('name').dirty;
        }
      }, {
        key: "requiredNameHTML",
        get: function get() {
          return this.formUpdateProjectSubmitted && !this.formForma.get('name').dirty && !this.formForma.valid;
        }
      }]);

      return ProjectUpdateComponent;
    }();

    ProjectUpdateComponent.ɵfac = function ProjectUpdateComponent_Factory(t) {
      return new (t || ProjectUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ProjectUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProjectUpdateComponent,
      selectors: [["app-project-update"]],
      decls: 10,
      vars: 4,
      consts: [["id", "article__form", 1, "article__form", "animated", "fadeIn", "fast"], [1, "section"], [1, "section__project"], ["autocomplete", "off", 1, "section__form", "main__form", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name"], [4, "ngIf"], ["type", "submit", "value", "Actualizar Proyecto", 1, "input__personal"]],
      template: function ProjectUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProjectUpdateComponent_Template_form_ngSubmit_5_listener() {
            return ctx.projectUpdateFormDataSaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProjectUpdateComponent_small_7_Template, 2, 0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProjectUpdateComponent_small_8_Template, 2, 0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Actualizar - ", ctx.titleProject, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formForma);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.conditionalNameHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requiredNameHTML);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".section__project[_ngcontent-%COMP%]   .section__form[_ngcontent-%COMP%]   .input__personal[_ngcontent-%COMP%] {\r\n    width: 135px;\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .section__project[_ngcontent-%COMP%]   .section__form[_ngcontent-%COMP%]   .input__personal[_ngcontent-%COMP%] {\r\n        width: 165px;\r\n        font-size: 1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9wcm9qZWN0LXVwZGF0ZS9wcm9qZWN0LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBvbmVudHMvcHJvamVjdC11cGRhdGUvcHJvamVjdC11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uX19wcm9qZWN0IC5zZWN0aW9uX19mb3JtIC5pbnB1dF9fcGVyc29uYWwge1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5zZWN0aW9uX19wcm9qZWN0IC5zZWN0aW9uX19mb3JtIC5pbnB1dF9fcGVyc29uYWwge1xyXG4gICAgICAgIHdpZHRoOiAxNjVweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbn0iXX0= */", ".section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 1rem 0 0.5rem 0;\r\n}\r\n\r\n.section__form[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    padding: 0.5rem;\r\n    flex-direction: column;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    padding: 0.7rem;\r\n    margin: 0 0 .5rem 0;\r\n    border-radius: 15px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\ninput[type=\"submit\"][_ngcontent-%COMP%] {\r\n    width: 106px;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 10px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n.article__form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-row-gap: 1rem;\r\n    justify-items: center;\r\n    grid-template-rows: 170px 1fr 1fr;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: var(--redColor);\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 768px) {\r\n    .section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 80%;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 540px;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 540px;\r\n    }\r\n    input[type=\"text\"][_ngcontent-%COMP%] {\r\n        padding: 0.8rem;\r\n    }\r\n    input[type=\"submit\"][_ngcontent-%COMP%] {\r\n        width: 130px;\r\n        padding: 0.8rem;\r\n        font-size: 1.1rem;\r\n        border-radius: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQywrQ0FBK0M7SUFDL0Msb0RBQW9EO0lBQ3BELHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFHQSxzQ0FBc0M7O0FBRXRDO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fZm9ybSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICB3aWR0aDogMTA2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XHJcbn1cclxuXHJcbi5hcnRpY2xlX19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCAxZnIgMWZyO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSBzbWFsbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkQ29sb3IpO1xyXG59XHJcblxyXG5cclxuLyogTUVESUEgUVVFUlkgR0VORVJBTFMgQVNJREUgSElEREVOICovXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3Rpb24gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA1NDBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uX19idXR0b25zIHtcclxuICAgICAgICBtaW4td2lkdGg6IDU0MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-project-update',
          templateUrl: './project-update.component.html',
          styleUrls: ['./project-update.component.css', '../../css/pages.component.css']
        }]
      }], function () {
        return [{
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 3,
      vars: 0,
      consts: [[1, "article__form", "animated", "fadeIn", "fast"], [1, "article__title--projects"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Administrar Proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".article__title--projects[_ngcontent-%COMP%] {\r\n    margin: 1.5rem 1rem;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .article__title--projects[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWNsZV9fdGl0bGUtLXByb2plY3RzIHtcclxuICAgIG1hcmdpbjogMS41cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5hcnRpY2xlX190aXRsZS0tcHJvamVjdHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59Il19 */", ".section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 1rem 0 0.5rem 0;\r\n}\r\n\r\n.section__form[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    padding: 0.5rem;\r\n    flex-direction: column;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    padding: 0.7rem;\r\n    margin: 0 0 .5rem 0;\r\n    border-radius: 15px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\ninput[type=\"submit\"][_ngcontent-%COMP%] {\r\n    width: 106px;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 10px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n.article__form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-row-gap: 1rem;\r\n    justify-items: center;\r\n    grid-template-rows: 170px 1fr 1fr;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: var(--redColor);\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 768px) {\r\n    .section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 80%;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 540px;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 540px;\r\n    }\r\n    input[type=\"text\"][_ngcontent-%COMP%] {\r\n        padding: 0.8rem;\r\n    }\r\n    input[type=\"submit\"][_ngcontent-%COMP%] {\r\n        width: 130px;\r\n        padding: 0.8rem;\r\n        font-size: 1.1rem;\r\n        border-radius: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQywrQ0FBK0M7SUFDL0Msb0RBQW9EO0lBQ3BELHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFHQSxzQ0FBc0M7O0FBRXRDO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fZm9ybSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICB3aWR0aDogMTA2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XHJcbn1cclxuXHJcbi5hcnRpY2xlX19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCAxZnIgMWZyO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSBzbWFsbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkQ29sb3IpO1xyXG59XHJcblxyXG5cclxuLyogTUVESUEgUVVFUlkgR0VORVJBTFMgQVNJREUgSElEREVOICovXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3Rpb24gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA1NDBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uX19idXR0b25zIHtcclxuICAgICAgICBtaW4td2lkdGg6IDU0MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css', '../css/pages.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/landing-page.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/landing-page.component.ts ***!
    \*************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppPagesLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/project.service */
    "./src/app/pages/services/project.service.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var LandingPageComponent = /*#__PURE__*/function () {
      // public projectName:
      function LandingPageComponent(projectService) {
        _classCallCheck(this, LandingPageComponent);

        this.projectService = projectService;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
      return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]));
    };

    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["app-landing-page"]],
      decls: 8,
      vars: 0,
      consts: [["id", "landing__page", 1, "main__dashboard"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: [".main__dashboard[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-rows: 100vh;\r\n    grid-template-columns: 100px 1fr;\r\n    border: solid 1px var(--lightColor);\r\n}\r\n\r\n.main__dashboard--hidden[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: auto;\r\n    border: solid 1px var(--lightColor);\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 425px) {\r\n    .main__dashboard[_ngcontent-%COMP%] {\r\n        grid-template-columns: 150px 1fr;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .main__dashboard[_ngcontent-%COMP%] {\r\n        grid-template-columns: 250px 1fr;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1DQUFtQztBQUN2Qzs7QUFHQSxpQkFBaUI7O0FBRWpCO0lBQ0k7UUFDSSxnQ0FBZ0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX19kYXNoYm9hcmQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDFmcjtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG59XHJcblxyXG4ubWFpbl9fZGFzaGJvYXJkLS1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG59XHJcblxyXG5cclxuLyogTUVESUEgUVVFUllTICovXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xyXG4gICAgLm1haW5fX2Rhc2hib2FyZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubWFpbl9fZGFzaGJvYXJkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing-page',
          templateUrl: './landing-page.component.html',
          styleUrls: ['./landing-page.component.css']
        }]
      }], function () {
        return [{
          type: _services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/models/project.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/models/project.model.ts ***!
    \***********************************************/

  /*! exports provided: Project */

  /***/
  function srcAppPagesModelsProjectModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });
    /* Modelo Que Me permite Tener Disponible Los Nombres
    De Los Proyectos Creados En Todo El Proyecto UPTASK,
    Con Ayuda De Los Servicios, Por Que Los Servicios
    Son Singleton Y Eso Me Permite Que Al Modificar
    Este Arreglo De Nombres, Se Modifique Automaticamente
    En Cualquier Lugar Donde Se Tenga Una Instancia
    De Este Modelo, Que En teoria Se Instancia
    Una Sola Vez En Un Servicio, Pero Gracias
    A la Habilidad Singleton De Los Servicios, Puedo
    A puntar A La Misma Referencia De Memoria, Donde
    Tenga Solicitado El Servicio Donde Se Instancio Este Modelo.
    */


    var Project = function Project(projectIds, projectUrls, projectNames) {
      _classCallCheck(this, Project);

      this.projectIds = projectIds;
      this.projectUrls = projectUrls;
      this.projectNames = projectNames;
    };
    /***/

  },

  /***/
  "./src/app/pages/models/task.model.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/models/task.model.ts ***!
    \********************************************/

  /*! exports provided: Task */

  /***/
  function srcAppPagesModelsTaskModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });
    /* Modelo Que Me permite Tener Disponible Las Propiedades
    De Los Tareas Creados En Todo El Proyecto UPTASK,
    Con Ayuda De Los Servicios, Por Que Los Servicios
    Son Singleton Y Eso Me Permite Que Al Modificar
    Este Arreglo De Tareas, Se Modifique Automaticamente
    En Cualquier Lugar Donde Se Tenga Una Instancia
    De Este Modelo, Que En teoria Se Instancia
    Una Sola Vez En Un Servicio, Pero Gracias
    A la Habilidad Singleton De Los Servicios, Puedo
    A puntar A La Misma Referencia De Memoria, Donde
    Tenga Solicitado El Servicio Donde Se Instancio Este Modelo.
    */


    var Task = function Task(taskIds, taskNames, taskStates, projectId) {
      _classCallCheck(this, Task);

      this.taskIds = taskIds;
      this.taskNames = taskNames;
      this.taskStates = taskStates;
      this.projectId = projectId;
    };
    /***/

  },

  /***/
  "./src/app/pages/pages-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pages-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tasks/tasks.component */
    "./src/app/pages/tasks/tasks.component.ts");
    /* harmony import */


    var _landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./landing-page.component */
    "./src/app/pages/landing-page.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/pages/projects/projects.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_project_update_project_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/project-update/project-update.component */
    "./src/app/pages/components/project-update/project-update.component.ts");
    /* Guards */

    /* Components */


    var routes = [{
      path: 'dashboard',
      component: _landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      children: [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
      }, {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"]
      }, {
        path: 'tasks/:indice/:projectUrl/:projectId',
        component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"]
      }, {
        path: 'project/:indice/:projectUrl/:projectId',
        component: _components_project_update_project_update_component__WEBPACK_IMPORTED_MODULE_7__["ProjectUpdateComponent"]
      }]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
    PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesRoutingModule_Factory(t) {
        return new (t || PagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tasks/tasks.component */
    "./src/app/pages/tasks/tasks.component.ts");
    /* harmony import */


    var _landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landing-page.component */
    "./src/app/pages/landing-page.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/pages/projects/projects.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_project_update_project_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/project-update/project-update.component */
    "./src/app/pages/components/project-update/project-update.component.ts");
    /* harmony import */


    var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/progress/progress.component */
    "./src/app/pages/components/progress/progress.component.ts");
    /* Componets Module */

    /* Components Pages */


    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        declarations: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], _landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _components_project_update_project_update_component__WEBPACK_IMPORTED_MODULE_10__["ProjectUpdateComponent"], _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
        exports: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], _landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], _landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _components_project_update_project_update_component__WEBPACK_IMPORTED_MODULE_10__["ProjectUpdateComponent"], _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
          exports: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], _landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/projects/projects.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/projects/projects.component.ts ***!
    \******************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppPagesProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/project.service */
    "./src/app/pages/services/project.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectsComponent_small_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Minimo 6 Caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectsComponent_small_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nombre Projecto Obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(formBuilder, projectService, router) {
        _classCallCheck(this, ProjectsComponent);

        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.router = router;
        this.formNameProjectSubmitted = false;
        this.projectFormDataBuild();
      }
      /*
       * Coditionals DOM
       */


      _createClass(ProjectsComponent, [{
        key: "projectFormDataBuild",

        /**
         * Project Form Build
         */
        value: function projectFormDataBuild() {
          this.formForma = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
          });
        }
        /**
         * Project Form Send For Backend
         */

      }, {
        key: "projectFormDataSaved",
        value: function projectFormDataSaved() {
          var _this11 = this;

          if (this.formForma.status === 'INVALID' || this.formForma.dirty === false || this.formForma.valid === false) {
            this.formNameProjectSubmitted = true;
            return;
          }
          /* Send Data For Backend, If Is Right! */


          this.projectService.createProject(this.formForma.value.name).subscribe(function () {
            _this11.router.navigateByUrl('/dashboard');
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "conditionalNameHTML",
        get: function get() {
          return this.formForma.get('name').invalid && this.formForma.get('name').dirty;
        }
      }, {
        key: "requiredNameHTML",
        get: function get() {
          return this.formNameProjectSubmitted && !this.formForma.get('name').dirty && !this.formForma.valid;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 10,
      vars: 3,
      consts: [["id", "article__form", 1, "article__form", "animated", "fadeIn", "fast"], [1, "section"], [1, "section__project"], ["autocomplete", "off", 1, "section__form", "main__form", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name"], [4, "ngIf"], ["type", "submit", "value", "Crear Proyecto"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nuevo Proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProjectsComponent_Template_form_ngSubmit_5_listener() {
            return ctx.projectFormDataSaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectsComponent_small_7_Template, 2, 0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_small_8_Template, 2, 0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formForma);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conditionalNameHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requiredNameHTML);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 1rem 0 0.5rem 0;\r\n}\r\n\r\n.section__form[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    padding: 0.5rem;\r\n    flex-direction: column;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    padding: 0.7rem;\r\n    margin: 0 0 .5rem 0;\r\n    border-radius: 15px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\ninput[type=\"submit\"][_ngcontent-%COMP%] {\r\n    width: 106px;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 10px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n.article__form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-row-gap: 1rem;\r\n    justify-items: center;\r\n    grid-template-rows: 170px 1fr 1fr;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: var(--redColor);\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 768px) {\r\n    .section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 80%;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 540px;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 540px;\r\n    }\r\n    input[type=\"text\"][_ngcontent-%COMP%] {\r\n        padding: 0.8rem;\r\n    }\r\n    input[type=\"submit\"][_ngcontent-%COMP%] {\r\n        width: 130px;\r\n        padding: 0.8rem;\r\n        font-size: 1.1rem;\r\n        border-radius: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQywrQ0FBK0M7SUFDL0Msb0RBQW9EO0lBQ3BELHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFHQSxzQ0FBc0M7O0FBRXRDO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fZm9ybSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICB3aWR0aDogMTA2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XHJcbn1cclxuXHJcbi5hcnRpY2xlX19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCAxZnIgMWZyO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSBzbWFsbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkQ29sb3IpO1xyXG59XHJcblxyXG5cclxuLyogTUVESUEgUVVFUlkgR0VORVJBTFMgQVNJREUgSElEREVOICovXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3Rpb24gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA1NDBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uX19idXR0b25zIHtcclxuICAgICAgICBtaW4td2lkdGg6IDU0MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['../css/pages.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/project.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/services/project.service.ts ***!
    \***************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppPagesServicesProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* Variables De Entorno */


    var ProjectService = /*#__PURE__*/function () {
      function ProjectService(http, loginService) {
        _classCallCheck(this, ProjectService);

        this.http = http;
        this.loginService = loginService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
      }

      _createClass(ProjectService, [{
        key: "createProject",

        /**
         * Project Create
         */
        value: function createProject(name) {
          var _this12 = this;

          return this.http.post("".concat(this.url, "/project"), {
            name: name
          }, {
            headers: {
              Authorization: this.token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resp) {
            resp.projects.forEach(function (project) {
              // tslint:disable-next-line: no-shadowed-variable
              var id = project.id,
                  name = project.name,
                  url = project.url;

              _this12.loginService.projects.projectIds.push(id);

              _this12.loginService.projects.projectUrls.push(url);

              _this12.loginService.projects.projectNames.push(name);
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }));
        }
        /**
         * Project Update
         */

      }, {
        key: "updateProject",
        value: function updateProject(name, projectUrl, projectId, indice) {
          var _this13 = this;

          return this.http.put("".concat(this.url, "/project/").concat(projectUrl, "/").concat(projectId), {
            name: name
          }, {
            headers: {
              Authorization: this.token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this13.loginService.projects.projectNames[indice] = name;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }));
        }
        /**
         * Project Delete
         */

      }, {
        key: "deleteProject",
        value: function deleteProject(projectId, projectUrl, indice) {
          var _this14 = this;

          return this.http["delete"]("".concat(this.url, "/project/").concat(projectUrl, "/").concat(projectId), {
            headers: {
              Authorization: this.token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this14.loginService.projects.projectIds.splice(indice, 1);

            _this14.loginService.projects.projectUrls.splice(indice, 1);

            _this14.loginService.projects.projectNames.splice(indice, 1);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }));
        }
      }, {
        key: "token",
        get: function get() {
          return "Bearer ".concat(localStorage.getItem('token') || '');
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ɵfac = function ProjectService_Factory(t) {
      return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]));
    };

    ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProjectService,
      factory: ProjectService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/task.service.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/services/task.service.ts ***!
    \************************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppPagesServicesTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/task.model */
    "./src/app/pages/models/task.model.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* Model For All Project UPTASK */

    /* Variables De Entorno */


    var TaskService = /*#__PURE__*/function () {
      function TaskService(http) {
        _classCallCheck(this, TaskService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
      }

      _createClass(TaskService, [{
        key: "tasks",

        /**
         * Get Tasks
         * LOGICA PARA UN SERVICIO SINGLETON Y OBTENER LAS TAREAS PARA TODO EL PROYECTO
         */
        value: function tasks(projectId) {
          var _this15 = this;

          return this.http.get("".concat(this.url, "/tasks/").concat(projectId), {
            headers: {
              Authorization: this.token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resp) {
            var taskProjectId;
            var arrayId = [];
            var arrayName = [];
            var arrayState = [];
            resp.tasks.forEach(function (taskComplete) {
              var id = taskComplete.id,
                  task = taskComplete.task,
                  state = taskComplete.state,
                  project_id = taskComplete.project_id;
              arrayId.push(id);
              arrayName.push(task);
              arrayState.push(state);
              taskProjectId = project_id;
            });
            _this15.task = new _models_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](arrayId, arrayName, arrayState, taskProjectId);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }));
        }
        /**
         * Task Create
         * LOGICA PARA UN SERVICIO SINGLETON Y CREAR LAS TAREAS PARA TODO EL PROYECTO
         */

      }, {
        key: "createTask",
        value: function createTask(name, projectId) {
          var _this16 = this;

          return this.http.post("".concat(this.url, "/task/").concat(projectId), {
            name: name
          }, {
            headers: {
              Authorization: this.token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this16.task.taskIds.length = 0;
            _this16.task.taskNames.length = 0;
            _this16.task.taskStates.length = 0;
            var arrayTaskIds = [];
            var arrayTaskNames = [];
            var arrayTaskStates = [];
            res.tasks.forEach(function (task) {
              arrayTaskIds.push(task.id);
              arrayTaskNames.push(task.task);
              arrayTaskStates.push(task.state);
            });
            _this16.task.taskIds = arrayTaskIds;
            _this16.task.taskNames = arrayTaskNames;
            _this16.task.taskStates = arrayTaskStates;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }));
        }
        /**
         * update Task
         */

      }, {
        key: "updateTask",
        value: function updateTask(taskId, index) {
          var _this17 = this;

          return this.http.patch("".concat(this.url, "/task/").concat(taskId), {
            body: ''
          }, {
            headers: {
              Authorization: this.token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            var state = 1;

            if (_this17.task.taskStates[index] === 1) {
              state = 0;
            }

            _this17.task.taskStates[index] = state;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }));
        }
        /**
         * Task Delete
         * LOGICA PARA UN SERVICIO SINGLETON Y ELIMINAR LAS TAREAS PARA TODO EL PROYECTO
         */

      }, {
        key: "deleteTask",
        value: function deleteTask(taskId, indice) {
          var _this18 = this;

          return this.http["delete"]("".concat(this.url, "/task/").concat(taskId), {
            headers: {
              Authorization: this.token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this18.task.taskIds.splice(indice, 1);

            _this18.task.taskNames.splice(indice, 1);

            _this18.task.taskStates.splice(indice, 1);
          }));
        }
      }, {
        key: "token",
        get: function get() {
          return "Bearer ".concat(localStorage.getItem('token') || '');
        }
      }]);

      return TaskService;
    }();

    TaskService.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tasks/tasks.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/tasks/tasks.component.ts ***!
    \************************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppPagesTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/task.service */
    "./src/app/pages/services/task.service.ts");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/project.service */
    "./src/app/pages/services/project.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/progress/progress.component */
    "./src/app/pages/components/progress/progress.component.ts");

    function TasksComponent_small_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimo 6 Caracteres");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function TasksComponent_small_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre Tarea Obligatoria");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function TasksComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksComponent_div_11_Template_i_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.updateTask(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksComponent_div_11_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.deleteTask(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nameTask_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", nameTask_r3, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r2.taskService.task.taskStates[i_r4] === 1 ? "var(--greenColor)" : "var(--redColor)");
      }
    }

    var TasksComponent = /*#__PURE__*/function () {
      function TasksComponent(router, taskService, formBuilder, loginService, activatedRoute, projectService) {
        _classCallCheck(this, TasksComponent);

        this.router = router;
        this.taskService = taskService;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.projectService = projectService;
        this.formNameTaskSubmitted = false;
        this.taskFormDataBuild();
      }

      _createClass(TasksComponent, [{
        key: "taskFormDataBuild",

        /**
         * Task Form Build
         */
        value: function taskFormDataBuild() {
          this.formForma = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
        /**
         * Task Form Send For Backend
         */

      }, {
        key: "taskFormDataSaved",
        value: function taskFormDataSaved() {
          if (this.formForma.status === 'INVALID' || this.formForma.dirty === false || this.formForma.valid === false) {
            this.formNameTaskSubmitted = true;
            return;
          }
          /* Send Data For Backend, If Is Right! */


          this.taskService.createTask(this.formForma.value.name, this.projectId).subscribe();
          this.formForma.reset();
        }
        /**
         * State Update Task Backend
         */

      }, {
        key: "updateTask",
        value: function updateTask(index) {
          this.taskService.updateTask(this.taskService.task.taskIds[index], index).subscribe();
        }
        /**
         * Delete Task For Backend
         */

      }, {
        key: "deleteTask",
        value: function deleteTask(index) {
          var _this19 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Estas Seguro?',
            text: 'Las Tareas Eliminadas No Se Pueden Recuperar!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Definitivamente!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.isConfirmed) {
              _this19.taskService.deleteTask(_this19.taskService.task.taskIds[index], index).subscribe();

              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Eliminado!', 'Tu Tarea Fue Eliminada.', 'success');
            }
          });
        }
        /**
         * Update Project For Backend
         */

      }, {
        key: "updateProject",
        value: function updateProject() {
          this.router.navigateByUrl("/dashboard/project/".concat(this.indexProject, "/").concat(this.projectUrl, "/").concat(this.projectId));
        }
        /**
         * Delete Task For Backend
         */

      }, {
        key: "deleteProject",
        value: function deleteProject() {
          var _this20 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Estas Seguro?',
            text: 'Los Proyectos Eliminadas No Se Pueden Recuperar!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar Definitivamente!',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.isConfirmed) {
              _this20.projectService.deleteProject(_this20.projectId, _this20.projectUrl, _this20.indexProject).subscribe(function () {
                return _this20.router.navigateByUrl('/dashboard');
              });

              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Eliminado!', 'Tu Archivo Fue Eliminado.', 'success');
            }
          });
        }
      }, {
        key: "taskNames",
        get: function get() {
          var _a;

          return (_a = this.taskService.task) === null || _a === void 0 ? void 0 : _a.taskNames;
        }
      }, {
        key: "titleProject",
        get: function get() {
          return this.loginService.projects.projectNames;
        }
      }, {
        key: "projectId",
        get: function get() {
          return this.loginService.projects.projectIds[this.indexProject];
        }
      }, {
        key: "projectUrl",
        get: function get() {
          return this.loginService.projects.projectUrls[this.indexProject];
        }
      }, {
        key: "indexProject",
        get: function get() {
          // tslint:disable-next-line: radix
          return parseInt(this.activatedRoute.snapshot.paramMap.get('indice'));
        }
        /*
         * Coditionals DOM
         */

      }, {
        key: "conditionalNameHTML",
        get: function get() {
          return this.formForma.get('name').invalid && this.formForma.get('name').dirty;
        }
      }, {
        key: "requiredNameHTML",
        get: function get() {
          return this.formNameTaskSubmitted && !this.formForma.get('name').dirty && !this.formForma.valid;
        }
      }]);

      return TasksComponent;
    }();

    TasksComponent.ɵfac = function TasksComponent_Factory(t) {
      return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]));
    };

    TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TasksComponent,
      selectors: [["app-tasks"]],
      decls: 24,
      vars: 5,
      consts: [["id", "article__form", 1, "article__form", "animated", "fadeIn", "fast"], [1, "section"], [1, "section__project"], ["autocomplete", "off", 1, "section__form", "main__form", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name"], [4, "ngIf"], ["type", "submit", "value", "Crear Tarea"], [1, "section__project", "section__task"], ["id", "before", "class", "section__form", 4, "ngFor", "ngForOf"], [1, "section__project", "section__buttons"], [1, "container__buttons"], [3, "click"], [1, "far", "fa-edit"], [1, "fas", "fa-trash-alt"], ["id", "before", 1, "section__form"], [1, "far", "fa-check-circle", 3, "click"], [1, "fas", "fa-trash-alt", 3, "click"]],
      template: function TasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TasksComponent_Template_form_ngSubmit_5_listener() {
            return ctx.taskFormDataSaved();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TasksComponent_small_7_Template, 2, 0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TasksComponent_small_8_Template, 2, 0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TasksComponent_div_11_Template, 6, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksComponent_Template_a_click_17_listener() {
            return ctx.updateProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Actualizar Proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksComponent_Template_a_click_21_listener() {
            return ctx.deleteProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Eliminar Proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Tareas - ", ctx.titleProject[ctx.indexProject], " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formForma);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.conditionalNameHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requiredNameHTML);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.taskNames);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__["ProgressComponent"]],
      styles: [".section__task[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.section__task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    padding: 0.7rem;\r\n    text-align: center;\r\n    border-bottom: none;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n.section__task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: solid 2px var(--lightColor);\r\n}\r\n\r\n.section__task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.section__task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.section__task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.section__task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\r\n    margin-right: 0.2rem;\r\n}\r\n\r\n.section__buttons[_ngcontent-%COMP%] {\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.section__buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.section__buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    margin: 0 auto;\r\n    padding: 0.5rem;\r\n    cursor: pointer;\r\n    font-size: 0.8rem;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    text-transform: uppercase;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .container__buttons[_ngcontent-%COMP%] {\r\n        height: 7rem;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 0.9rem;\r\n        padding: 1rem 0.5rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .section__task[_ngcontent-%COMP%] {\r\n        margin-top: 0.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb25fX3Rhc2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWN0aW9uX190YXNrIGRpdiB7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcclxufVxyXG5cclxuLnNlY3Rpb25fX3Rhc2sgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fdGFzayBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fdGFzayBwIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uX190YXNrIHAgc3BhbiBpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb25fX3Rhc2sgcCBzcGFuIGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uX19idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb25fX2J1dHRvbnMgZGl2IHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb25fX2J1dHRvbnMgYSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXJfX2J1dHRvbnMge1xyXG4gICAgICAgIGhlaWdodDogN3JlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25fX2J1dHRvbnMgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnNlY3Rpb25fX3Rhc2sge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIH1cclxufSJdfQ== */", ".section[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    margin: 1rem 0 0.5rem 0;\r\n}\r\n\r\n.section__form[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    padding: 0.5rem;\r\n    flex-direction: column;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    padding: 0.7rem;\r\n    margin: 0 0 .5rem 0;\r\n    border-radius: 15px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\ninput[type=\"submit\"][_ngcontent-%COMP%] {\r\n    width: 106px;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 10px;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n.article__form[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    height: 100vh;\r\n    grid-row-gap: 1rem;\r\n    justify-items: center;\r\n    grid-template-rows: 170px 1fr 1fr;\r\n}\r\n\r\n.main__form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    color: var(--redColor);\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 768px) {\r\n    .section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 1.2rem;\r\n    }\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 80%;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 1024px) {\r\n    .section__form[_ngcontent-%COMP%] {\r\n        width: 540px;\r\n    }\r\n    .section__buttons[_ngcontent-%COMP%] {\r\n        min-width: 540px;\r\n    }\r\n    input[type=\"text\"][_ngcontent-%COMP%] {\r\n        padding: 0.8rem;\r\n    }\r\n    input[type=\"submit\"][_ngcontent-%COMP%] {\r\n        width: 130px;\r\n        padding: 0.8rem;\r\n        font-size: 1.1rem;\r\n        border-radius: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQywrQ0FBK0M7SUFDL0Msb0RBQW9EO0lBQ3BELHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFHQSxzQ0FBc0M7O0FBRXRDO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3NzL3BhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fZm9ybSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICB3aWR0aDogMTA2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XHJcbn1cclxuXHJcbi5hcnRpY2xlX19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCAxZnIgMWZyO1xyXG59XHJcblxyXG4ubWFpbl9fZm9ybSBzbWFsbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkQ29sb3IpO1xyXG59XHJcblxyXG5cclxuLyogTUVESUEgUVVFUlkgR0VORVJBTFMgQVNJREUgSElEREVOICovXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3Rpb24gaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnNlY3Rpb25fX2Zvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA1NDBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uX19idXR0b25zIHtcclxuICAgICAgICBtaW4td2lkdGg6IDU0MHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-tasks',
          templateUrl: './tasks.component.html',
          styleUrls: ['./tasks.component.css', '../css/pages.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.name = 'Daniel Fernando';
        this.lastName = 'Yepez Vélez';
        this.date = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "Name",
        get: function get() {
          return this.name;
        }
      }, {
        key: "LastName",
        get: function get() {
          return this.lastName;
        }
      }, {
        key: "Date",
        get: function get() {
          return this.date;
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 3,
      consts: [[1, "footer", "animated", "fadeIn", "fast"], [1, "footer__paragraph"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\xA9 ", ctx.Name, " ", ctx.LastName, " - ", ctx.Date, "");
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\r\n    padding: 1rem 0;\r\n    text-align: center;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\n.footer__paragraph[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLCtDQUErQztJQUMvQyxvREFBb0Q7SUFDcEQsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tbGlnaHRDb2xvcik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG59XHJcblxyXG4uZm9vdGVyX19wYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/dashboard"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(loginService) {
        _classCallCheck(this, HeaderComponent);

        this.loginService = loginService;
      }

      _createClass(HeaderComponent, [{
        key: "logout",
        value: function logout() {
          this.loginService.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 11,
      vars: 2,
      consts: [[1, "header", "animated", "fadeIn", "fast"], [1, "header__container"], [1, "header__figure--logo", 3, "routerLink"], ["src", "./assets/image/logo.png", "alt", "logoImage", 1, "header__logo"], [1, "header__paragraph"], [1, "header__ul"], [3, "click"], [1, "header__item"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "UpTask - Administrador De Proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_8_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cerrar Sesion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".header[_ngcontent-%COMP%] {\r\n    padding: 0.2rem;\r\n    border: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\n.header__container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-items: center;\r\n    grid-template-rows: 35px auto;\r\n}\r\n\r\n.header__figure--logo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    cursor: pointer;\r\n    line-height: 40px;\r\n}\r\n\r\n.header__logo[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.header__paragraph[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.header__figure[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.header__image[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50px;\r\n}\r\n\r\n.header__ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n\r\n.header__item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 646px) {\r\n    .header[_ngcontent-%COMP%] {\r\n        padding: 0.4rem 1rem;\r\n    }\r\n    .header__container[_ngcontent-%COMP%] {\r\n        justify-items: end;\r\n        align-items: center;\r\n        grid-template-rows: initial;\r\n        grid-template-columns: repeat(auto-fit, minmax(302px, 1fr));\r\n    }\r\n    .header__figure--logo[_ngcontent-%COMP%] {\r\n        justify-self: start;\r\n        line-height: 50px;\r\n    }\r\n    .header__logo[_ngcontent-%COMP%] {\r\n        width: 45px;\r\n        height: 45px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsK0NBQStDO0lBQy9DLG9EQUFvRDtJQUNwRCx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsMkRBQTJEO0lBQy9EO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tbGlnaHRDb2xvcik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG59XHJcblxyXG4uaGVhZGVyX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzVweCBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVyX19maWd1cmUtLWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyX19sb2dvIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyX19wYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5oZWFkZXJfX2ZpZ3VyZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2ltYWdlIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmhlYWRlcl9fdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlcl9faXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBNRURJQSBRVUVSWVMgR0VORVJBTFMgKi9cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDY0NnB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBpbml0aWFsO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAycHgsIDFmcikpO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcl9fZmlndXJlLS1sb2dvIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcl9fbG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* Components */


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/services/login.service */
    "./src/app/auth/services/login.service.ts");
    /* harmony import */


    var _pages_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pages/services/task.service */
    "./src/app/pages/services/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SidebarComponent_p_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_p_10_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.showProject(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var name_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](name_r1);
      }
    }

    var _c0 = function _c0() {
      return ["/dashboard/projects"];
    };

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(loginService, taskService, router) {
        _classCallCheck(this, SidebarComponent);

        this.loginService = loginService;
        this.taskService = taskService;
        this.router = router;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.asideContainer = document.querySelector('#aside');
          this.landingPage = document.querySelector('#landing__page');
          this.projectComplete = document.querySelector('#project__complete');
          /* Project Complete New Width */

          this.projectComplete.classList.add('body__menu--hidden');
        }
      }, {
        key: "hiddenAside",
        value: function hiddenAside() {
          if (this.asideContainer.classList.contains('aside__hidden')) {
            /* Aside Hidden All */
            this.asideContainer.className = 'aside';
            /* Template Main Grid Modified */

            this.landingPage.className = 'main__dashboard';
            /* Project Complete New Width */

            this.projectComplete.classList.add('body__menu--hidden');
          } else {
            /* Aside Hidden All */
            this.asideContainer.className = 'aside__hidden';
            /* Template Main Grid Modified */

            this.landingPage.className = 'main__dashboard--hidden';
            /* Project Complete New Width */

            this.projectComplete.classList.remove('body__menu--hidden');
          }
        }
      }, {
        key: "showProject",
        value: function showProject(indice) {
          var _this21 = this;

          var projectId = this.loginService.projects.projectIds[indice];
          var projectUrl = this.loginService.projects.projectUrls[indice];
          this.taskService.tasks(projectId).subscribe(function () {
            return _this21.router.navigateByUrl("/dashboard/tasks/".concat(indice, "/").concat(projectUrl, "/").concat(projectId));
          });
        }
      }, {
        key: "projectNames",
        get: function get() {
          return this.loginService.projects.projectNames;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 13,
      vars: 3,
      consts: [[1, "aside__global", "animated", "fadeIn", "fast"], ["id", "aside", 1, "aside"], [1, "aside__bottom"], [3, "routerLink"], [1, "fas", "fa-plus"], [1, "aside__projects"], [1, "aside__list"], [4, "ngFor", "ngForOf"], [1, "aside__burger"], [1, "fas", "fa-bars", 3, "click"], [3, "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nuevo Proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Proyectos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SidebarComponent_p_10_Template, 4, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_i_click_12_listener() {
            return ctx.hiddenAside();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectNames);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".aside__global[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.aside__burger[_ngcontent-%COMP%] {\r\n    margin: .5rem 0 0 .5rem;\r\n}\r\n\r\n.aside__burger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n}\r\n\r\n.aside[_ngcontent-%COMP%] {\r\n    width: 105px;\r\n    height: 100vh;\r\n    padding: 0 0.3rem;\r\n    text-align: center;\r\n    border-left: solid 2px var(--lightColor);\r\n    border-right: solid 2px var(--lightColor);\r\n    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.46);\r\n}\r\n\r\n.aside__hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.aside__bottom[_ngcontent-%COMP%] {\r\n    width: 85px;\r\n    border: none;\r\n    outline: none;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 1rem .5rem;\r\n    border-radius: 12px;\r\n    margin: 2.5rem auto 4rem;\r\n    text-transform: uppercase;\r\n    background-color: var(--darkColor);\r\n}\r\n\r\n.aside__projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    text-align: center;\r\n    color: var(--darkColor);\r\n}\r\n\r\n.aside__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n\r\n.aside__list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.aside__list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    transition: all 1s ease;\r\n}\r\n\r\n.aside__list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n@media all and (min-width: 425px) {\r\n    .aside[_ngcontent-%COMP%] {\r\n        width: 130px;\r\n    }\r\n    .aside__bottom[_ngcontent-%COMP%] {\r\n        width: 114px;\r\n    }\r\n    .aside__projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n    .aside__list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .aside[_ngcontent-%COMP%] {\r\n        width: 230px;\r\n    }\r\n    .aside__bottom[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n        border-radius: 20px;\r\n        padding: 1.5rem .5rem;\r\n    }\r\n    .aside__burger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLG9EQUFvRDtJQUNwRCx1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0EsaUJBQWlCOztBQUVqQjtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzaWRlX19nbG9iYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmFzaWRlX19idXJnZXIge1xyXG4gICAgbWFyZ2luOiAuNXJlbSAwIDAgLjVyZW07XHJcbn1cclxuXHJcbi5hc2lkZV9fYnVyZ2VyIGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYXNpZGUge1xyXG4gICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCB2YXIoLS1saWdodENvbG9yKTtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLWxpZ2h0Q29sb3IpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40Nik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDYpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ2KTtcclxufVxyXG5cclxuLmFzaWRlX19oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmFzaWRlX19ib3R0b20ge1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogMi41cmVtIGF1dG8gNHJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xyXG59XHJcblxyXG4uYXNpZGVfX3Byb2plY3RzIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XHJcbn1cclxuXHJcbi5hc2lkZV9fbGlzdCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYXNpZGVfX2xpc3QgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5hc2lkZV9fbGlzdCBwIGxpIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hc2lkZV9fbGlzdCBwIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLyogTUVESUEgUVVFUllTICovXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xyXG4gICAgLmFzaWRlIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuYXNpZGVfX2JvdHRvbSB7XHJcbiAgICAgICAgd2lkdGg6IDExNHB4O1xyXG4gICAgfVxyXG4gICAgLmFzaWRlX19wcm9qZWN0cyBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuYXNpZGVfX2xpc3QgcCBsaSBhIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5hc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgfVxyXG4gICAgLmFzaWRlX19ib3R0b20ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAuNXJlbTtcclxuICAgIH1cclxuICAgIC5hc2lkZV9fYnVyZ2VyIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: _auth_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _pages_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://localhost:3000/api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Documents\ProyectosAngular\Development-Proyecto-TypeScript-Frontend-UpTask\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map