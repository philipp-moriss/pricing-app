import { ThemeOptions, createTheme } from '@mui/material';

export const themeOptions: ThemeOptions = createTheme({
	palette: {
		primary: {
			main: '#ff9b06',
			contrastText: '#000000',
			dark: 'rgba(121,17,249,0.69)',
		},
		secondary: {
			main: '#4caf50',
		},
		text: {
			primary: 'rgba(0,0,0,0.87)',
		},
		warning: {
			main: '#e705f7',
		},
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});
