"use strict";define("ember-form-examples/app",["exports","ember","ember/resolver","ember/load-initializers","ember-form-examples/config/environment"],function(e,t,n,r,a){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),r["default"](l,a["default"].modulePrefix),e["default"]=l}),define("ember-form-examples/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-form-examples/config/environment"],function(e,t,n){var r=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:r})}),define("ember-form-examples/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-form-examples/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("ember-form-examples/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-form-examples/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:t["default"](n["default"].APP.name,n["default"].APP.version)}}),define("ember-form-examples/initializers/export-application-global",["exports","ember","ember-form-examples/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("ember-form-examples/router",["exports","ember","ember-form-examples/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){this.route("examples",function(){this.route("sign-in")})}),e["default"]=r}),define("ember-form-examples/routes/examples/sign-in",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return t["default"].Object.create({email:null,password:null})}})}),define("ember-form-examples/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("ember-form-examples/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"ember-form-examples/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("ember-form-examples/templates/examples/sign-in",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.0.0",loc:{source:null,start:{line:1,column:0},end:{line:16,column:0}},moduleName:"ember-form-examples/templates/examples/sign-in.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),r=e.createTextNode("Sign in Example");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("form"),r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div"),a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("label");e.setAttribute(a,"for","email");var l=e.createTextNode("Email Address");e.appendChild(a,l),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("div"),a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("label");e.setAttribute(a,"for","password");var l=e.createTextNode("Password");e.appendChild(a,l),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("button");e.setAttribute(r,"type","submit");var a=e.createTextNode("Submit");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[2]),a=new Array(2);return a[0]=e.createMorphAt(e.childAt(r,[1]),3,3),a[1]=e.createMorphAt(e.childAt(r,[3]),3,3),a},statements:[["inline","input",[],["id","email","value",["subexpr","@mut",[["get","model.email",["loc",[null,[6,29],[6,40]]]]],[],[]]],["loc",[null,[6,4],[6,42]]]],["inline","input",[],["id","password","value",["subexpr","@mut",[["get","model.password",["loc",[null,[11,32],[11,46]]]]],[],[]],"type","password"],["loc",[null,[11,4],[11,64]]]]],locals:[],templates:[]}}())}),define("ember-form-examples/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.0.0",loc:{source:null,start:{line:8,column:6},end:{line:8,column:44}},moduleName:"ember-form-examples/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Sign In");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.0.0",loc:{source:null,start:{line:1,column:0},end:{line:10,column:0}},moduleName:"ember-form-examples/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),r=e.createTextNode("Form Examples");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),r=e.createTextNode("\n  The goal of this project is to enumerate a list of form scenarios in order\n  to fully discover the issues a form library would ideally solve.\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("ul"),r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("li"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[4,1]),0,0),r},statements:[["block","link-to",["examples.sign-in"],[],0,null,["loc",[null,[8,6],[8,56]]]]],locals:[],templates:[e]}}())}),define("ember-form-examples/config/environment",["ember"],function(e){var t="ember-form-examples";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("ember-form-examples/tests/test-helper"):require("ember-form-examples/app")["default"].create({name:"ember-form-examples",version:"0.0.0+26a04b5a"});