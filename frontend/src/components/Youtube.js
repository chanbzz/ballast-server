import React from "react";
import PropTypes from "prop-types";
import Header from './Header';
import Footer from './Footer';
import Logout from './Logout';
import './youtube.css';



const Youtube = () => {

  return(

  <>
  <Header />
  <Logout />
  <a id="youtube-help" href="/questions-page/help">
    Back to Help
  </a>
  <div className="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0tn0-DSdHdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0l2nePjDFuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HTNo91qCrak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
  </div>


  <Footer id="youtube-footer" />

  </>

  )
};


Youtube.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Youtube;

