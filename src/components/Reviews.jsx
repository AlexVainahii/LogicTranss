import { ReviewAuthor, ReviewContainer, ReviewContent } from './Rewiews.styled';
export const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: 'Іван Петров',
      content:
        'Дуже задоволений послугами LOGICTRANS. Швидка доставка і висока якість обслуговування.',
    },
    {
      id: 2,
      author: 'Олена Сидоренко',
      content:
        'Завжди надійна компанія для наших логістичних потреб. Рекомендую LOGICTRANS усім!',
    },
  ];
  return (
    <section>
      <div>
        <h2>Відгуки</h2>
        {reviews.map(review => (
          <ReviewContainer key={review.id}>
            <ReviewAuthor>{review.author}</ReviewAuthor>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewContainer>
        ))}
      </div>
    </section>
  );
};
