# NetAureliaSample
ASP.NET Core Aurelia Sample project

This is based off the work done by the ASP.NET core team as detailed in the [blog post by Steve Sanderson](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/).

Their github repo is at https://github.com/aspnet/JavaScriptServices

I have added [bluebird](http://bluebirdjs.com/docs/getting-started.html) for IE. I need to support IE9+

ClientApp has been renamed to src, 'cos I prefer that.

### Next Steps

* Create multiple bundles, so that the initial load is very quick and then it will load modules as needed.
* Fix HMR in IE.
