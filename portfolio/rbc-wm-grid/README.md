# Take Home Assignment - Diego Moura

## Assignment
To develop an Investment Advisor website homepage.

## Stack
- HTML5
- CSS (Grid)
- Sass
- NodeJS

### Important Note
All CSS files are compiled from Sass, which may be difficult to read. Please refer to the `.scss` files under the sass folder for all the vanilla CSS code. Also, feel free to install the project using npm.

## Considerations
The project is production-ready.
The build process includes:
- Compilation of Sass to CSS
- Concatenation of multiple CSS files (not used on the project, but the npm package is listed under dev dependencies on JSON file)
- Prefixing the concatenated code for optimal browser support of modern CSS features. (Autoprefixer uses caniuse.com for standards and is often updated)
- Compression of the prefixed code (In this project, the difference is only 3kb from the prefixed to the compressed version, but it can help decrease the size of CSS files significantly)

### Measure Units
The assignment uses "rem" for all measures calculation and "em" to implement media queries.
The analyses is based on "1rem" equals to 10px, which is set by assigning "62.5%" as the default value for "font-size".

This technique is very convenient for writing media queries, but note that values mentioned using pixels as unit are meant not to be affected by automatic resizing.

### Breakpoints for responsive views
- 1020px: Laptop view
- 768px: Tablet view
- 425px: Mobile view (This breakpoint support the mobile view required by the assignment)

## Recommendations
List of further improvements that should be added to the project.

- ARIA label code for accessibility
- Creation of a standard stick navigation instead of the hamburger nav proposed. (UX best-practice)
- Adding overlays to all images that have text over them (AODA standard and best-practice)
- Sprite.svg file for performance improvement (Reduce the number of HTTP requests)
- Serving high-definition versions of images to users using devices with retina display (Using `<srcset>` in HTML5 it's possible to serve high-def images selectively and not overload users that either won't see the benefit due to their device capacity or due to their connection speedy, in case of poor service and bandwidth drainage)