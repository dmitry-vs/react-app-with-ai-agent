import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/post";

// Query function for fetching all posts
const fetchAllPosts = async (): Promise<Post[]> => {
  const response = await fetch("/api/posts");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Custom hook for fetching all posts
export const useAllPosts = () => {
  return useQuery({
    queryKey: ["posts", "all"],
    queryFn: fetchAllPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
