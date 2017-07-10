import { something, __Rewire__, __ResetDependency__ } from '../src/index.js';

__Rewire__('message', 'baz!');

something();

__ResetDependency__('message');

