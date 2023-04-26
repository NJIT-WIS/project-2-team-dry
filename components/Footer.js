const Footer = () => {
    const shareUrl = encodeURIComponent('https://localhost:3000');
    const title = encodeURIComponent('Team D.R.Y.');
  
    return (
      <footer>
        <h3>Share on:</h3>
        <ul>
          <li>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}&source=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`https://www.instagram.com/share?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;