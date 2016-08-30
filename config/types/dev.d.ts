/**
 * Type declerations for global development variables
 */

/// <reference path="../../node_modules/@types/node/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../node_modules/@types/redux/index.d.ts" />

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => any;
  __INITIAL_STATE__?: any;
  __commit?: string;
  t: any;
}

declare var t: any;

interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}