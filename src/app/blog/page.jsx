// src/MainBlog.js
import BlogComponent from '../../../components/Blog/Blog';

export const metadata = {
    title: "3D-Печать | Новости и статьи",
    description: "Читайте наш блог о 3D печати, где вы найдете советы, новости, обзоры технологий и материалов. Узнайте о последних тенденциях и разработках в области аддитивного производства.",
    alternates: {
      canonical: 'https://tvoy3d.ru/blog'
    },
    keywords: ['блог о 3D печати',' новости 3D печати',' советы по 3D печати',' обзоры 3D печати',' технологии 3D печати',' материалы для 3D печати',' аддитивное производство',' тенденции 3D печати',' Твой 3д',' Твой 3D',' 3д печать под заказ',' 3д печать в больших количествах',' 3D печать в больших количествах','3д печать в большом объеме'],
  };

export default function MainBlog(){
    return (
        <>
            <div className="container">
              <BlogComponent />
            </div>
        </>
        
    );
};

