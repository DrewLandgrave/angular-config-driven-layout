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

## Wrapper Component
