import {styled} from '@mui/system';


const Iconcontact = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        fontSize: '1.6rem',
        margin: '0.2em 0em',
        fontWeight: '700'
    }, 
    [theme.breakpoints.up('sm')] : {
        fontSize: '2rem'
    }, 
    [theme.breakpoints.up('md')] : {
        fontSize: '1.4rem'
    }, 
    [theme.breakpoints.up('lg')] : {
        fontSize: '1.6rem'
    }, 
    [theme.breakpoints.up('xl')] : {
        fontSize: '2rem'
    }, 

}))

export default Iconcontact