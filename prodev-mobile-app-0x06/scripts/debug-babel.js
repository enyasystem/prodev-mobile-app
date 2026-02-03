const path = require('path');
const util = require('util');
const babel = require('@babel/core');

const file = path.resolve(__dirname, '..', 'node_modules', 'expo-router', 'entry.js');
console.log('Inspecting babel config for:', file);
try {
  const config = babel.loadPartialConfig({ filename: file });
  if (!config) {
    console.log('No config returned');
    process.exit(0);
  }
  const opts = config.options || {};
  console.log('Presets:', (opts.presets || []).length);
  const plugins = opts.plugins || [];
  console.log('Found', plugins.length, 'plugins in resolved config.');
  plugins.forEach((p, i) => {
    let info = {};
    if (Array.isArray(p)) {
      info.type = 'array';
      info.first = typeof p[0] === 'function' ? p[0].name || '<function>' : p[0];
      info.second = typeof p[1];
      if (p[0] && typeof p[0] === 'object') {
        info.keys = Object.keys(p[0]);
      }
    }
    else if (typeof p === 'function') {
      info.type = 'function';
      info.name = p.name || '<function>';
    }
    else if (p && typeof p === 'object') {
      info.type = 'object';
      info.keys = Object.keys(p);
    }
    else {
      info.type = typeof p;
    }
    console.log(`#${i}:`, util.inspect(info, { depth: 2 }));
    console.log('full descriptor:', util.inspect(p, { depth: 4 }));
  });
} catch (err) {
  console.error('Error loading babel config:');
  console.error(err && err.stack ? err.stack : err);
  process.exit(2);
}
