// src/components/Modal.jsx
import React from 'react';
import './Modal.scss'; // Не забудьте создать и стилизовать этот файл

const ModalPLA = () => {

  

  return (
  <>
  {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
  <div className="modal fade" id="exampleModalPLA" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-4" id="exampleModalLabel" >3D-печать из PLA</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Высокая жесткость, хорошая детализация, доступная цена. PLA — биоразлагаемый термопластик для недорогого, нефункционального прототипирования. Более высокая детализация, чем у ABS, но более хрупкий. Не подходит для высоких температур.</p>
      </div>
      <div className="modal-footer">
        <h1 className='fs-4'> Описание</h1>
        <p className='modal-body'>
        FDM — наиболее широко распространенный процесс 3D-печати, в основном используемый для недорогого прототипирования и проверки проектов с очень короткими сроками выполнения.</p>
      
        <table className='table'>
  <tbody>

      <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Сильные стороны</h1>

      </td >
      <td>
        <p>
        Низкая стоимость, быстрые сроки выполнения</p>
      </td>
      </tr>
      <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Недостатки</h1>

      </td >
      <td>
        <p>
        Ограниченная точность размеров, слои печати, вероятно, будут видны</p>
      </td>
      </tr>
    </tbody>
    </table>

      </div>
      <div className="modal-footer">
      <h1 className='fs-4'> Характеристики</h1>
      <table className='table'>
  <tbody>
    <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Цена</h1>

      </td >
      <td>
      <p>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#4f4f4f" stroke="none">
        <path d="M1215 5106 c-16 -7 -38 -23 -48 -34 -47 -52 -46 -34 -47 -1149 l0
        -1053 -184 0 c-173 0 -185 -1 -216 -23 -18 -12 -43 -35 -54 -50 -20 -27 -21
        -41 -24 -384 -3 -341 -2 -357 18 -397 38 -77 49 -81 268 -84 l192 -3 0 -169 0
        -168 -182 -4 c-212 -4 -237 -11 -276 -88 -23 -45 -23 -47 -20 -402 3 -342 4
        -358 24 -384 49 -66 58 -69 264 -72 l189 -4 3 -261 c3 -241 5 -265 23 -296 11
        -19 33 -43 48 -55 28 -20 38 -21 402 -21 362 0 374 1 401 21 15 11 37 33 48
        48 20 26 21 43 24 297 l3 269 496 0 c478 0 498 1 537 20 83 41 81 27 84 446
        l3 370 -23 34 c-13 18 -36 43 -51 54 -28 21 -39 21 -538 24 l-509 3 0 169 0
        169 508 3 c480 4 513 5 615 26 487 102 895 413 1111 847 225 450 230 957 16
        1402 -222 463 -620 773 -1135 885 -98 21 -120 22 -1020 25 -756 2 -925 0 -950
        -11z m1860 -959 c115 -38 197 -91 280 -179 82 -87 135 -184 160 -293 23 -95
        16 -265 -13 -355 -72 -221 -283 -402 -512 -439 -38 -7 -241 -11 -492 -11
        l-428 0 0 656 0 655 463 -3 462 -4 80 -27z"/>
        </g>
        </svg>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#a7a7a7" stroke="none">
        <path d="M1215 5106 c-16 -7 -38 -23 -48 -34 -47 -52 -46 -34 -47 -1149 l0
        -1053 -184 0 c-173 0 -185 -1 -216 -23 -18 -12 -43 -35 -54 -50 -20 -27 -21
        -41 -24 -384 -3 -341 -2 -357 18 -397 38 -77 49 -81 268 -84 l192 -3 0 -169 0
        -168 -182 -4 c-212 -4 -237 -11 -276 -88 -23 -45 -23 -47 -20 -402 3 -342 4
        -358 24 -384 49 -66 58 -69 264 -72 l189 -4 3 -261 c3 -241 5 -265 23 -296 11
        -19 33 -43 48 -55 28 -20 38 -21 402 -21 362 0 374 1 401 21 15 11 37 33 48
        48 20 26 21 43 24 297 l3 269 496 0 c478 0 498 1 537 20 83 41 81 27 84 446
        l3 370 -23 34 c-13 18 -36 43 -51 54 -28 21 -39 21 -538 24 l-509 3 0 169 0
        169 508 3 c480 4 513 5 615 26 487 102 895 413 1111 847 225 450 230 957 16
        1402 -222 463 -620 773 -1135 885 -98 21 -120 22 -1020 25 -756 2 -925 0 -950
        -11z m1860 -959 c115 -38 197 -91 280 -179 82 -87 135 -184 160 -293 23 -95
        16 -265 -13 -355 -72 -221 -283 -402 -512 -439 -38 -7 -241 -11 -492 -11
        l-428 0 0 656 0 655 463 -3 462 -4 80 -27z"/>
        </g>
        </svg>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#a7a7a7" stroke="none">
        <path d="M1215 5106 c-16 -7 -38 -23 -48 -34 -47 -52 -46 -34 -47 -1149 l0
        -1053 -184 0 c-173 0 -185 -1 -216 -23 -18 -12 -43 -35 -54 -50 -20 -27 -21
        -41 -24 -384 -3 -341 -2 -357 18 -397 38 -77 49 -81 268 -84 l192 -3 0 -169 0
        -168 -182 -4 c-212 -4 -237 -11 -276 -88 -23 -45 -23 -47 -20 -402 3 -342 4
        -358 24 -384 49 -66 58 -69 264 -72 l189 -4 3 -261 c3 -241 5 -265 23 -296 11
        -19 33 -43 48 -55 28 -20 38 -21 402 -21 362 0 374 1 401 21 15 11 37 33 48
        48 20 26 21 43 24 297 l3 269 496 0 c478 0 498 1 537 20 83 41 81 27 84 446
        l3 370 -23 34 c-13 18 -36 43 -51 54 -28 21 -39 21 -538 24 l-509 3 0 169 0
        169 508 3 c480 4 513 5 615 26 487 102 895 413 1111 847 225 450 230 957 16
        1402 -222 463 -620 773 -1135 885 -98 21 -120 22 -1020 25 -756 2 -925 0 -950
        -11z m1860 -959 c115 -38 197 -91 280 -179 82 -87 135 -184 160 -293 23 -95
        16 -265 -13 -355 -72 -221 -283 -402 -512 -439 -38 -7 -241 -11 -492 -11
        l-428 0 0 656 0 655 463 -3 462 -4 80 -27z"/>
        </g>
        </svg>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#a7a7a7" stroke="none">
        <path d="M1215 5106 c-16 -7 -38 -23 -48 -34 -47 -52 -46 -34 -47 -1149 l0
        -1053 -184 0 c-173 0 -185 -1 -216 -23 -18 -12 -43 -35 -54 -50 -20 -27 -21
        -41 -24 -384 -3 -341 -2 -357 18 -397 38 -77 49 -81 268 -84 l192 -3 0 -169 0
        -168 -182 -4 c-212 -4 -237 -11 -276 -88 -23 -45 -23 -47 -20 -402 3 -342 4
        -358 24 -384 49 -66 58 -69 264 -72 l189 -4 3 -261 c3 -241 5 -265 23 -296 11
        -19 33 -43 48 -55 28 -20 38 -21 402 -21 362 0 374 1 401 21 15 11 37 33 48
        48 20 26 21 43 24 297 l3 269 496 0 c478 0 498 1 537 20 83 41 81 27 84 446
        l3 370 -23 34 c-13 18 -36 43 -51 54 -28 21 -39 21 -538 24 l-509 3 0 169 0
        169 508 3 c480 4 513 5 615 26 487 102 895 413 1111 847 225 450 230 957 16
        1402 -222 463 -620 773 -1135 885 -98 21 -120 22 -1020 25 -756 2 -925 0 -950
        -11z m1860 -959 c115 -38 197 -91 280 -179 82 -87 135 -184 160 -293 23 -95
        16 -265 -13 -355 -72 -221 -283 -402 -512 -439 -38 -7 -241 -11 -492 -11
        l-428 0 0 656 0 655 463 -3 462 -4 80 -27z"/>
        </g>
        </svg>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#a7a7a7" stroke="none">
        <path d="M1215 5106 c-16 -7 -38 -23 -48 -34 -47 -52 -46 -34 -47 -1149 l0
        -1053 -184 0 c-173 0 -185 -1 -216 -23 -18 -12 -43 -35 -54 -50 -20 -27 -21
        -41 -24 -384 -3 -341 -2 -357 18 -397 38 -77 49 -81 268 -84 l192 -3 0 -169 0
        -168 -182 -4 c-212 -4 -237 -11 -276 -88 -23 -45 -23 -47 -20 -402 3 -342 4
        -358 24 -384 49 -66 58 -69 264 -72 l189 -4 3 -261 c3 -241 5 -265 23 -296 11
        -19 33 -43 48 -55 28 -20 38 -21 402 -21 362 0 374 1 401 21 15 11 37 33 48
        48 20 26 21 43 24 297 l3 269 496 0 c478 0 498 1 537 20 83 41 81 27 84 446
        l3 370 -23 34 c-13 18 -36 43 -51 54 -28 21 -39 21 -538 24 l-509 3 0 169 0
        169 508 3 c480 4 513 5 615 26 487 102 895 413 1111 847 225 450 230 957 16
        1402 -222 463 -620 773 -1135 885 -98 21 -120 22 -1020 25 -756 2 -925 0 -950
        -11z m1860 -959 c115 -38 197 -91 280 -179 82 -87 135 -184 160 -293 23 -95
        16 -265 -13 -355 -72 -221 -283 -402 -512 -439 -38 -7 -241 -11 -492 -11
        l-428 0 0 656 0 655 463 -3 462 -4 80 -27z"/>
        </g>
        </svg>

            </p>
      </td>
      </tr>
      <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Время выполнения</h1>

      </td >
      <td>
        <p >
         Менее 2 дней</p>
      </td>
      </tr>
      <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Толщина стен</h1>

      </td >
      <td>
        <p>
        0,8 мм</p>
      </td>
      </tr>
      <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Допуски</h1>

      </td >
      <td>
        <p>
        ±0,5% с нижним пределом<br/> ±0,5 мм (±0,020″)</p>
      </td>
      </tr>
      <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Макс. размер детали</h1>

      </td >
      <td>
        <p>
        50 х 50 х 50 см</p>
      </td>
      </tr>
      <tr>
      <td className='tdEl'>

            <h1 className='fs-5'>Высота слоя</h1>

      </td >
      <td>
        <p>
        200 - 100</p>
      </td>
      </tr>
    </tbody>
    </table>

      </div>
    </div>
  </div>
</div>
  </>
    
  );
};

export default ModalPLA;
