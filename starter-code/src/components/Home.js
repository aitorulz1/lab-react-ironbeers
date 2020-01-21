import React from 'react'
import Section from './misc/Section'

const Home = () => (
  <div className="Home">
    <Section to="/beers" img="../images/beers.png" title="All Beers" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
    <Section to="/random-beer" img="../images/random-beer.png" title="Random Beer" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
    <Section to="/new-beer" img="../images/new-beer.png" title="New beer" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
  </div>
);

export default Home