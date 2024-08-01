export type Metric = {
  id: string;
  starredAt: string;
  name: string;
  description: string;
  topics: string[];
  languages: string[];
  owner: string;
  organizationName?: string;
  isInOrganization: boolean;
  readme: string;
};

export type Topic = {
  name: string;
  description?: string;
  icon?: string;
  url?: string;
};

export type StarredRepositoryMetrics = {
  viewer: {
    starredRepositories: {
      edges: {
        cursor: string;
        starredAt: string;
        node: {
          id: string;
          isInOrganization: boolean;
          owner: {
            id: string;
            login: string;
            name?: string;
          };
          name: string;
          description: string;
          repositoryTopics: {
            edges: {
              node: {
                topic: {
                  name: string;
                };
              };
            }[];
          };
          languages: {
            edges: {
              node: {
                name: string;
              };
            }[];
          };
        };
      }[];
    };
  };
};
