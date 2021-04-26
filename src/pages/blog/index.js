import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/cubswinner3.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #92140C, -0.5rem 0 0 #92140C',
              backgroundColor: '#92140C',
              color: 'white',
              padding: '1rem',
            }}
          >
            Love
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h3 className="has-text-weight-semibold is-size-2">The Power of having a Team</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    Babe Ruth, one of the most famous baseball players of all time once said "The way a team plays as a whole determines its success.
                    You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime."
                    A team in almost any context is more powerful then the individual, but you have to be able to work together. By utilizing a good 
                    team you may find that achieving your goals will be easier, whilst having a bad team might act as a setback. This teamwork works as
                    a form of <strong>Love</strong>.
                  </p>
                  <br></br>
                  <br></br>
                  <h3 className="has-text-weight-semibold is-size-2">What defines a succesful Team?</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    It is imporant to find a team with similar goals. If all of your goals are too different, you'll probably end up 
                    working independently. Edith Cowan University did a case study in 2011 in which they defined some key aspects that form
                    a succesful team. Some of these elements that I found important were:
                  </p>
                  <ul style={{ paddingLeft: '50px',fontSize: '1.5em'}}>
                    <li style={{listStyleType: 'disc', padding: '25px'}}>One cannot succeed unless the other members of the group succeed (Smith, 1996)</li>
                    <li style={{listStyleType: 'disc', padding: '25px'}}>Members have strong shared values (Kets de Vries, 1999)</li>
                    <li style={{listStyleType: 'disc', padding: '25px'}}>There is a strong commitment to succeed (Critchley & Casey, 1986)</li>
                    <li style={{listStyleType: 'disc', padding: '25px'}}>Engaged in and satisfied with their work (Wageman, 1997)</li>
                  </ul>
                  <br></br>
                  <br></br>
                  <h3 className="has-text-weight-semibold is-size-2">A Team can work as a Family</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    Achieving your goals can be daunting and scary at times. Having a supportive team to help
                    you emotionally when you're down can help build resilience and allow you to continue to work 
                    on your goals after you fail. A Team doesn't always have to be a random group of members, it can 
                    be your sibling or friend or just someone who you know will be supportive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
