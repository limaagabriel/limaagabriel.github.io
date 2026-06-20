import { routing } from '@/i18n/routing'

const redirectScript = `(function(){
	var path = location.pathname;
	var locales = ${JSON.stringify(routing.locales)};
	var prefixed = locales.some(function(l){
		return path === '/' + l || path.indexOf('/' + l + '/') === 0;
	});
	if (!prefixed) {
		location.replace('/${routing.defaultLocale}' + path + location.search + location.hash);
	}
})();`

export default function NotFound() {
	return (
		<html lang={routing.defaultLocale}>
			<head>
				<meta charSet="utf-8" />
				<meta name="robots" content="noindex" />
				<script dangerouslySetInnerHTML={{ __html: redirectScript }} />
			</head>
			<body>
				<p>Redirecting…</p>
			</body>
		</html>
	)
}
