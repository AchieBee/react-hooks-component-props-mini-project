function Article(props) {
  let { title, date, preview, minutes } = props;

  return (
    <>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{minutes}</p>
    </>
  );
}

export default Article;
