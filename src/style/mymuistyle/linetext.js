import { styled } from '@mui/system';


const Linetext = styled('div')(({
    theme
}) => ({
    [theme.breakpoints.up('xs')]: {
        textAlign: 'center',
        color: '#7c5fe9',
        fontSize: '2rem',
        textShadow: '2px 2px 3px rgba(15, 15, 15, 0.54)'
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '4.5rem',
    },
    [theme.breakpoints.up('xxl')]: {
        fontSize: '5rem',
    },
}))

export default Linetext