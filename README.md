# IP to CI

Find out if an IP belongs to a CI service.

We use this internally on [Surge](https://surge.sh), since you can publish via [Travis CI](https://surge.sh/help/integrating-with-travis-ci), Wercker, or other CI services.

## Getting started

To use this module, install it as a dependency using [npm](https://npmjs.org):

```sh
npm install --save ip-to-ci
```

Then, pass it an IP address and you’ll get a CI service name in return:

```js
var ipci = require('ip-to-ci')

ipci('192.168.1.1')     // 192.168.1.1
ipci('54.172.141.90')   // Travis CI
ipci('54.175.201.227')  // Wercker
```

## Contributing

Thanks for considering contributing! Run the following commands to get started locally:

```sh
# Clone the project
git clone https://github.com/surge-sh/ip-to-ci

# Move into the project directory
cd ip-to-ci

# Install dependencies
npm install

# Run the tests
npm test
```

We’d love to add support for [CircleCI](http://circleci.com), [Codeship](http://codeship.com), and [Buildkite](http://buildkite.com) to this module, but haven’t found a good way to do that yet. If you want to open an issue or pull request for this, we’re more than happy to discuss it. Thanks!

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 [Chloi Inc.](http://chloi.io)
