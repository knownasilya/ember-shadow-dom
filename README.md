# ember-shadow-dom

Write templates for your components inside of a Shadow DOM root.
Allows encapsulating styles (CSS) and markup (HTML) but using templates like
you're used to.

🛠 Support for SSR/FastBoot in Chrome 90+, [Release notes](https://developer.chrome.com/blog/new-in-chrome-90/#declarative).

🤔 Not sure what Shadow DOM is? Check out this [MDN article](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

> Compatibility: Most browsers support Shadow DOM (v1), except for IE11, see [CanIUse](https://caniuse.com/#feat=shadowdomv1) for details

[![npm version][npm-badge]][npm-badge-url]

## Compatibility

- Ember.js v3.24 or above
- Ember CLI v3.24 or above
- Node.js v12 or above

If using Ember < 3.20, this addon will use the private version of `{{in-element}}` via a polyfill.

## Installation

```sh
ember install ember-shadow-dom
```

## Usage

This addon provides a component called `ShadowRoot`.

```hbs
<ShadowRoot>
  <style>
    .internal { color: red; }
  </style>

  <span class='internal'>Internal</span>
</ShadowRoot>
```

This makes the encapsulating component's children a shadow root.

### Slots

In Shadow DOM you can generally use `<slots>`, but with Ember you can just use `{{yield}}`.

```hbs
{{! components/test.hbs }}
<ShadowRoot>
  <style>
    .internal { color: red; }
  </style>

  <span class='internal'>
    {{yield}}
  </span>
</ShadowRoot>
```

And you can call the component:

```hbs
<Test>
  Hello World!
</Test>
```

And the contents `Hello World!` will be inside the shadow root. If you need multiple
"slots", you can use [ember-named-blocks-polyfill](https://github.com/ember-polyfills/ember-named-blocks-polyfill).

```hbs
{{! components/card.hbs }}
<ShadowRoot ...attributes>
  <style>
    .title { color: red; } .body { margin-top: 1rem; }
  </style>

  <header class='title'>
    {{yield to='title'}}
  </header>

  <div class='body'>
    {{yield to='body'}}
  </div>
</ShadowRoot>
```

And use the component like so:

```hbs
<Card class='custom-card'>
  <:title>
    My title
  </:title>

  <:body>
    Some content here!
  </:body>
</Card>
```

## API

### `<ShadowRoot>` Component

#### Arguments

- `@mode` (string) - The mode of the Shadow Root, defaults to `'open'`. Can be `'open'` or `'closed'`.
  Note that `'closed'` mode prevents you from querying into the DOM of your components in tests.
- `@tagName` (string) - This defaults to `'div'`, but can be any valid element tag name used in HTML.
  Setting this argument changes the top level element that the shadow root is attached to.

## FastBoot/SSR

This addon supports ShadowDom in SSR (meaning your styles will remain the same on initial render and not change when rehydrated) in Chrome 90+

Other browser vendors should follow, but there is some risk that it never happens.
Details here: https://www.chromestatus.com/feature/5191745052606464

## Testing

Components with a open shadowroot can be tested using qunit-dom like so:

```js
let root = find('#internal').shadowRoot;
assert.dom('.block', root).hasText('template block text');
```

Where the template looks like:

```hbs
<ShadowRoot id='internal'>
  <div class='block'>template block text</div>
</ShadowRoot>
```

> Note: check out https://github.com/salesforce/kagekiri for piercing the shadow for querying elements

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## Attribution

Thanks to [@rwjblue](https://github.com/rwjblue) for realizing that `{{in-element}}` can be used for the shadow root!

## License

This project is licensed under the [MIT License](LICENSE.md).

[npm-badge]: https://badge.fury.io/js/ember-shadow-dom.svg
[npm-badge-url]: http://badge.fury.io/js/ember-shadow-dom
