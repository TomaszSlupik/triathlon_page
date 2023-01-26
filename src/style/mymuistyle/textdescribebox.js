import { styled } from '@mui/system';

const TextDescribebox = styled('span')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        textAlign: 'justify',
        color: '#999',
        fontSize: '1.3rem'
    }
}))

export default  TextDescribebox