import type { GitHubCommit } from '@/types/github';
import * as styles from './CommitList.css';

type CommitListProps = {
  commitList: GitHubCommit[];
};

export default function CommitList({ commitList }: CommitListProps) {
  return (
    <ul>
      {commitList.map((commit) => (
        <li className={styles.listItem} key={commit.sha}>
          <input className={styles.checkbox} type="checkbox" defaultChecked />
          {commit.commit.message}
          <a
            className={styles.link}
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            ({commit.sha.slice(0, 7)})
          </a>
        </li>
      ))}
    </ul>
  );
}
