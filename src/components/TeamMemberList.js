import TeamMember from './TeamMember'

export default function TeamMemberList({ teamMembers }) {
  return teamMembers ? (
    <div>
      {teamMembers.map((teamMember) => (
        <TeamMember key={teamMember.id} {...teamMember} />
      ))}
    </div>
  ) : (
    <p>loading...</p>
  )
}
