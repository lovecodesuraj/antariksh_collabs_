import React from 'react';
import './BlogPost.css';
import image from './shutterstock_557126443-scaled.jpg';

const BlogPost = (props) => {
  const { title, date, content } = props; 
  const imageAlt = "Image description";

  return (
    <>    
    <div className="blog-post page">
    <article className="blog-post">
      <h2 className="post-title">Exploring the Wonders of the Cosmos: A Journey into Astronomy
</h2>
      <img className="post-title" src={image} alt={imageAlt} height="500" width="1100"/>
      <h3>Introduction</h3>
      <p>Welcome to our astronomy page, where we embark on a captivating journey to unravel the mysteries of the cosmos. Astronomy, the study of celestial objects and phenomena beyond Earth's atmosphere, has fascinated humans for millennia. From ancient civilizations gazing at the night sky to modern-day astronomers probing the depths of space, our quest for knowledge about the universe knows no bounds. In this blog, we will delve into the wonders of astronomy, exploring its history, latest discoveries, and the profound questions that drive our curiosity.</p>
      <h3>The Endless Night Sky: A Brief History of Astronomy</h3>
      <p>The story of astronomy is intertwined with human history, as our ancestors looked up at the night sky with wonder and awe. Ancient civilizations, such as the Egyptians, Greeks, and Mayans, developed early observations of celestial events, often associating them with mythology and religious beliefs. Fast forward to the Renaissance era, when astronomers like Nicolaus Copernicus and Johannes Kepler introduced the heliocentric model, paving the way for a more accurate understanding of the solar system.</p>
      <h3>Telescopes: Unveiling the Hidden Universe</h3> 
      <p>One of the most revolutionary inventions in the history of astronomy is the telescope. Galileo Galilei's first use of a telescope to study celestial bodies revealed the craters on the Moon and the moons of Jupiter, challenging the geocentric view of the universe. Since then, telescopes have evolved, and observatories dot the globe and even orbit in space. We'll explore the different types of telescopes, from optical to radio telescopes, and the groundbreaking discoveries they have enabled.</p>
      <h3>The Sun and the Stars: Our Cosmic Neighbors</h3>
      <p>The stars, those distant pinpricks of light, have captivated human imagination for eons. We'll delve into the life cycle of stars, from their birth in vast nebulae to the fiery supernovae that mark their demise. Additionally, we'll explore the enigmatic black holes, the remnants of massive stars, whose gravitational pull is so intense that not even light can escape.
</p>
      <h3>The Planets: Our Neighbors in the Solar System</h3>
      <p>Our cosmic journey takes us to our planetary neighbors, each with its unique characteristics and mysteries waiting to be unraveled. From the gaseous giants like Jupiter and Saturn, adorned with mesmerizing rings, to the rocky worlds of Mars and Venus, we'll examine the latest missions and discoveries that reveal the secrets of our solar system.</p>
      <h3>Beyond the Solar System: Exoplanets and the Search for Extraterrestrial Life</h3>
      <p>The discovery of exoplanets, planets orbiting stars outside our solar system, has revolutionized our understanding of the universe's diversity. We'll explore how astronomers detect exoplanets and the potential habitable worlds that may exist beyond Earth. The search for extraterrestrial life, one of the most intriguing questions in astronomy, continues to inspire new missions and investigations.
</p>
      <h3>Dark Matter and Dark Energy: Unseen Forces Shaping the Universe</h3>
      <p>Despite the wonders we can observe, the universe remains full of secrets. Dark matter, a mysterious invisible substance, and dark energy, an enigmatic force driving the universe's accelerated expansion, constitute the majority of the cosmos. We'll discuss the ongoing efforts to decipher the nature of these cosmic enigmas and their profound implications for our understanding of the universe.</p>
      <h3>Conclusion: Embracing the Infinite</h3>
      <p>As we conclude our journey into the cosmos, we recognize that the universe's vastness is matched only by its complexity. Astronomy humbles us, revealing how interconnected we are with the cosmos. Every star, every galaxy, and every planet is a part of our shared cosmic heritage. We hope this blog has inspired you to gaze up at the night sky with a renewed sense of wonder and curiosity.
</p>
      <p1>So, join us as we continue to explore the wonders of the universe, one star at a time, and unravel the mysteries that lie beyond the horizon of our knowledge.
</p1><br/>
      <p1>Keep looking up!</p1>
      <h4>Team Antariksh</h4>
      {/* <p className="post-meta">Published on {date}</p>
      <p className="post-content">{content}</p> */}
    </article>
    </div>
    </>
  );
};

export default BlogPost;