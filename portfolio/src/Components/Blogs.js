import React from 'react'

class Blog extends React.Component{
    render(){
        return(
            <div className="blogs">
              <h1>Blogs: </h1>
              <a href="https://medium.com/@jacky.jia.lin/what-i-wish-i-knew-before-going-into-flatiron-bootcamp-3ef2a8729eeb">  <img src="https://miro.medium.com/max/770/0*4WVnP8bEzw8W2Ee1" class="bpicture"  height="300" width="300"/> </a>
              <br/>
              <strong>What I Wish I Knew Before Going Into Flatiron Bootcamp</strong>
              <br/>
              <a href="https://medium.com/@jacky.jia.lin/what-is-imposter-syndrome-76e7bb694a8b">  <img src="https://miro.medium.com/max/725/0*VGIjaCRbI53mGhxf.jpg" class="bpicture"  height="300" width="300"/> </a>
              <br/>
              <strong>What Is Imposter Syndrome?</strong>
              <br/>
              <a href="https://medium.com/@jacky.jia.lin/fizz-buzz-interview-question-6e42e18569ab">  <img src="https://miro.medium.com/max/514/1*UzQ0y9oWOZccYgwosk5ALA.png" class="bpicture"  height="300" width="300"/> </a>
              <br/>
              <strong>FizzBuzz Interview Question</strong>
              <br/>
              
            </div>
        )
    }
}

export default Blog 