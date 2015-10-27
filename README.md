# sideshow

An easily customizable drop-in-place HTML page for cycling between websites. Useful for dashboard
displays.

## Usage

With Chrome 46+ (or any ES6-compliant enough browser):

Put the HTML somewhere and navigate to `index.html?delay=5&sites=http://www.yle.fi,http://www.futurice.com,http://www.alupark.fi`

- `delay` specifies seconds to wait before changing tab
- `sites` is a comma-separated list of sites to cycle. Each value can be URL-encoded if required.

## Todo

- Implement settings, cache previous configuration
- Support fullscreen animated .gifs
- ES5 support for those legacy (*tee hee*) browsers

## Acknowledgements

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities).

## License

[MIT](https://github.com/mieky/sideshow/blob/master/LICENSE)
