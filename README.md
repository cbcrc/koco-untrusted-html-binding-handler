# koco-untrusted-html-binding-handler
Knockout binding handler like html, but for html you don't trust!

## Installation

```bash
bower install koco-untrusted-html-binding-handler

## Usage with KOCO

This is a shared module that is used in many other module. The convention is to configure an alias in the `require.configs.js` with the name `untrusted-html-binding-handler` like so:

```javascript
paths: {
  ...
  'untrusted-html-binding-handler' : 'bower_components/koco-untrusted-html-binding-handler/src/untrusted-html-binding-handler'
  ...
}
```