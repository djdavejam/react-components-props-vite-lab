import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let readTime = "";
  if (minutes < 30) {
    const coffees = Math.ceil(minutes / 5);
    readTime = "☕️".repeat(coffees) + ` ${minutes} min read`;
  } else {
    const bentos = Math.ceil(minutes / 10);
    readTime = "🍱".repeat(bentos) + ` ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{readTime}</small>
    </article>
  );
}

export default Article;