# documentationjs-markdown-api-example

An example for documentationjs + markdown reference.

## Update Usage

Automatically, update "Usage" section with documentation result.

    npm install
    npm run update:docs

## Usage

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [hello][1]
  - [Parameters][2]
- [updateProp][3]
  - [Parameters][4]
- [report][5]
  - [Parameters][6]

### hello

Return Hello message

#### Parameters

- `name` **[string][7]** 

Returns **[string][7]** 

### updateProp

update property with `propertyValue` if the `propertyName` does not exists

#### Parameters

- `object` **any** 
- `propertyName` **[string][7]** 
- `propertyValue` **[string][7]** 
- `options` **{force: [boolean][8]}**  (optional, default `{}`)

### report

report message

#### Parameters

- `message` **[string][7]** 

[1]: #hello

[2]: #parameters

[3]: #updateprop

[4]: #parameters-1

[5]: #report

[6]: #parameters-2

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

## Changelog

See [Releases page](https://github.com/azu/documentationjs-markdown-api-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/documentationjs-markdown-api-example/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu