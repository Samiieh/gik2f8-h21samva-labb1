const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}


async function getBookDetails(id) {
  const result = await fetch(url + "/" + id)
    .then((result) => result.json())
    .catch((e) => e);
  console.log(result)
  return result;
}

// async function getBookDetails(getId) {
//   let urlString = `https://gik2f8-labs.herokuapp.com/books/${getId}`;
//   const result = await fetch(urlString)
//     .then((result) => result.json())
//     .catch((e) => e);

//   return result;
// }