import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/post";

// Query function for fetching posts by user ID
const fetchPosts = async (userId: number): Promise<Post[]> => {
  const response = await fetch(`/api/posts?userId=${userId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Custom hook for fetching posts by user ID
export const usePosts = (userId: number) => {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: () => fetchPosts(userId),
    enabled: !!userId, // Only fetch when userId is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
