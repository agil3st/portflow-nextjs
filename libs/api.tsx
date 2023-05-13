export default async function api({ page, token, query, plain }) {
  var url = `${process.env.API_BASE_URL}/content/portflow/${page}/`;
  console.log(url);
  
  if (plain) {
    url = page
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token ?? process.env.API_TOKEN}`,
    },
    query
  });

  // console.log(res.json());

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
