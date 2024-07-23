import React from 'react'
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <>
      <div className='aboutcontainer'>
        <div className='aboutcard'>
          <div className='acard1 acard'><img src='https://classplusapp.com/growth/wp-content/uploads/2023/01/Scaffolding-in-education-a-teachers-guide.jpg' alt='Loading'/></div>
          <div className='acard2 acard'>
            <h2>About Our Company</h2>
            <p>It was originally taken from a Latin text written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.</p>
            <Button variant="success">Learn More</Button>{' '}
          </div>
        </div>
        <div className='aboutcard'>
            <div className='acard3'>
              <p>It was originally taken from a Latin text written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.</p>
            </div>
            <div className='acard3'>
            <p>It was originally taken from a Latin text written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.</p>
            </div>
            <div className='acard3'>
            <p>It was originally taken from a Latin text written by a Roman Scholar, Sceptic and Philosopher by the name of Marcus Tullius Cicero, who influenced the Latin language greatly.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About