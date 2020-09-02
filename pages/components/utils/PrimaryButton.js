import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


function PrimaryButton (props){
    const {children,color,variant,...others} = props;

    const StyledButton = withStyles((theme)=>({
        root:{
            background: variant=='outlined'?'#fff':`${theme.palette[color].dark}`,
            borderRadius: 5,
            border:variant=='outlined'? `1px solid ${theme.palette[color].dark}`: 0,
            color: variant=='outlined'?`${theme.palette[color].dark}`:'white',
            height: 48,
            padding: '0 30px',
            margin:10,
            '&:hover': {
                background: variant=='outlined'?'#fff':`${theme.palette[color].dark}`,
                boxShadow: '0 3px 3px 0.01px rgba(105, 105, 135, .3)',
            },
            '&:disabled': {
                color: variant=='outlined'?`${theme.palette[color].light}`:"white",
                opacity: 0.5
            },
        }
    }))(Button)

    return(
        <StyledButton {...others}>{children}</StyledButton>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
};
PrimaryButton.defaultProps = {
    color: 'primary'
};

export default PrimaryButton;