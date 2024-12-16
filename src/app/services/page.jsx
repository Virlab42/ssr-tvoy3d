
import Link from "next/link";

export const metadata = {
    title: "3Д-Печать услуги | Сканирование, проектирование, печать, постобработка",
    description: "Широкий спектр услуг 3D печати: экструзионная, стереолитография, струйная, синтез на подложке. Проектирование, сканирование, постобработка, покраска и покрытия.",
    alternates: {
      canonical: 'https://tvoy3d.ru/services'
    },
    keywords: ['экструзионная 3D печать', 'стереолитография', 'струйная 3D печать', 'синтез на подложке', 'проектирование 3D печати', 'сканирование 3D объектов', 'обратное проектирование', 'постобработка изделий', 'покраска 3D печати', 'обтяжка кожей', 'покрытие деревом', 'карбон 3D печать', 'экструзионная 3д печать', 'струйная 3д печать', 'проектирование 3д печати', 'сканирование 3д объектов','покраска 3д печати', 'карбон 3д печать', 'Твой 3д', 'Твой 3D', '3д печать под заказ', '3д печать в больших количествах', '3D печать в больших количествах','3д печать в большом объеме'],
  };

function Services(){
    return(
        <>
            <div className="services">
                <div className="hero-block_image">
                    <div className='dark-fon'>
                        <h1>УСЛУГИ<div className='div-dec'></div></h1>
                    </div>
                </div>
                <div className='main-services'>
                    <h2>ОСНОВНЫЕ УСЛУГИ</h2>
                    <div className='main-services-container'>
                        <div className='body-container'>
                            <img src='/services/Cover-FDM.jpeg'></img>
                            <h3>Экструзионная 3D-печать(FDM/FFF/FGF)</h3>
                            <span>Экструзионная 3D-печать, также известная как FDM (Fused Deposition Modeling), FFF (Fused Filament Fabrication) и FGF (Fused Granulate Fabrication), является одной из самых популярных и широко используемых технологий 3D-печати. Все эти методы используют экструзию материала для создания трехмерных объектов послойно.</span>
                            <div className='price'>
                                <p>Цена:</p>
                                <ul>
                                    <li>Минимальные модели (до 10x10x10 см): от 500 до 1500 рублей.</li>
                                    <li>Средние модели (до 20x20x20 см): от 1500 до 5000 рублей.</li>
                                    <li>Крупные модели (более 20x20x20 см): от 5000 рублей и выше, в зависимости от размера и сложности.</li>
                                </ul>
                            </div>
                            <div className='descrtip'>
                                <p>Применение:</p>
                                <ul>
                                    <li>Прототипирование, создание моделей и функциональных деталей</li>
                                    <li>Изготовление крупногабаритных объектов, промышленное производство и производство прототипов</li>
                                    <li>FDM широко используется в прототипировании, образовательных целях, создании функциональных деталей и изделий для конечного использования</li>
                                </ul>
                            </div>
                            <div className='block-buttons'>
                                <Link smooth="true" href='/services/extrusion' ><button>Подробнее</button></Link>
                                <Link smooth="true" href='/contactform' ><button>Заказать</button></Link>
                            </div>
                        </div>
                        <div className='body-container'>
                            <img src='/services/3д-карсуель18.jpg'></img>
                            <h3>Стереолитография (SLA/DLP/MSLA)</h3>
                            <span>Стереолитография — это метод 3D-печати, который использует свет для отверждения жидкого фотополимера в твердый объект. Существует несколько подвидов этой технологии: SLA (Stereolithography Apparatus), DLP (Digital Light Processing) и MSLA (Masked Stereolithography Apparatus).</span>
                            <div className='price'>
                                <p>Цена:</p>
                                <ul>
                                    <li>Минимальные модели (до 10x10x10 см): от 1000 до 3000 рублей.</li>
                                    <li>Средние модели (до 20x20x20 см): от 3000 до 8000 рублей.</li>
                                    <li>Крупные модели (более 20x20x20 см): от 8000 рублей и выше, в зависимости от размера и сложности.</li>
                                </ul>
                            </div>
                            <div className='descrtip'>
                                <p>Применение:</p>
                                <ul>
                                    <li>Создание высокоточных моделей, ювелирных изделий, прототипов и деталей для стоматологии</li>
                                    <li>Подходит для небольших серий и массового производства мелких деталей</li>
                                </ul>
                            </div>
                            <div className='block-buttons'>
                                <Link smooth="true" href='/services/stereolithography' ><button>Подробнее</button></Link>
                                <Link smooth="true" href='/contactform' ><button>Заказать</button></Link>
                            </div>
                        </div>
                        <div className='body-container'>
                            <img src='/services/struya.jpg'></img>
                            <h3>Струйная 3D-печать (Multi Jet Printing/PolyJet Printing)</h3>
                            <span>Струйная 3D-печать — это метод аддитивного производства, который используется для создания высокоточных и детализированных объектов с использованием фотополимерных смол. Основные технологии в этой категории включают Multi Jet Printing (MJP) и PolyJet Printing.</span>
                            <div className='price'>
                                <p>Цена:</p>
                                <ul>
                                    <li>Минимальные модели (до 10x10x10 см): от 2000 до 5000 рублей.</li>
                                    <li>Средние модели (до 20x20x20 см): от 5000 до 12000 рублей.</li>
                                    <li>Крупные модели (более 20x20x20 см): от 12000 рублей и выше, в зависимости от размера и сложности.</li>
                                </ul>
                            </div>
                            <div className='descrtip'>
                                <p>Применение:</p>
                                <ul>
                                    <li>Создание высокоточных прототипов, мастер-моделей для литья и функциональных деталей с высокой детализацией</li>
                                    <li>Создание цветных моделей, прототипов с различными механическими свойствами и медицинских моделей</li>
                                </ul>
                            </div>
                            <div className='block-buttons'>
                                <Link smooth="true" href='/services/inkjet' ><button>Подробнее</button></Link>
                                <Link smooth="true" href='/contactform' ><button>Заказать</button></Link>
                            </div>
                        </div>
                        <div className='body-container'>
                            <img src='/services/подложка.jpg'></img>
                            <h3>Синтез на подложке (PBF/SLS/DMLS/SLM/EBM)</h3>
                            <span>Синтез на подложке (Powder Bed Fusion, PBF) включает в себя несколько технологий 3D-печати, которые используют порошковые материалы и источники тепла для создания объектов слой за слоем. Основные технологии в этой категории включают SLS (Selective Laser Sintering), DMLS (Direct Metal Laser Sintering), SLM (Selective Laser Melting) и EBM (Electron Beam Melting).</span>
                            <div className='price'>
                                <p>Цена:</p>
                                <ul>
                                    <li>Минимальные модели (до 10x10x10 см): от 3000 до 7000 рублей.</li>
                                    <li>Средние модели (до 20x20x20 см): от 7000 до 15000 рублей.</li>
                                    <li>Крупные модели (более 20x20x20 см): от 15000 рублей и выше, в зависимости от размера и сложности.</li>
                                </ul>
                            </div>
                            <div className='descrtip'>
                                <p>Применение:</p>
                                <ul>
                                    <li>Прототипирование, производство функциональных деталей, инструментов и конечных продуктов</li>
                                    <li>Производство деталей для аэрокосмической, автомобильной и медицинской промышленности, требующих высокой прочности и точности.</li>
                                </ul>
                            </div>
                            <div className='block-buttons'>
                                <Link smooth="true" href='/services/synthesis' ><button>Подробнее</button></Link>
                                <Link smooth="true" href='/contactform' ><button>Заказать</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-services'>
                    <h2>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
                    <ul className='dop-services'>
                        <li>Проектирование</li>
                        <li>Сканирование</li>
                        <li>Обратное проектирование</li>
                        <li>Постобработка изделий, покраска, обтяжка кожей, покрытие натуральным деревом, карбоном, аквапринт</li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
export default Services