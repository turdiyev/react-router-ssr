export default ({ markup, helmet, preloadedState, resData }) => {
  return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
	${helmet.title.toString()}
	${helmet.meta.toString()}
	${helmet.link.toString()}
	<script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
	</script>
	<link href="/static/styles.css" async rel="stylesheet">
</head>
<body ${helmet.bodyAttributes.toString()}>
	<div id="root">${markup}</div>
	<div id="aa">${JSON.stringify(preloadedState)}</div>
	<script src="/static/client.js" async></script>
</body>
</html>`
}
