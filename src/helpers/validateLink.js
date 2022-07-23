function validateLink(link) {
  return link.match(/http/) || link.match(/data/)
    ? link
    : 'https://tehnobzor.ru/wp-content/uploads/2020/12/apple-macbook-pro-13-m1-1.jpg';
}

export default validateLink;
