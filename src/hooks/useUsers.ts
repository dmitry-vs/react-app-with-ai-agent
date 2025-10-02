import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/user";

// Query function for fetching users
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("/api/users");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Custom hook for users data
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
