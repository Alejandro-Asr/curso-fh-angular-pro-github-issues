import { sleep } from '@helpers/sleep';
import { GitHubIssue } from '../interfaces';
import { environment } from 'src/environments/environment.development';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueCommentsByNumber = async (
  issueNumber: string
): Promise<GitHubIssue[]> => {
  await sleep(1500);
  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    if (!resp.ok) {
      throw new Error('Can not load comments issues');
    }
    const issues: GitHubIssue[] = await resp.json();

    return issues;
  } catch (error) {
    throw new Error('Can not load comments issues');
  }
};
