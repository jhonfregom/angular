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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper light-blue\">\n      <a href=\"/\" class=\"brand-logo center\">\n          Angular App\n      </a>\n  </div>\n</nav>\n<div class=\"container\">\n \n  <app-tasks></app-tasks>\n  <app-add-task></app-add-task>\n</div>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tasks_tasks_component__ = __webpack_require__("./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_tasks_add_tasks_component__ = __webpack_require__("./src/app/components/add-tasks/add-tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_add_tasks_add_tasks_component__["a" /* AddTaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase, 'angularfs'),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-tasks/add-tasks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-tasks/add-tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-content\">\n    <span class=\"card-title\">Add Task</span>\n    <form (ngSubmit)=\"onSubmit()\" class=\"col s6\">\n      <div class=\"row\">\n        <div class=\"input-field col-s6\">\n          <input type=\"text\" placeholder=\"Add title\" [(ngModel)]=\"task.title\" name=\"title\">\n          <label>Title</label>\n        </div>\n        <div class=\"input-field col-s6\">\n            <input type=\"text\" placeholder=\"Add Description\" [(ngModel)]=\"task.description\" name=\"description\">\n            <label>Description</label>\n          </div>\n      </div>\n      <input type=\"submit\" class=\"btn light-blue\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-tasks/add-tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(taskService) {
        this.taskService = taskService;
        this.task = {
            title: '',
            description: ''
        };
    }
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent.prototype.onSubmit = function () {
        if (this.task.title != '' && this.task.description != '') {
            this.taskService.addTask(this.task);
            this.task.title = '';
            this.task.description = '';
        }
    };
    AddTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-task',
            template: __webpack_require__("./src/app/components/add-tasks/add-tasks.component.html"),
            styles: [__webpack_require__("./src/app/components/add-tasks/add-tasks.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tasks?.length > 0;else noTasks\">\n  <ul *ngFor=\"let task of tasks\" class=\"collection\">\n    <li class=\"collection-item\" (dblclick)=\"deleteTask($event, task)\">\n      <strong>{{ task.title }}</strong> : {{ task.description }} \n      <a href=\"#\" class=\"secondary-content\">\n        <i (click)=\"deleteTask($event, task)\" class=\"fa fa-trash\"></i>\n        <i (click)=\"editTask($event, task)\" class=\"fa fa-pencil\"></i>\n      </a>\n      <div *ngIf=\"editState && taskToEdit.id === task.id\">\n        <form (ngSubmit)=\"updateTask(task)\">\n          <div class=\"row\">\n            <div class=\"input-field col s6\">\n              <input \n                type=\"text\" name=\"title\"\n                placeholder=\"Edit Title\" [(ngModel)]=\"task.title\">\n            </div>\n            <div class=\"input-field col s6\">\n                <input \n                  type=\"text\" name=\"description\"\n                  placeholder=\"Edit Description\" [(ngModel)]=\"task.description\">\n            </div>\n            <input type=\"submit\" class=\"btn\" value=\"Update Task\">\n            <button class=\"btn red\" (click)=\"deleteTask($event, task)\">Delete Task</button>\n          </div>\n        </form>\n      </div>\n\n    </li>\n  </ul>\n</div>\n\n<ng-template #noTasks>\n  <h5>There is not Tasks yet.</h5>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.editState = false;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            //console.log(tasks);
            _this.tasks = tasks;
        });
    };
    TasksComponent.prototype.deleteTask = function (event, task) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.taskService.deleteTask(task);
        }
        return;
    };
    TasksComponent.prototype.editTask = function (event, task) {
        this.editState = !this.editState;
        this.taskToEdit = task;
    };
    TasksComponent.prototype.updateTask = function (task) {
        this.taskService.updateTask(task);
        this.taskToEdit = null;
        this.editState = false;
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("./src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__("./src/app/components/tasks/tasks.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(afs) {
        this.afs = afs;
        this.tasksCollection = this.afs.collection('tasks');
        // this.tasks = this.afs.collection('tasks').valueChanges();
        this.tasks = this.tasksCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    TaskService.prototype.getTasks = function () {
        return this.tasks;
    };
    TaskService.prototype.addTask = function (task) {
        this.tasksCollection.add(task);
    };
    TaskService.prototype.deleteTask = function (task) {
        this.taskDoc = this.afs.doc("tasks/" + task.id);
        this.taskDoc.delete();
    };
    TaskService.prototype.updateTask = function (task) {
        this.taskDoc = this.afs.doc("tasks/" + task.id);
        this.taskDoc.update(task);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], TaskService);
    return TaskService;
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
    firebase: {
        apiKey: "AIzaSyD2WbJN4oxYF__VRjKpomqBHtE0Ur4PaUE",
        authDomain: "crud-3fa3d.firebaseapp.com",
        databaseURL: "https://crud-3fa3d.firebaseio.com",
        projectId: "crud-3fa3d",
        storageBucket: "crud-3fa3d.appspot.com",
        messagingSenderId: "593423963488"
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