import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://api.github.com/graphql";
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

const GITHUB_QUERY = gql`
  query GetGitHubStats($username: String!) {
    user(login: $username) {
      # 1. Total Public Repositories
      publicRepositories: repositories(privacy: PUBLIC) {
        totalCount
      }

      # 2. Total Pull Requests (All-time)
      pullRequests {
        totalCount
      }

      # 3. Total Commits (Current year/recent collection)
      contributionsCollection {
        totalCommitContributions
        restrictedContributionsCount # Includes private commits if your token has access
      }

      # 4. Total GitHub Stars (Fetches star counts per repo to sum up on your client side)
      repositories(
        first: 100
        ownerAffiliations: OWNER
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          name
          stargazerCount
        }
      }
    }
  }
`;

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      {
        error: "Username parameter is required",
      },
      { status: 400 },
    );
  }

  try {
    const data = await client.request(GITHUB_QUERY, { username });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to fetch GitHub stats",
      },
      { status: 500 },
    );
  }
}
