import { Components, createTheme } from '@mui/material/styles';

import { colors, mainColors } from './color.styles';
import { shadows } from './shadow.styles';
import { typographyVariants } from './typography.styles';

const typographyComponentConfig: Components['MuiTypography'] = {
  defaultProps: {
    variantMapping: {
      body: 'div',
      body1: 'span',
      extra: 'h1',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      label: 'label',
      section: 'div',
      small: 'div',
      subtitle: 'span',
      // button: 'div',
      // buttonSmall: 'div',
    },
  },
};

const avatarComponentConfig: Components['MuiAvatar'] = {
  styleOverrides: {
    root: {
      backgroundColor: mainColors.secondary,
    },
  },
};

const iconComponentConfig: Components['MuiIcon'] = {
  defaultProps: {
    baseClassName: 'material-symbols-outlined',
  },
};

const menuComponentConfig: Components['MuiMenu'] = {
  styleOverrides: {
    root: {
      '& .MuiPaper-root': {
        background: colors.background.light,
        boxShadow: shadows.menu,
        padding: '8px',
      },
    },
  },
};

const listItemButtonComponentConfig: Components['MuiListItemButton'] = {
  styleOverrides: {
    root: {
      '& .MuiListItemIcon-root': {
        minWidth: 44,
      },
      '& .MuiListItemText-root': {
        marginBottom: 0,
        marginTop: 0,
      },
      '&.Mui-selected': {
        backgroundColor: 'transparent',
        color: mainColors.primary,
      },
      '&:hover': {
        backgroundColor: colors.primary.highlight,
      },
      paddingBottom: 10,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 10,
    },
  },
};

export const config = {
  components: {
    MuiAvatar: avatarComponentConfig,
    MuiIcon: iconComponentConfig,
    MuiListItemButton: listItemButtonComponentConfig,
    MuiMenu: menuComponentConfig,
    MuiTypography: typographyComponentConfig,
  },
  palette: colors,
  typography: {
    fontFamily: '"Inter var", Helvetica, Arial, sans-serif',
    fontSize: 14,
    htmlFontSize: 16,
    ...typographyVariants,
  },
};

const theme = createTheme(config);

export default theme;
