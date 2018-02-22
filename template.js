export default ({ markup }) => {
	return `<!doctype html>
<html>
<head>
</head>
<body>
	<div id="root">${markup}</div>
	<script src="/static/client.js" async></script>
</body>
</html>`;
};