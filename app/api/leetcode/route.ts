import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://leetcode.com/graphql";
const client = new GraphQLClient(endpoint);

const LEETCODE_QUERY = gql`
  query getLeetCodeStats($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
      userCalendar {
        streak
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
    const data = await client.request(LEETCODE_QUERY, { username });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to fetch LeetCode stats",
      },
      { status: 500 },
    );
  }
}