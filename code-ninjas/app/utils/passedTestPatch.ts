import axios from "axios";

export default async function patchUser(slug: string, username: string) {
  const { data } = await axios.get(`/api/users/${username}`);
  if (!data.problems_solved.includes(slug)) {
    data.problems_solved.push(slug);
    axios.patch(`/api/users/${username}`, { ...data });
  }
}
