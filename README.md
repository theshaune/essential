# Essential Ghost Theme Documentation

[Essential](http://essential.theme.place) ghost theme developed by [ThemePlace](http://theme.place) available for purchuse exclusively through themeforest.
  Author [Theme Place](http://theme.place)
  To download, visit the [releases](https://github.com/TryGhost/Casper/releases) page.


## Included Plugins
- [disqus](http://disqus.com).
- [highlight.js](https://highlightjs.org), [Usage Guide](https://highlightjs.org/usage/), [Live Demo](https://highlightjs.org/static/demo/).
  

- [Google Fonts](http://www.google.com/webfonts)

- jQuery

## Theme Instructions

### Using disqus
disqus is lazy loaded on the post page, this helps keep your website fast.
1. To Enable disqus on your website, sign up on [disqus](http://disqus.com) and follow the instructions to create your account.
2. Enter your disqus shortcode, open `assets/js/index.js` with your favourite text editor and modify `var disqus_shortname = 'your-user-name-here'`.
3. Comments are displayed on posts, to enable them open `posts.hbs` with your favourite text editor and uncomment `{{>comments}}`, this will insert the file `partials/comments.hbs`.

### highlight.JS
highlight.js is located in the `assets/js/highlightjs/` directory, and initialized on line 45 in `assets/js/index.js`


## Copyright & License

Copyright (c) 2015 ThemePlace.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.