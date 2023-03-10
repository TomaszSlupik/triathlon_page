import React, {useEffect} from 'react'
import './Maraton2022.scss'
import 'aos/dist/aos.css'
import Aos from 'aos';
import theme from '../../../../style/mybreakpoints';
import { ThemeProvider } from '@mui/material'
import Linetext from '../../../../style/mymuistyle/linetext';
import Line from '../../../../style/mymuistyle/line';
import Myscrollbox from '../../../../style/myscrollbox';
import Leftheader from '../../../../style/mymuistyle/leftheader';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Cardflex from '../../../../style/mymuistyle/cardflex';
import Halfbox from '../../../../style/mymuistyle/halfbox';
import TextDescribebox from '../../../../style/mymuistyle/textdescribebox';
import Centerheader from '../../../../style/mymuistyle/centerheader';
import { DataGrid } from '@mui/x-data-grid';
import BacktoPage from '../BacktoPage';


const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'Nazwa', headerName: 'Nazwa', width: 70 },
  { field: 'Czasnetto', headerName: 'Czas_netto', width: 110 },
  {
    field: 'Min_km',
    headerName: 'Min_km',
    width: 110,
  },
 
];

const rows = [
  { id: 1, Nazwa: '5KM', Czasnetto: '00:17:32', Min_km: '03:30 min/km' },
  { id: 2, Nazwa: '10KM', Czasnetto: '00:34:58', Min_km: '03:30 min/km' },
  { id: 3, Nazwa: '15KM', Czasnetto: '00:52:04', Min_km: '03:28 min/km' },
  { id: 4, Nazwa: '20KM', Czasnetto: '01:10:21', Min_km: '03:31 min/km' },
  { id: 5, Nazwa: '21.1KM', Czasnetto: '01:14:17', Min_km: '03:31 min/km' },
  { id: 6, Nazwa: '25KM', Czasnetto: '01:28:11', Min_km: '03:32 min/km' },
  { id: 7, Nazwa: '30KM', Czasnetto: '01:46:18', Min_km: '03:33 min/km' },
  { id: 8, Nazwa: '35KM', Czasnetto: '02:06:39', Min_km: '03:37 min/km' },
  { id: 9, Nazwa: '40KM', Czasnetto: '02:27:57', Min_km: '03:42 min/km' },
  { id: 10, Nazwa: 'META', Czasnetto: '02:37:04', Min_km: '03:43 min/km' },
];

export default function Maraton2022() {

    useEffect (()=> {
        Aos.init({duration: 3000})
      }, [])
    
  return (
    <div>
        <BacktoPage />
        <div className='maraton'>
        
        <ThemeProvider theme={theme}>
        <Linetext>Maraton Warszawski</Linetext>
        <Line />
        <Myscrollbox />
        <div className="maraton__box">
            <Leftheader><DoubleArrowIcon />Dzie?? przed startem</Leftheader>
            <Cardflex data-aos="fade-left">
                    <img className='maraton__box-map' src={process.env.PUBLIC_URL + '/img/img_2022/maratonone.jpg'} alt="expo Maratonu Warszawskiego" />
                    <Halfbox>
                        <TextDescribebox>
                            Po zako??czeniu udanego sezonu Triathlonowego, w firmie narodzi?? si?? pomys??, aby biec Maraton Warszawski. Jedna z os??b w tym dniu nie mog??a biec i dosta??em propzycj?? czy nie pobiegn??. Po szybkim namy??le, postanowi??em wystartowa??. Przepisano na mnie pakiet startowy, a cz?????? wpisowego op??aci??em.  
                            Nie wiedzia??em czego spodziewa?? si??, poniewa?? trenuj?? pod kr??tkie dystanse, a przebiec kr??lewski dystans 42,195 km by??o sporym wyzwaniem. Dzie?? przed startem uda??em si?? na expo i odebra??em sw??j pakiet startowy. 
                        </TextDescribebox>
                        </Halfbox>
            </Cardflex>
            <Leftheader><DoubleArrowIcon />Dzie?? startu</Leftheader>
            <Centerheader>Bieg</Centerheader>
            <div data-aos="fade-right">
                <TextDescribebox >
                   Po szybkiej rozgrzewce, zrobi??em kilka rytm??w, a nast??pnie 2 min przed startem ??ci??gn????em dres, daja?? go mojej siostrze, kt??ra mi dopingowa??a wraz z przyjaci????k??. Ustawi??em si?? w czwartej linii za Kenijczykami. 3-2-1 i  s??ysz?? wystrza?? startera, ruszyli??my. Kenijczycy od razu ruszyli bardzo mocno, ja przez pierwsze 500m bieg??em z grup?? Kenijek, a nast??pnie postanowi??em ju?? na typ etapie oderwa?? si?? od grupy i biec swoje. Pierwszy km w tempie 3:26/km i zobaczy??em mocnych dw??ch Polak??w. Postanowi??em do nich do????czy??. Nast??pnie do nas do????czy??y kolejne dwie osoby i tak biegli??my w 5 osobowej grupie. 
                </TextDescribebox>
            </div>
            <div data-aos="fade-left">
                <div className="maraton__box-img">
                <img className="maraton__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/maratontwo.jpg'} alt="Maraton Warszawski - zdj??cie z trasy" />
                <div className="maraton__box-img--signature">
                Foto. Jan Nyka
                </div>
                </div>      
            </div>
            <div data-aos="fade-right">
                <TextDescribebox >
                   Bieg??em ca??y czas odwa??nie, wychodz??c i prowadz??c grup??. Czu??em si?? naprawd?? doskonale. Ca??y czas biegli??my r??wno. Pierwsze 20km min????o bardzo szybko.
                </TextDescribebox>
            </div>
            <div data-aos="fade-left">
                <div className="maraton__box-img">
                <img className="maraton__box-img" src={process.env.PUBLIC_URL + '/img/img_2022/maraton.jpg'} alt="Maraton Warszawski - zdj??cie z trasy" />
                <div className="maraton__box-img--signature">
                Foto. Jan Nyka
                </div>
                </div>      
            </div>
            <Cardflex data-aos="fade-right">
                    <div className="maraton__box-map">
                    <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                    </div>
                    </div>
                    <Halfbox>
                        <TextDescribebox>
                            Patrz??c na statystyki, do 30km bieg??em na wyniki 2h 29min, jednak na trasie mia??em tylko 3 ??ele i brak rozstawionych bidon??w na punktach od??ywczych spowodowa??y, ??e zaliczy??em przys??owiow?? "??cian?? marato??sk??". Jednak nie chcia??em zrezygnowa?? i moim celem by??o dobiec do METY. 
                            Wynik na mecie to 02:37:05, co pozwoli??o uplasowa?? si?? na 3 miejscu w kat. M20 zaraz za Kenijczykami. 
                        </TextDescribebox>
                        </Halfbox>
            </Cardflex>
            <Cardflex data-aos="fade-left">
                    <img className='maraton__box-map' src={process.env.PUBLIC_URL + '/img/img_2022/maratonthree.jpg'} alt="expo Maratonu Warszawskiego" />
                    <img className='maraton__box-map four' src={process.env.PUBLIC_URL + '/img/img_2022/maratonfour.jpg'} alt="expo Maratonu Warszawskiego" />
            </Cardflex>
            <div data-aos="fade-right">
                <TextDescribebox >
                  Po maratonie dochodzi??em do siebie 1h, a na nast??pny dzie?? ju?? mog??em je??dzi?? na rowerze. Mimo wszystko liczba trening??w w tygodniu pozwoli??a mi by?? dobrze przygotowany do tego biegu. Nie wykluczam, ??e w przysz??o??ci jeszcze powalcz?? o lepszy wynik w Maratonie.
                </TextDescribebox>
            </div>

            
        </div>
        
        
        
        </ThemeProvider>
    </div>
    </div>
   
  )
}
