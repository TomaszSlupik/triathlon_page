import { styled } from '@mui/system';


const Line = styled('div')(({theme}) => ({
[theme.breakpoints.up('xs')] : {
    height: '4px',
    width: '100px',
    backgroundColor: '#7c5fe9',
    borderRadius: '8px',
    marginBottom: '1em',
    
}, 
[theme.breakpoints.up('sm')] : {
    width: '125px',
}, 
[theme.breakpoints.up('md')] : {
    width: '195px',
}, 
[theme.breakpoints.up('lg')] : {
    width: '210px',
}, 
[theme.breakpoints.up('xl')] : {
    width: '240px',
}, 
[theme.breakpoints.up('xxl')] : {
    width: '280px',
}, 
}))

export default Line