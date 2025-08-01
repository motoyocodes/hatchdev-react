function Homepage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-yellow-400">
      <div className="card">
        <div>
          <img className="image" src="/images/image1.webp" alt="" />
          <p className="learn">Learning</p>
          <p>Published 21 Dec 2013</p>
          <h1 className="font-bold">HTML and CSS Foundations</h1>
          <p className="content">
            These languages are the backbone of every website, defining content,
            structure, and presentation
          </p>

          <div className="flex items-center gap-2 mt-2">
            <img
              className="w-10 h-10 rounded-2xl "
              src="/images/image2.jpg"
              alt=""
            />
            <p>Greg hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
