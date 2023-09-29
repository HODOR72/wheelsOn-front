import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Provider } from "react-redux"
import { store } from "../store"
import "bootstrap/dist/css/bootstrap.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { useEffect } from "react"

const theme = createTheme({
	palette: {
		primary: {
			main: "#7DF17B",
			contrastText: "#fff",
		},
		secondary: {
			main: "#7DF17B",
			contrastText: "#696969",
		},
		info: {
			main: "#000",
		},
	},
})

declare module "@mui/material/styles" {
	interface Palette {
		neutral: Palette["primary"]
	}

	interface PaletteOptions {
		neutral?: PaletteOptions["primary"]
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// @ts-ignore
		const tg = window?.Telegram?.WebApp
		if (tg) {
			// @ts-ignore
			window.Telegram.WebApp.ready()

			tg?.expand()
			tg?.enableClosingConfirmation()
		}
	}, [])

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
