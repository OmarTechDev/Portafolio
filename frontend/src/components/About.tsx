import './About.css';

function AboutBody() {

  const printed: { title: string; body: React.ReactNode }[] = [
    {
      title: "How would you describe your experience in Full Stack development?",
      body: (
        <>
          My personal experience was a constant learning process that began when I realized how vast and interesting web development is,
          prompting me to become a web developer by myself. I took my first step by taking free online courses on my own which culminated in
          obtaining a FullStack diploma from <b>Universidad Simón y Patiño</b> and completing the Open online course from <b>University
          of Helsinki</b>. Now I am looking to embark on the next stage, which I consider to be the employment of the knowledge learned,
          in a really company.
        </>
      ),
    },
    {
      title: "What programming languages do you master?",
      body: (
        <>
          I am proficient in <b>JavaScript, TypeScript, C#</b>, with expertise in <b>Node.js, React, and .NET</b>.
          My skills extend to both relational and non-relational databases, including <b>MongoDB, MySQL, PostgresSQL, MariaDB, etc.</b>
          Additionally, I have experience with other programming languages such as Django and Python, but my preference and greater
          proficiency lie in working with React.
        </>
      ),
    },
    {
      title: "What recent projects have you developed?",
      body: (
        <>
          This is the most recent project that I have at the moment, although as can be seen on my personal and professional GitHub
          account, I have several projects that I have been working on during my learning process, but they are not yet at a level
          of completeness that allows me to showcase them at the moment in my <b>Portfolio</b>, updating this from JavaScript to
          TypeScript and using .Net for the backend.
        </>
      ),
    },
    {
      title: "How do you like to work in a team?",
      body: (
        <>
          I like structured work environments where each person is assigned a clear task. I believe that communication between team members is
          vital for the proper development of a task, especially in the field of information technology. That's why I appreciate methodologies
          that are applied to achieve this, such as the Scrum methodology, as they seem to be ideal.
        </>
      ),
    },
    {
      title: "How do you handle pressure and tight deadlines?",
      body: (
        <>
          I like structured work environments where each person is assigned a clear task. I believe that communication between team members is
          vital for the proper development of a task, especially in the field of information technology. That's why I appreciate methodologies
          that are applied to achieve this, such as the Scrum methodology, as they seem to be ideal.
        </>
      ),
    }
  ];

  return (
    <div className="questionContainer">
      {printed.map((element,index) => (
        <div className="accordion" id={`accordion${index}`}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`} >
                {element.title}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent={`#accordion${index}`}>
              <div className="accordion-body">
                {element.body}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutBody
