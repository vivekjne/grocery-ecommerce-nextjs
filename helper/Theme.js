import { createMuiTheme } from '@material-ui/core/styles';
const defaultTheme = createMuiTheme({
    palette: {
      text:{
        primary:'#000',
      },
      primary:{
        main:'#45C163',
      },
      secondary: {
        main: '#afb42b',
      },
    },
});

export  {defaultTheme};