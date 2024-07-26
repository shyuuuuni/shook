import {
  Metric,
  Topic,
} from '@/app/(authenticated)/dashboard/starred/_types/action';

export const formatMetrics = (
  topics: Topic[],
  metrics: Metric[],
) => `저의 Starred Topic과 Repository 정보는 다음과 같습니다.

# Starred Topics
${topics.map((topic, index) => `Topic#${index}: ${topic.name}, ${topic.description}`).join('\n')}

# Starred Repositories
${metrics.map((metric, index) => {
  const base = [
    `Repository#${index}:
- 저장소 이름: ${metric.name}`,
  ];
  if (metric.description) {
    base.push(`- 저장소 설명: ${metric.description}`);
  }
  if (metric.topics) {
    base.push(`- 저장소 Topic: ${metric.topics.join(', ')}`);
  }
  if (metric.languages && metric.languages.length > 0) {
    base.push(`- 사용 언어: ${metric.languages.join(', ')}`);
  }

  return base.join('\n');
})}
`;
