import { useMutation, useQueryClient } from "@tanstack/react-query";

// Function to delete a post using DELETE call to JSONPlaceholder
const deletePost = async (postId: number): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // JSONPlaceholder returns empty response for DELETE, so we don't need to parse JSON
  return;
};

// Custom hook for deleting posts
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      // Invalidate and refetch posts queries to update the UI
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      console.error("Failed to delete post:", error);
    },
  });
};
