import { fetchStarredTopics } from './actions';

export default function Runner() {
  return (
    <form action={fetchStarredTopics}>
      <button role="submit">run!</button>
    </form>
  );
}
