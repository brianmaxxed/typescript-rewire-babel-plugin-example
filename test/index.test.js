import { something, __Rewire__, __ResetDependency__ } from '../src/index.ts';

__Rewire__('message', 'baz!');

something();

__ResetDependency__('message');

