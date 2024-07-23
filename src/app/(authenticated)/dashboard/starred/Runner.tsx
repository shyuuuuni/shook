import { run } from './actions';

export default function Runner() {
  return (
    <form action={run}>
      <button role="submit">run!</button>
    </form>
  );
}
