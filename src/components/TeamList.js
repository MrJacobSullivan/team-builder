import TeamMember from './TeamMember'

export default function TeamList({ teamMembers }) {
  return teamMembers ? (
    <div>
      {teamMembers.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  ) : (
    <p>loading...</p>
  )
}
