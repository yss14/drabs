# drabs.js - NPM ready

Drabs is a collection of little JavaScript utilities that have their origin in the weekly [A Drip of JavaScript newsletter][drip].

The name is a pun on the ([incorrect][phrase]) phrase "drips and drabs", meaning little by little.

In addition to GitHub issues, discussion of Drabs is also welcome on the [JS Drip Google Group][group].

## How to use
Install via `npm install drabs` or `yarn add drabs`

```
import {deepGet} from 'drabs';

let val = deepGet(obj, ["Viola", "Harry", "Sally"], {});

//or

let val = deepGet(obj, ["Viola.Harry.Sally"], {});
```

## License

Drabs is released under the MIT license.

## Books by the Author

[![A Drip of JavaScript - The Complete Collection](https://s3.amazonaws.com/titlepages.leanpub.com/a-drip-of-javascript-book/bookpage?1365940791)][dripbook] [![Jasmine Testing - A Cloak & Dagger Guide](https://s3.amazonaws.com/titlepages.leanpub.com/jasmine-testing/bookpage?1363557125)][jasminebook]

[drip]:http://adripofjavascript.com
[phrase]:http://grammarist.com/usage/dribs-and-drabs/
[group]:https://groups.google.com/forum/?fromgroups#!forum/js-drip-discussions
[dripbook]:https://leanpub.com/a-drip-of-javascript-book/
[jasminebook]:https://leanpub.com/jasmine-testing/

