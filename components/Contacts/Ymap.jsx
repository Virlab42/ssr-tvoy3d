'use client'
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps'

export default function Ymap(){
    return(
        <>
           <YMaps>
                    <div className='ymaps'>
                        <Map className='map' defaultState={{ center: [55.918247, 37.679808], zoom: 13.5 }}>
                        <Placemark geometry={[55.918247, 37.679808]}  options={{preset: 'islands#darkBlueDotIcon'}} />
                        </Map>
                    </div>  
                 </YMaps>
        </>
    )
}