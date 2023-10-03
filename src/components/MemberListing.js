function MemberListing(props) {
  const { memberList } = props;
  return (
    <>
      <h3>Üyeler</h3>
      <ul>
        {memberList.map((member, index) => {
          return (
            <li key={index}>
              <a href={`mailto:${member.email}`}>{member.username}</a>
              {member.position}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MemberListing;
