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
			main: "#9F6BC9",
			contrastText: "#fff",
		},
		secondary: {
			main: "#F6F5F6",
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
