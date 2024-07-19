'use client';

import { useRepositories } from '../_hooks/useGitHubQuery';
import useUsername from '../_hooks/useUsername';

export default function RepositoryOverview() {
  const username = useUsername();
  const { data: repositories } = useRepositories(username);

  return (
    <section>
      {repositories?.map((repository) => (
        <article key={repository.id}>
          <h2>{repository.name}</h2>
          <p>{repository.description}</p>
        </article>
      ))}
    </section>
  );
}
