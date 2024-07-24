import { fetchStarredRepositoryMetrics } from './actions';

export default function Runner() {
  return (
    <form action={fetchStarredRepositoryMetrics}>
      <button role="submit">run!</button>
    </form>
  );
}
