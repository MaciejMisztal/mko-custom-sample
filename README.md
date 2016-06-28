##(mko-custom-sample)
# Sample use decorator mko-custom

##Install "system/node" dependencies:
npm install -g jspm
##Install dependencies (in cloned directory):
npm install

jspm install
##Run sample app (using live-server):
npm start
... and you can see (in your web browser at displayed URL) sample (ES2015) app transpiled by you broswer(using typescript as transpiler).

Alternate way - start your web server with "app" as root directory of application.

##Bundling (preparing bundled/minified [html+js+runtime] version demo):
npm run build

... and view index-bundle.html in browser (after "npm start" -> ex.: http://127.0.0.1:8080/index-bundle.html). 