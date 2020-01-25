# angular-config-driven-layout

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-config-driven-layout)

## Purpose
This app demonstrates using a config to describe the layout of our application. 

## Configuration
For the purposes of this demo app the configuration is as follows.

```js
this.config = {
     mainColumn:
      [
        { // Each top level object denotes a panel
          tag: 'advtech-panel',
          label: 'Main Details',
          children: [
            { // Each child will be inserted into the panel
              tag: 'advtech-text-input', // Each tag correspondes to a custom web component
              label: 'Headline'
            },
            {
              tag: 'advtech-textarea-input',
              label: 'Dek'
            }
          ]
        },
        ...
      ]
}
```

## Building the page
### Reading the config
Our pages will have acces to the `EnvConfigService` and the `PageBuilderService`. The pages should iterrate through the columns of the configuration and pass in each column configuration and the `ViewContainerRef` where we will append the panels. The ViewCOntainerRef is grabbed by the `ViewChild` decorator as below:

```ts
@ViewChild('insertionPoint', {read: ViewContainerRef, static: true })
public insertionPoint: ViewContainerRef;
```

This corresponds to the named element in the template.
```html
<div #insertionPoint></div>
```

### The PageBuilder Service
The PageBuilder Service keeps a registry of the wrappers created keyed on their form names. For this example it also provides a function `buildColumns` that will use the column configuration and the `ComponentWrapperLoaderService` to instantiate our web components.

### The Component Wrapper Loader Service
Thie service provides a wrapper for [Angulars Dynamic Component Loader](https://angular.io/guide/dynamic-component-loader) and returns a the `ComponentRef` object that is created in the process.

### The Wrapper component
The wrapper component for this example provides a mechanism to instantiate our custom web components. It provides an insertion point to put our component and stores the ElementRef for later use

```ts
  createElement(config) {
    this.element = document.createElement(config.tag);
    this.element.label = config.label;
    this.insertionPoint.element.nativeElement.append(this.element);
    this.elementRef = new ElementRef(this.element);
  }
```

You can see an example of this all working together on [StackBlitz ⚡️](https://stackblitz.com/edit/angular-config-driven-layout)