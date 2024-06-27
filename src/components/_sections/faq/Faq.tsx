import React from 'react';
import '../menu/menu.scss';
import './faq.scss';
import QuestionItem from '@/components/question-item/QuestionItem';
import cn from 'classnames';
import { circe } from '@/fonts';
import SectionWrap from '@/components/section-wrap/SectionWrap';

const questions = [
  ['Я отправил портфолио, когда мне ответят?', 'Противоположная точка зрения подразумевает, что многие известные личности описаны максимально подробно. Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. '],
  ['Берете ли вы к себе на cтажировки, и на каких условиях?', 'Противоположная точка зрения подразумевает, что многие известные личности описаны максимально подробно. Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. '],
  ['Возможно ли участвовать в нескольких проектах разом?', 'Противоположная точка зрения подразумевает, что многие известные личности описаны максимально подробно. Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. Равным образом, современная методология разработки, в своём классическом представлении, допускает внедрение прогресса профессионального сообщества.Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. '],
  ['Что если я не получил(а) ответа на стажировку, тестовое задание? Письмо не дошло?', 'Друзья, не волнуйтесь, письмо до нас дошло, но, возможно, что мы его еще не успели подробно рассмотреть и изучить. Если вам не ответили в течении недели, то у нас нет для вас подходящей задачи и мы не можем ее вам выдать. Но бывает и так, что уровень кандидата очень низкий или недостаточно опыта даже для минимального прохода. Пожалуйста, не расстраивайтесь! Ваши контакты и портфолио остаются у нас и при первом подходящем поводе, мы с вами свяжемся.'],
  ['Я отправил портфолио, когда мне ответят?', 'Противоположная точка зрения подразумевает, что многие известные личности описаны максимально подробно. Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. '],
  ['Берете ли вы к себе на cтажировки, и на каких условиях?', 'Противоположная точка зрения подразумевает, что многие известные личности описаны максимально подробно. Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. '],
  ['Возможно ли участвовать в нескольких проектах разом?', 'Противоположная точка зрения подразумевает, что многие известные личности описаны максимально подробно. Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. Равным образом, современная методология разработки, в своём классическом представлении, допускает внедрение прогресса профессионального сообщества.Следует отметить, что консультация с широким активом не оставляет шанса для глубокомысленных рассуждений. '],
  ['Что если я не получил(а) ответа на стажировку, тестовое задание? Письмо не дошло?', 'Друзья, не волнуйтесь, письмо до нас дошло, но, возможно, что мы его еще не успели подробно рассмотреть и изучить. Если вам не ответили в течении недели, то у нас нет для вас подходящей задачи и мы не можем ее вам выдать. Но бывает и так, что уровень кандидата очень низкий или недостаточно опыта даже для минимального прохода. Пожалуйста, не расстраивайтесь! Ваши контакты и портфолио остаются у нас и при первом подходящем поводе, мы с вами свяжемся.'],
]

const Faq = () => {
  return (
    <div className={cn('menu-inner faq', circe.className)}>
      <div className="menu-section">
        <h1 className='menu-link'>FAQ</h1>

        <div className="faq-list">
          {questions.map((item, index) => (
            <QuestionItem title={item[0]} answer={item[1]} key={'faq-list' + index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;