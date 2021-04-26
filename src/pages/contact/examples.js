import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/stadiums.jpg')`,
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
            Fear
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h3 className="has-text-weight-semibold is-size-2">Fear forms a blockade around your goals</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    It is commonly talked about how much of a mental game baseball is. Being afraid is not really
                    an option because if it. If you start having doubts in yourself you are less likely to succeed.
                    The website QCBaseball.com provides a perfect example if this. They stated "By focusing on the result
                    and thinking about the negative aspect of failing, theplayer is setting himself up to accomplish the exact 
                    thing he is most fearful of." 
                  </p>
                  <br></br>
                  <br></br>
                  <h3 className="has-text-weight-semibold is-size-2">Everyone experiences fear</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    Fear is a natural trait in humans. It's a survival instict. In some ways it's good to be afraid because it 
                    means that you are:
                      <ol style={{paddingLeft: '50px'}}>
                        <li>surviving</li>
                        <li>challenging yourself</li>
                      </ol>
                    In a 2018 study about fear of failure and anxiety in sport the researchers Marco Correia and Antonio Rosado
                    tested numerous athletes on their fear and anxiety and found that a fear of failure increased anxiety in
                    these athletes.
                  </p>
                  <br></br>
                  <br></br>
                  <h3 className="has-text-weight-semibold is-size-2">So how do we avoid this fear?</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    The biggest thing to note about avoiding this seemingly abundant fear of failure is to
                    keep a positive mindset. By avoiding fear you are avoiding change within your life which
                    pushes you into a static state. In a Medium article titled How To Better Deal With The Fear
                    Of Failure by Michael Bonnell, the author states "Instead of fearing failure, fear the thought 
                    of never learning and growing Life is all about learning and growing, and the more that you allow 
                    the fear of failure to control your life, the less you will learn and the less you will grow from 
                    who you are today into who you want to be tomorrow." This quote obviously resonates with a lot of people
                    because everyone deals with fear, but this is an ideal way to think about fear and flip it into a positive
                    thing.
                  </p>
                  <br></br>
                  <br></br>
                  <h3 className="has-text-weight-semibold is-size-2">Utilize Self Regulation</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    In both the Prediction of Academic Procrastination by Fear of Failure and Self-Regulation study and The Complexity
                    of the Relation between Fear of Failure and Procrastination study the psychologists found direct correlations between
                    procrastination and self regulation. This procrastination could be what's delaying you from reaching your goals but why?
                    This may be due to you fearing failure but by treating failure as a learning experience it doesn't become as scary. Then 
                    all you have to do is regulate yourself to work on your goal and you are on track!
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
