ember-shadow-dom
================

Write templates for your components inside of a Shadow DOM root.
Allows encapsulating styles (CSS) and markup (HTML) but using templates like
you're used to.

> Note: This addon uses a private API `{{-in-element}}`, but this API is on it's
> way to becoming public. See [RFC 287](https://github.com/emberjs/rfcs/pull/287),
> which was recently accepted.

Not sure what Shadow DOM is? Check out this [MDN article](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

> Compatibility: Not all browsers support Shadow DOM (v1) yet, see [CanIUse](https://caniuse.com/#feat=shadowdomv1)
> to see if your target browsers support this new feature.

[![npm version][npm-badge]][npm-badge-url] 

[Try it in a CodeSandbox](https://codesandbox.io/s/kx0x7xr8mv)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.7.2 or above ([See why][see-why])
* Ember CLI v2.13 or above


Installation
------------

```sh
ember install ember-shadow-dom
```

Usage
-----

This addon provides a component called `ShadowDom` (or `shadow-dom` if not using angle brackets)

```hbs
<ShadowDom>
  <style>
    .internal {
      color: red;
    }
  </style>

  <span class='internal'>Internal</span>
</ShadowDom>
```

This mode makes the encapsulating component's children a shadow root.



API
---

### `ShadowDom` (`shadow-dom`)

#### Arguments

- `@mode` (string) - The mode of the Shadow Root, defaults to `'open'`. Can be `'open'` or `'closed'`.
Note that `'closed'` mode prevents you from querying into the DOM of your components in tests.
- `@tagName` (string) - This defaults to `'div'`, but can be any valid element tag name used in HTML.
Setting this argument changes the top level element that the shadow root is attached to.

Testing
-------

Components with a open shadowroot can be tested using qunit-dom like so:

```js
let root = find('#internal').shadowRoot;
assert.dom('.block', root).hasText('template block text');
```

Where the template looks like:

```hbs
<ShadowDom id='internal'>
  <div class='block'>template block text</div>
</ShadowDom>
```

Contributing
------------

See the [Contributing](CONTRIBUTING.md) guide for details.


Attribution
-----------

Thanks to [@rwjblue](https://github.com/rwjblue) for realizing that `{{-in-element}}` can be used for the shadow root!


License
-------

This project is licensed under the [MIT License](LICENSE.md).

[npm-badge]: https://badge.fury.io/js/ember-shadow-dom.svg
[npm-badge-url]: http://badge.fury.io/js/ember-shadow-dom
[see-why]: https://github.com/tildeio/ember-element-helper/issues/6#issuecomment-519349886]]
