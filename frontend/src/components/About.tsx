import './About.css';

function AboutBody() {

  const printed: { title: string; body: React.ReactNode }[] = [
    {
      title: "How would you describe your experience in Full Stack development?",
      body: (
        <>
          I describe my experience as a constant learning process that began when I realized how vast and interesting web development is,
          prompting me to become a web developer by myself. I took my first step by taking free online courses on my own which culminated in
          obtaining a FullStack diploma from <b>Universidad Simón y Patiño</b> and completing the Open online course from <b>University
          of Helsinki</b>. Now I could embark on the next stage, which I consider to be the employment of the knowledge learned.
        </>
      ),
    },
    {
      title: "What programming languages do you master?",
      body: (
        <>
          I am proficient in <b>Javascript</b> <b>[</b>Express, Nodejs, jwt, bycrypt, axios, Eslint, async/await<b>]</b> and <b>React</b> <b>[</b>
          css, react-bootstrap, Collections, Keys Attributes ,Forms, etc<b>]</b>. I am also familiar with other programming languages such as
          Django and Python, although my preference and greater proficiency lie with the former.
        </>
      ),
    },
    {
      title: "What recent projects have you developed?",
      body: (
        <>
          This is the most recent project that I have at the moment, although as can be seen on my GitHub account, I have several projects that
          I have been working on during my learning process, but they are not yet at a level of completeness that allows me to showcase them at
          the moment in my <b>Portfolio</b>, with the exception of a calculator. I have also completed Dockerization projects with Jenkins and Nexus
          as a final project for a diploma.
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
