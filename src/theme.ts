import { ThemeOptions, createTheme } from '@mui/material';

export const themeOptions: ThemeOptions = createTheme({
	palette: {
		primary: {
			main: '#ff9b06',
			contrastText: '#000000',
			dark: '#424d63',
		},
		secondary: {
			main: '#4caf50',
		},
		text: {
			primary: 'rgba(0,0,0,0.87)',
		},
		warning: {
			main: '#e87288',
		},
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiSelect: {
			defaultProps: {
				MenuProps: {
					style: { zIndex: 35001 },
				},
			},
		},
	},
});
