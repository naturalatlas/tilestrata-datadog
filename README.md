# tilestrata-datadog
[![NPM version](http://img.shields.io/npm/v/tilestrata-datadog.svg?style=flat)](https://www.npmjs.org/package/tilestrata-datadog)
[![Build Status](https://travis-ci.org/naturalatlas/tilestrata-datadog.svg)](https://travis-ci.org/naturalatlas/tilestrata-datadog)
[![Coverage Status](http://img.shields.io/coveralls/naturalatlas/tilestrata-datadog/master.svg?style=flat)](https://coveralls.io/r/naturalatlas/tilestrata-datadog)

A [TileStrata](https://github.com/naturalatlas/tilestrata) plugin for sending timing metrics to [Datadog](https://www.datadoghq.com/).

```sh
$ npm install tilestrata-datadog --save
```

### Sample Usage

```js
var datadog = require('tilestrata-datadog');

server.layer('mylayer').route('tile.png')
    .use(datadog());
```

## Contributing

Before submitting pull requests, please update the [tests](test) and make sure they all pass.

```sh
$ npm test
```

## License

Copyright &copy; 2015 [Natural Atlas, Inc.](https://github.com/naturalatlas) & [Contributors](https://github.com/naturalatlas/tilestrata-datadog/graphs/contributors)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
