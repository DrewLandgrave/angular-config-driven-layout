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

### The page builder
We then use this element and inject it into our column ViewContainerReference.

```ts
  private buildPage() {
    this.config.mainColumn.forEach(config => {
      const panel = this.componentWrapperLoaderService.loadComponent(this.mainColumn);
      panel.instance.createElement(config);
      config.children.forEach(childConfig => {
        const wrapperComponentComponentRef: ComponentRef<WrapperComponent> =
          this.componentWrapperLoaderService.loadComponent(panel.instance.insertionPoint);
        wrapperComponentComponentRef.instance.createElement(childConfig);
        this.wrapperRegistry[childConfig.formName] = wrapperComponentComponentRef;
        (panel.instance.element as any).insertChild(wrapperComponentComponentRef.hostView);
        const domElement = document.createElement(childConfig.tag);
        domElement.label = childConfig.label;
      });
    });
  }
```