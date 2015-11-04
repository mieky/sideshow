# sideshow

An easily customizable drop-in-place HTML page for cycling between websites. Useful for dashboard
displays.

**Requires Chrome 46+, or any modern ES6-compliant browser.**

## Live demo

[http://mike.fi/sideshow](http://mike.fi/sideshow/?delay=5&refresh=30&sites=http://yle.fi/uutiset/news/,http://www.futurice.com,http://www.alupark.fi)

You can actually use this URL for your needs, because no data gets saved on a server. It's just static HTML files.

## Usage

Just navigate to the index.html, setting some query parameters:

 `http://mike.fi/sideshow/?delay=5&sites=http://www.yle.fi,http://www.futurice.com,http://www.alupark.fi`

- `delay` specifies seconds to wait before changing tab (defaults to 10)
- `refresh` specifies seconds between reloading all pages (defaults to 1800, set 0 to disable)
- `sites` is a comma-separated list of sites to cycle. URI encoding is supported.

## How to...

### Install on my own server?

Just drop the files to a web server. That's it. You might as well use it from the live demo at http://mike.fi/sideshow, because your local data isn't saved anywhere.

### Work around security restrictions?

This is a common problem, and for good reasons. Many sites set an [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) response header to tell the browser that this site should not be allowed inside a frame, and the browsers respect this.

If you love speed and danger and are running Chrome, you can **at your own risk** work around this by either consciously [installing an extension that disables this security mechanism](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe), or starting the browser with `--disable-web-security`. After this, you should be able to use sideshow with i.e. the GitHub status page.

#### Use URLs with special characters?

Worry not - you can URL encode your URLs, and sideshow knows to decode them. For example, try pasting this on your browser location bar:

`javascript:alert(encodeURIComponent("http://mysite.com/?complexParameters=true"))`

## Todo

- Support fullscreen animated .gifs
- ES5 support for those legacy (*tee hee*) browsers

## Acknowledgements

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities).

## License

[MIT](https://github.com/mieky/sideshow/blob/master/LICENSE)
