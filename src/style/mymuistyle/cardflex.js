import { styled } from '@mui/system';


const Cardflex = styled('div')(({theme}) => ({
[theme.breakpoints.up('xs')] : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    
}, 
[theme.breakpoints.up('md')] : {
    flexDirection: 'row',
}, 
}))

export default Cardflex