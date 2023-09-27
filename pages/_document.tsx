import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(91340192, "init", {
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true,
                });
              `,
					}}
				/>
				<script
					src='https://telegram.org/js/telegram-web-app.js'
					async
				></script>
				<meta name='version' content='1.0.5'></meta>
				<noscript>
					<div>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src='https://mc.yandex.ru/watch/91340192'
							style={{ position: "absolute", left: "-9999px" }}
							alt=''
						/>
					</div>
				</noscript>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
