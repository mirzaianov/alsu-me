import propTypes from 'prop-types';
import TestimonialCard from './TestimonialCard';
import almaz from '../assets/img/testimonials/almaz.jpeg';
import elena from '../assets/img/testimonials/elena.jpeg';
import ruslan from '../assets/img/testimonials/ruslan.jpeg';
import rozaliia from '../assets/img/testimonials/rozaliia.jpeg';
import albina from '../assets/img/testimonials/albina.jpeg';
import dmitrii from '../assets/img/testimonials/dmitrii.jpeg';
import aiza from '../assets/img/testimonials/aiza.jpeg';
import alina from '../assets/img/testimonials/alina.jpeg';
import girlAvatar from '../assets/img/testimonials/girl-avatar.png';

const testimonialCardData = [
  {
    fullName: 'Руслан',
    src: ruslan,
    occupation: 'Предприниматель',
    comment:
      'Был приятно удивлён и впечатлён тем, что за столь короткий срок добился таких хороших результатов. С радостью продолжу обучение под Вашим патронажем.',
  },
  {
    fullName: 'Розалия',
    src: rozaliia,
    occupation: 'Студентка мед. колледжа',
    comment:
      'Я изучала английский вместе с Алсу. Она превосходный репетитор, преподаватель и доброй души человек! На её занятиях никогда не бывает скучно, видно, что в свои занятия она вкладывает всю свою душу и сердце. Алсу, огромное спасибо за Вашу увлеченность языком и тот вклад, который Вы сумели вложить в мою голову. Я очень благодарна за полученные знания и навыки в изучении английского🌷',
  },
  {
    fullName: 'Aйза',
    src: aiza,
    occupation: 'Косметолог',
    comment:
      'Обучалась у Алсу английскому. Мне очень понравилось. Все темы и уроки структурированы. Доходчиво. Мне было легко. Я не думала в целом, что английский оказывается не такой уж и сложный язык. Это я поняла с Алсу, а не в школе когда то, что и говорит о уровне профессионализма. Думала мои мозги 30 летние не поддадутся, но если заниматься, то с таким учителем можно достичь желаемого уровня. И для меня еще важно не только учительские качества, но и человеческие. С Алсу всегда интересно не только поучить и поизучать, но ещё и просто поговорить о жизни, одновременно улучшая навыки английского со всех сторон.',
  },
  {
    fullName: 'Дмитрий',
    src: dmitrii,
    occupation: 'Торговый представитель',
    comment:
      'Наша компания поставляет европейское оборудование на фармацевтические заводы в России. Алсу уже несколько лет является нашим надежным партнером в качестве переводчика. Она сопровождает инсталляцию оборудования, когда техническая поддержка осуществляется онлайн специалистами из Европы, а также поддерживает нас при проведении тренингов, когда спикерами являются наши иностранные коллеги. И всегда мы получаем только самые положительные отзывы о ее работе. Должен отметить, что Алсу очень быстро овладела достаточно специфической терминологией и вникла в сложную эко-систему фармацевтического предприятия. Все это, в купе с пунктуальностью и ответственностью, блестяще характеризуют Алсу, как профессионала высокого уровня.',
  },
  {
    fullName: 'Алсу',
    src: girlAvatar,
    occupation: 'Врач-остеопат',
    comment:
      'На занятиях я, наконец-то, смогла преодолеть свой психологический барьер «начать свободно говорить на английском» в жизни, хотя до этого изучала язык достаточно давно! Благодаря поддержке и очень дружеской атмосфере, страх сказать что-то не то и чувствовать себя глупо - ушел, уверенности стало больше настолько, что я теперь спокойно могу общаться и заводить дружеские контакты в англоязычной среде. Плюсом ко всему, встречи всегда проходят легко и непринужденно, мне не нужно себя заставлять. Каждый раз - это про меня и мою жизнь. И скорее больше похоже на дружеское общение на увлекательные и захватывающие темы и обсуждение новой информации за чашкой кофе, чем на «занудные» уроки. Что действительно мотивирует и дополнительно расширяет кругозор. В то же время, занятия всегда имеют абсолютно четкую структуру, которая дает заметный прогресс как в грамматике, так и лексике.',
  },
  {
    fullName: 'Альбина',
    src: albina,
    occupation: 'Персональный тренер',
    comment:
      'Каждые наши занятия проходят очень интересно, продуктивно. Алсу объясняет очень доходчиво, используя разного рода ассоциации и фишечки, что безусловно является плюсом при запоминании темы. И очень нравится периодическое повторение прошлых тем, чтобы ничего не забывалось 😊',
  },
  {
    fullName: 'Алина',
    src: alina,
    occupation: 'Менеджер по продажам',
    comment:
      'Занимаюсь у Алсу уже 2 года, основной запрос был-улучшить и поддерживать уровень языка. Очень нравится структура занятия, состоящая из разнонаправленных упражнений.  В течение часа успеваем изучить грамматику, выделить время для устрой речи и заняться аудированием. Очень легкая и располагающая атмосфера на занятиях, что позволяет абсолютно комфортно себя чувствовать и задавать любые вопросы. Хочется отметить индивидуальный подход в плане выбора тем для занятий, подбора определенных заданий и даже поддержания определенного настроения во время урока.',
  },
  {
    fullName: 'Светлана',
    src: girlAvatar,
    occupation: 'Специалист тендерного отдела',
    comment:
      'Занимаюсь у Алсу полтора года, значительно улучшила навыки устного перевода и скорость речи. У меня был небольшой опыт выполнения переводов, но именно благодаря индивидуальному подходу и профессионализму Алсу я смогла развить свои навыки. Темы уроков всегда интересные и разнообразные, что помогает сохранять мотивацию.',
  },
  {
    fullName: 'Елена',
    src: elena,
    occupation: 'Методист',
    comment:
      'Ситуация с COVID -19 практически не оставила для меня других вариантов для изучения немецкого языка. Онлайн-курсы с Алсу дают мне возможность работать со своей скоростью, в темпе, который подходит именно мне. Алсу предлагает гибкий график проведения онлайн-занятий, а у меня есть возможность изучать немецкий язык из любой точки и в удобное время суток. Онлайн-обучение с Алсу - эффективный и интересный метод обучения немецкого языка в целом.',
  },
  {
    fullName: 'Алмаз',
    src: almaz,
    occupation: 'Преподаватель',
    comment:
      'Современные реалии диктуют условия для преподавателей относительно публикации статей в иностранных журналах. Не любой человек сможет перевести на английский язык научную статью грамотно. В течении 3-4 лет пользуюсь услугой перевода, которую предоставляет Алсу. Алсу очень грамотно, быстро и за приемлемую цену осуществляет технический перевод.',
  },
];

const TestimonialCardsRow = ({ isInfiniteScroll, setIsInfiniteScroll }) => {
  return (
    <div
      className={`inline-block w-max animate-testimonials ${isInfiniteScroll ? '' : 'pause'}`}
    >
      {testimonialCardData.map((item, index) => (
        <div
          key={`${index}-${item.fullName}`}
          className="relative my-0 inline-block h-full px-[12px]"
        >
          <TestimonialCard
            {...item}
            isInfiniteScroll={isInfiniteScroll}
            setIsInfiniteScroll={setIsInfiniteScroll}
          />
        </div>
      ))}
    </div>
  );
};

TestimonialCardsRow.propTypes = {
  isInfiniteScroll: propTypes.bool,
  setIsInfiniteScroll: propTypes.func,
};

export default TestimonialCardsRow;
