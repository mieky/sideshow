# sideshow

**A minimalistic dashboard-as-a-service**

Sideshow is like a dashboard application, where instead of adding widgets you can have it show the sites you choose. It's perfect for showing bus timetables, weather and server status pages on your office kitchen, or funny GIFs in your screen saver.

Sideshow is easy to use and customize. Just open the HTML page with a number of parameters and you're done. Should work with any modern browser.

![Screenshot](https://github.com/mieky/sideshow/raw/master/sideshow-example.gif)

## Live examples

Three sites, 5-second delay, 30-second refresh:<br /> [delay=5&refresh=30&sites=url1,url2](http://mike.fi/sideshow/?delay=5&refresh=30&sites=http://chilicorn.org,http://www.futurice.com)

Two sites, one-minute delay, half-an-hour refresh (default):<br /> [delay=60&sites=url1,url2](http://mike.fi/sideshow/?delay=60&sites=http://chilicorn.org,http://www.futurice.com)

Showing URLs with special characters by URI-encoding them:<br />
[delay=60&sites=someEncodedUrl](http://mike.fi/sideshow/?delay=5&sites=http://mike.fi/sideshow/?delay=5&sites=https://www.djangopackages.com/search/%3Fq%3D%F0%9F%98%80%20emojis%2C%20baby) (*see link source*)

You can also link to a .gif to have it display fullscreen!<br />
[delay=3&sites=gif1,gif2](http://mike.fi/sideshow/?delay=3&sites=http://cdn.gifbay.com/2013/01/1_for_perfect_loop-26256.gif,http://38.media.tumblr.com/aed842e1fa863d6e991def1b9505d77f/tumblr_nx1lhqQZDl1rxpytqo1_400.gif)

## Usage

Navigate to the index.html, setting some query parameters:

```
http://mike.fi/sideshow/?
    delay=5
    &refresh=900
    &sites=http://chilicorn.org,http://www.futurice.com
```

- `delay` specifies seconds to wait before changing tab (defaults to 10)
- `refresh` specifies seconds between reloading all pages (defaults to 1800, set 0 to disable)
- `sites` is a comma-separated list of sites to cycle. URI encoding is supported.

You can actually use the URL http://mike.fi/sideshow for your needs, because no data gets saved on a server. It's just static HTML files served via GitHub pages.

Also see the note on [browser security restrictions.](#work-around-security-restrictions)

## How to...

### Install on my own server?

Just drop the files to a web server. That's it. You might as well use it from the live demo at http://mike.fi/sideshow, because your local data isn't saved anywhere (there's Google Analytics installed, though.)

### Work around security restrictions?

This is a common problem, and for good reasons. Many sites set an [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options) response header to tell the browser that this site should not be allowed inside a frame, and the browsers respect this.

If you love speed and danger and are running Chrome, you can **at your own risk** work around this by either consciously [installing an extension that disables this security mechanism](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe), or starting Chrome with `--disable-web-security`. After this, you should be able to use sideshow with i.e. the GitHub status page.

### Use URLs with special characters?

Worry not - you can URL encode your URLs, and sideshow knows to decode them. For example, try pasting this on your browser location bar:

`javascript:alert(encodeURIComponent("http://mysite.com/?complexParameters=true"))`

### Using it in a screen saver?

That's a great idea. In OS X you can use a [WebView screen saver](https://github.com/liquidx/webviewscreensaver) and then configure it with sideshow URLs. Just look up some cool [perfect loops](https://www.reddit.com/r/perfectloops) and your screen saver will be the coolest around.

## Todo

- Add a generator page for easily populating the parameters

## Acknowledgements

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities).

## License

[MIT](https://github.com/mieky/sideshow/blob/master/LICENSE)
