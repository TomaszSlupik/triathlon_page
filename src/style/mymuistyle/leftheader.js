import { styled } from '@mui/system';


const Leftheader = styled('div')(({
    theme
}) => ({
    [theme.breakpoints.up('xs')]: {
        display: 'flex',
        alignItems: 'flex-start',
        textAlign: 'left',
        color: '#7c5fe9',
        fontSize: '1.5rem',
        textShadow: '2px 2px 3px rgba(15, 15, 15, 0.54)', 
        marginTop: '1em'
    },
    
}))

export default Leftheader