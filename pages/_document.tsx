import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<script
					src="https://telegram.org/js/telegram-web-app.js"
					async
				></script>
				<meta name="version" content="1.0.5"></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
