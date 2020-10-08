# Google Maps
Google Maps plugin for OctoberCMS

## Advantages
* Get directions on button click
* Customizible map marker
* Translatable content

## Requirements
* [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key) API Key, to add it to the plugin settings

## Optional
* [Translate](https://octobercms.com/plugin/rainlab-translate) plugin, if you want to include multilingual contents.

## Settings
This plugin creates a Settings menu item, found by navigating to **Settings > Google Maps > Google Maps Settings**. You must fill all the required fields.

`Marker Image` and `Directions Button Text` are optional fields. If you leave `Marker Image` field empty, default marker will be displayed.

For directions button to work, your website must have a secure origin such as HTTPS.

If [Translate](https://octobercms.com/plugin/rainlab-translate) is enabled, `Directions Button Text` is translatable.

## Usage
To use this plugin, first you must fill all the required settings. You can put the map on any front-end page. Add the `googleMap Component` to a page or layout.

The simplest way to add the map is to use the component's default partial and the `{% component %}` tag. Add it to a page or layout where you want to display the map:

    {% component 'googleMap' %}

If you want to add `Get Directions` button, you can include a component's partial located in the `plugins/grofgraf/googlemaps/components/googlemap/directions-button.htm` by adding

    {% partial 'googleMap::directions-button' %}
> Note that directions will only work if your website has a secure origin such as HTTPS

## Authors

* [GrofGraf](https://github.com/GrofGraf)

## License

The MIT License (MIT)

Copyright (c) 2017 GrofGraf

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
