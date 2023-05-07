
const About = () => {
  const teamMembers = [
    {
      name: 'Keith Williams',
      designation: 'Instructor',
      imageSrc: '/images/ym.jpg',
    },
    {
      name: 'Yatindra Mahadik',
      designation: 'Developer',
      imageSrc: '/images/ym.jpg',
    },
    {
      name: 'Roopali Sarode',
      designation: 'Developer',
      imageSrc: '/images/ym.jpg',
    },
    {
      name: 'Devika Vengurlekar',
      designation: 'Developer',
      imageSrc: '/images/ym.jpg',
    },
  ];

  return (
    <div>
      <h1 className="about-header">About Us</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex-container">
            <div className="div-container"><img src={member.imageSrc} alt={member.name} /></div>
            <div className="div-container"> 
            <h2>{member.name}</h2>
            <p>{member.designation}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
