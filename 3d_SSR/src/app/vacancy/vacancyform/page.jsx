import VacancyComponent from '../../../../components/Vacancy/Vacancy';

import Link from "next/link";

export const metadata = {
    title: "Откликнуться на вакансию",alternates: {
      canonical: 'https://tvoy3d.ru/vacancy-form'
    },
};

function VacancyForm() {
    
    return (
        <>
            <div className='contactform'>
                <h3>Чтобы откликнуться на вакансию, заполните форму</h3>
                <p>Вскоре на указанную вами почту придет ответ</p>
                <VacancyComponent />
                <h5>
                    Отправляя форму, Вы соглашаетесь на обработку{' '}
                    <Link href='/personal'>
                        <span className='blue'>персональных данных.</span>
                    </Link>
                </h5>
            </div>
        </>
    );
}

export default VacancyForm;
