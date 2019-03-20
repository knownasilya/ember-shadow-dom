'use strict';

const BroccoliFilter = require('broccoli-persistent-filter');
const md5Hex = require('md5-hex');
const path = require('path');

class ShadowDomProcessor extends BroccoliFilter {
  constructor(inputNode, options = {}) {
    if (!options.hasOwnProperty('persist')) {
      options.persist = true;
    }

    super(inputNode, {
      annotation: options.annotation,
      persist: options.persist
    });

    this.options = options;
    this._console = this.options.console || console;

    this.extensions = [ 'hbs', 'handlebars' ];
    this.targetExtension = 'hbs';
  }

  baseDir() {
    return __dirname;
  }

  cacheKeyProcessString(string, relativePath) {
    return md5Hex([
      string,
      relativePath
    ]);
  }

  processString(contents, relativePath) {
    let alreadyWrapped = contents.includes('shadow-dom') || contents.includes('ShadowDom');
    if (alreadyWrapped) {
      return contents;
    }

    let result = `
      <ShadowDom>
        ${contents}
      </ShadowDom>
    `;
    return result;
  }
}

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    const podModulePrefix = this.project.config().podModulePrefix;

    registry.add('template', {
      name: 'ember-shadow-dom',
      ext: 'hbs',
      toTree: (tree) => {
        let componentsRoot = podModulePrefix ?
          path.join(this.project.root, podModulePrefix) :
          path.join(this.project.root, 'app');
        tree = new ShadowDomProcessor(tree, { root: componentsRoot });
        return tree;
      }
    });

    if (type === 'parent') {
      this.parentRegistry = registry;
    }
  },
};
