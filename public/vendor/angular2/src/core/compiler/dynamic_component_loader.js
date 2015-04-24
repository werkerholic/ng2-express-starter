System.register(["rtts_assert/rtts_assert", "angular2/di", "./compiler", "./directive_metadata_reader", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/core/annotations/annotations", "angular2/src/core/compiler/view_factory", "angular2/src/core/compiler/view_hydrator", "./element_injector", "./view"], function($__export) {
  "use strict";
  var assert,
      Key,
      Injector,
      Injectable,
      ResolvedBinding,
      Compiler,
      DirectiveMetadataReader,
      Type,
      BaseException,
      stringify,
      isPresent,
      Promise,
      Component,
      ViewFactory,
      AppViewHydrator,
      ElementRef,
      DirectiveBinding,
      AppView,
      ComponentRef,
      DynamicComponentLoader;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      Key = $__m.Key;
      Injector = $__m.Injector;
      Injectable = $__m.Injectable;
      ResolvedBinding = $__m.ResolvedBinding;
    }, function($__m) {
      Compiler = $__m.Compiler;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      Type = $__m.Type;
      BaseException = $__m.BaseException;
      stringify = $__m.stringify;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      Component = $__m.Component;
    }, function($__m) {
      ViewFactory = $__m.ViewFactory;
    }, function($__m) {
      AppViewHydrator = $__m.AppViewHydrator;
    }, function($__m) {
      ElementRef = $__m.ElementRef;
      DirectiveBinding = $__m.DirectiveBinding;
    }, function($__m) {
      AppView = $__m.AppView;
    }],
    execute: function() {
      ComponentRef = $__export("ComponentRef", (function() {
        var ComponentRef = function ComponentRef(location, instance, componentView) {
          assert.argumentTypes(location, ElementRef, instance, assert.type.any, componentView, AppView);
          this.location = location;
          this.instance = instance;
          this.componentView = componentView;
        };
        return ($traceurRuntime.createClass)(ComponentRef, {
          get injector() {
            return this.location.injector;
          },
          get hostView() {
            return this.location.hostView;
          }
        }, {});
      }()));
      Object.defineProperty(ComponentRef, "parameters", {get: function() {
          return [[ElementRef], [assert.type.any], [AppView]];
        }});
      DynamicComponentLoader = $__export("DynamicComponentLoader", (function() {
        var DynamicComponentLoader = function DynamicComponentLoader(compiler, directiveMetadataReader, viewFactory, viewHydrator) {
          assert.argumentTypes(compiler, Compiler, directiveMetadataReader, DirectiveMetadataReader, viewFactory, ViewFactory, viewHydrator, AppViewHydrator);
          this._compiler = compiler;
          this._directiveMetadataReader = directiveMetadataReader;
          this._viewFactory = viewFactory;
          this._viewHydrator = viewHydrator;
        };
        return ($traceurRuntime.createClass)(DynamicComponentLoader, {
          loadIntoExistingLocation: function(type, location) {
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            var $__0 = this;
            assert.argumentTypes(type, Type, location, ElementRef, injector, Injector);
            this._assertTypeIsComponent(type);
            var annotation = this._directiveMetadataReader.read(type).annotation;
            var componentBinding = DirectiveBinding.createFromType(type, annotation);
            return assert.returnType((this._compiler.compile(type).then((function(componentProtoView) {
              var componentView = $__0._viewFactory.getView(componentProtoView);
              var hostView = location.hostView;
              $__0._viewHydrator.hydrateDynamicComponentView(hostView, location.boundElementIndex, componentView, componentBinding, injector);
              return new ComponentRef(location, location.elementInjector.getDynamicallyLoadedComponent(), componentView);
            }))), assert.genericType(Promise, ComponentRef));
          },
          loadIntoNewLocation: function(elementOrSelector, type, location) {
            var injector = arguments[3] !== (void 0) ? arguments[3] : null;
            var $__0 = this;
            assert.argumentTypes(elementOrSelector, assert.type.any, type, Type, location, ElementRef, injector, Injector);
            this._assertTypeIsComponent(type);
            return assert.returnType((this._compiler.compileInHost(type).then((function(hostProtoView) {
              var hostView = $__0._viewFactory.getView(hostProtoView);
              $__0._viewHydrator.hydrateInPlaceHostView(null, elementOrSelector, hostView, injector);
              var newLocation = new ElementRef(hostView.elementInjectors[0]);
              var component = hostView.elementInjectors[0].getComponent();
              return new ComponentRef(newLocation, component, hostView.componentChildViews[0]);
            }))), assert.genericType(Promise, ComponentRef));
          },
          _assertTypeIsComponent: function(type) {
            assert.argumentTypes(type, Type);
            var annotation = this._directiveMetadataReader.read(type).annotation;
            if (!(annotation instanceof Component)) {
              throw new BaseException(("Could not load '" + stringify(type) + "' because it is not a component."));
            }
          }
        }, {});
      }()));
      Object.defineProperty(DynamicComponentLoader, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DynamicComponentLoader, "parameters", {get: function() {
          return [[Compiler], [DirectiveMetadataReader], [ViewFactory], [AppViewHydrator]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoExistingLocation, "parameters", {get: function() {
          return [[Type], [ElementRef], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype.loadIntoNewLocation, "parameters", {get: function() {
          return [[assert.type.any], [Type], [ElementRef], [Injector]];
        }});
      Object.defineProperty(DynamicComponentLoader.prototype._assertTypeIsComponent, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});
//# sourceMappingURL=dynamic_component_loader.es6.map

//# sourceMappingURL=./dynamic_component_loader.js.map