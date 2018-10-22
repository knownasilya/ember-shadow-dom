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

Installation
------------

```sh
ember install ember-shadow-dom
```

Usage
-----

This addon provides a component called `ShadowDom` (or `shadow-dom` if not using angle brackets)

```hbs
<ShadowDom @el={{this.element}}>
  <style>
    .internal {
      color: red;
    }
  </style>

  <span class='internal'>Internal</span>
</ShadowDom>
```

This mode makes the encapsulating component's children a shadow root, meaning
it does not support having any elements outside of the `ShadowDom` component block.

To mix shadow and normal templates, you could take advantage of the `@selector`
attribute (at least until we have something like a `ref` helper in Ember).

```hbs
<div id='internal'></div>
Outside of the shadow dom

<ShadowDom @selector='#internal'>
  <style>
    .internal {
      color: red;
    }
  </style>

  <span class='internal'>Internal</span>
</ShadowDom>
```

API
---

### `ShadowDom` (`shadow-dom`)

#### Attributes

- `@selector` (string) - selector used by `document.querySelector` to get the element to
which the shadow root is attached.
- `@el` (HTMLElement) - the actual element that you want to attach the shadow root to. This attribute
will always take precedence over `@selector`.
- `@mode` (string) - The mode of the Shadow Root, defaults to `'open'`.

Contributing
------------

See the [Contributing.md](./CONTRIBUTING.md) guide.

Attribution
-----------

Thanks to @rwjblue for realizing that `{{-in-element}}` can be used for the shadow root!

License
-------

This project is licensed under the [MIT License](LICENSE.md).
