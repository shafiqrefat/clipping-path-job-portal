import { createMuiTheme } from "@material-ui/core";

const CcDefaultTheme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            fullWidth: {
                width: '600px !important',
            }
        }
    },
});

export default CcDefaultTheme