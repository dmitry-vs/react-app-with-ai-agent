import { useMutation } from "@tanstack/react-query";
import type { CreatePostRequest, Post } from "../types/post";

// Function to create a post using POST call
const createPost = async (postData: CreatePostRequest): Promise<Post> => {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      userId: postData.userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Custom hook for creating posts
export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Post created successfully
    },
    onError: (error) => {
      console.error("Failed to create post:", error);
    },
  });
};
