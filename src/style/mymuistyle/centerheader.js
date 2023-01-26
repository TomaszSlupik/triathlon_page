import { styled } from '@mui/system';


const Centerheader = styled('div')(({
    theme
}) => ({
    [theme.breakpoints.up('xs')]: {
        fontFamily: `'Black Ops One', sans-serif`,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#7c5fe9',
        fontSize: '1.5rem',
        textShadow: '2px 2px 3px rgba(15, 15, 15, 0.54)', 
        marginTop: '1em',
        marginBottom: '1em'
    },
    
}))

export default Centerheader