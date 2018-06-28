import React from 'react';

const About = () => {
  return (
    <div className="content-container">
      <h1>About This App</h1>

      <p>
        Like the tag line says, this is a stripped down app to keep track of
        your income and expenses if you are someone who works freelance. If you
        have a company, some employees, this will be too simple for what you
        need. This is for anyone who has been doing a possibly inadequate job of
        keeping track of all this stuff with no real system and then finds
        themself scrambling about during tax time...(like me). If all you really
        want is just an easy way to keep track of what you make and what you
        spend, then this may really help you out! You can filter anything you
        add by date, by text, and by category. You add your categories when you
        submit something and then those categories will show up in the drop down
        when you go to filter your income or expenses.
      </p>

      <p>
        I would like to acknowledge <a href="https://mead.io/">Andrew Mead</a> -
        I got the idea for this project after completing one of Andrews courses on Udemy
      </p>
    </div>
  );
};

export default About;
