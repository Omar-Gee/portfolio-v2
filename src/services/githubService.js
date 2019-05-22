

export default async function () {
  try {
    const url = 'https://api.github.com/users/Omar-Gee/repos'
    const response = await fetch(url).then(res => res)
    return response
  } catch (e) {
    console.log(e);
  }
}