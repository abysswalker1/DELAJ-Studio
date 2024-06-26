import React from 'react';
import './career.scss';
import { circe } from '@/fonts';
import cn from 'classnames';
import Link from 'next/link';
import SectionWrap from '../../section/Section';

const data = [
  {title: '2D-Аниматор', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'сценарист', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'Композитинг артист', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'Режиссер анимации', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: '3D-Аниматор MAYA (персонажный)', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'Композитор', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'Арт-директор', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: '3D-аниматор', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: '2D-художник', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'Линейный продюсер', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'Моушн-дизайнер', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: '2D-Аниматор', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'сценарист', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
  {title: 'Композитинг артист', description: 'Мы ищем талантливого и опытного  линейного продюсера анимации, который будет ответственен за организацию и координацию процесса производства анимационного контента.'},
]

const Career = () => {
  return (
    <div  className={cn('menu-inner career', circe.className)}>
      <div className="menu-section">
        <h1 className='menu-link'>Вакансии</h1>
        <div className="career-list">
          {data.map((item, index) => (
            <Link href='/' className="career-item" key={'career-item' + index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="career-item__options">
                <div className="career-item__options-item options-freelance">Freelance</div>
                &nbsp; 
                <div className="career-item__options-item options-opened">Открытая</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;