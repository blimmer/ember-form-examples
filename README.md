# ember-form-examples

The goal of this project is to enumerate a list of form scenarios in order
to fully discover the issues a form library would ideally solve.

[related ember-cp-validations issue](https://github.com/offirgolan/ember-cp-validations/issues/23)

## Contributing

### Examples
Please submit your own nested route under the examples namespace. To do this:

1. Fork the repo
2. `ember g route example/<your-example-name>`
  * Make sure your example is scoped to your route
  * Write up a quick description of the form directly on the template
3. Submit a PR

You can see the current form examples in action [here](http://blimmer.github.io/ember-form-examples/).

### Other considerations
If there are other situations we should consider, please open an issue for discussion.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
