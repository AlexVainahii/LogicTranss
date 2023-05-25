import {
  TeamSection,
  TeamMember,
  TeamMemberName,
  TeamMemberRole,
  TeamMemberImage,
} from './Team.styled';
export const Team = () => {
  return (
    <section>
      <TeamSection>
        <TeamMember>
          <TeamMemberImage src="alexander.jpg" alt="Олександр" />
          <TeamMemberName>Олександр Сидорчук</TeamMemberName>
          <TeamMemberRole>Директор з логістики</TeamMemberRole>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src="anna.jpg" alt="Анна" />
          <TeamMemberName>Анна Василенко</TeamMemberName>
          <TeamMemberRole>Менеджер з перевезень</TeamMemberRole>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src="mikhail.jpg" alt="Михайло" />
          <TeamMemberName>Михайло Ковальчук</TeamMemberName>
          <TeamMemberRole>Спеціаліст зі складського управління</TeamMemberRole>
        </TeamMember>
        <TeamMember>
          <TeamMemberImage src="julia.jpg" alt="Юлія" />
          <TeamMemberName>Юлія Іваненко</TeamMemberName>
          <TeamMemberRole>Логістичний аналітик</TeamMemberRole>
        </TeamMember>
      </TeamSection>
    </section>
  );
};
