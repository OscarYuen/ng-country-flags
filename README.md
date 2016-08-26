# angular-countryflags-directive
AngularJS directive to embed country flags by using flag-icon-css library

Install
-------
You can either [download](https://github.com/OscarYuen/angular-countryflags-directive/archive/master.zip)
the whole project as is or install it via NPM:

```bash
$ npm install ng-country-flags
```

## Usage
Put the css, flags, js folders under dist foler into the path where your appliaction css,svg and js resources locates. 

Use the tag 'countryflags' with attribute 'country="xx"' (where `xx` is the
[ISO 3166-1-alpha-2 code](http://www.iso.org/iso/country_names_and_code_elements)
of a country). If you want to have a squared version flag
then add the attribute 'isSquare="true"' as well. Example:

```html
<countryflag country="en">English</countryflag>
<countryflag country="en" isSquare="true">English <span class="caret"></span></countryflag>
```

## Development

Run the `npm install` to install the dependencies after cloning the project and
you'll be able to:

To build minified js and css

```bash
$ grunt
```

To build non-minified js and css 

```bash
$ grunt dev
```

