import './More.css';

const MoreResources = () => {
  return (
    <div id="footereditor"> 
      <header>
        <h1>More Resources</h1>
        <p>Expand your knowledge with additional materials</p>
      </header>
      <main>
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <p>Below are some additional resources to help you dive deeper into various topics.</p>
          <ul>
            <li><a href="#">Online Courses</a></li>
            <li><a href="#">Books & eBooks</a></li>
          </ul>
        </section>
        <section className="useful-links">
          <h2>Useful Links</h2>
          <p>Here are some useful links to websites and tools that can aid your learning.</p>
          <ul>
            <li><a href="#">W3Schools</a></li>
            <li><a href="#">MDN Web Docs</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MoreResources;
