import "./index.module.css";
import notFoundImg from "./img.jpg";

function NotFound() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "80vh",
      }}
    >
      <img src={notFoundImg} alt="404 illustration, page not found" />
      <h1
        style={{
          fontFamily: "Suisse Works Bold",
          margin: "2.4rem auto .8rem",
          maxWidth: "48rem",
          fontWeight: 700,
          fontSize: "3.2rem",
          lineHeight: 1.25,
          letterSpacing: "-.016rem",
          textAlign: "center",
        }}
      >
        We can’t find the page you’re looking for
      </h1>
    </div>
  );
}

export default NotFound;
