import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/stadium2.jpeg')`,
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
            Passion
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h3 className="has-text-weight-semibold is-size-2">Motivate yourself from your Passion</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    It is commonly talked about how much of a mental game baseball is. Being afraid is not really
                    an option because if it. If you start having doubts in yourself you are less likely to succeed.
                    The website QCBaseball.com provides a perfect example if this. They stated "By focusing on the result
                    and thinking about the negative aspect of failing, theplayer is setting himself up to accomplish the exact 
                    thing he is most fearful of." 
                  </p>
                  <br></br>
                  <br></br>
                  <h3 className="has-text-weight-semibold is-size-2">Passion and Grit</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    Grit is defined as the passion and perserverance for long term goals. 
                    Think of Grit as the ability to strikeout and still have the passion and perserverance 
                    to go back to the plate again. Four Psychology professors all from accredited universities
                    performed a study on Grit for long-term goals. They noticed that individuals who took apart
                    in the study who showed mroe grit ended up attaining higher levels of education. This is 
                    important because it relates back to my page on knowledge which also helps you attain your goals. 
                  </p>
                  <br></br>
                  <br></br>
                  <h3 className="has-text-weight-semibold is-size-2">Success takes time</h3>
                  <p style={{ fontSize: '1.5em'}}>
                    Rarely do you ever see success happen over night. Reaching your long term goals will take
                    years and years and along that path you will most likely see loads of failure which sucks
                    but, that's why it's important to utilize knowledge to stay resilient and stay passionate
                    about your goals in order to retain perserverance.
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
