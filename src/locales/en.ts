import type { Locale } from "./types";

const en: Locale = {
  app: {
    title: "Users from JSONPlaceholder",
    reload: "Reload Users",
    loading: "Loading users...",
    error: "Error Loading Users",
  },
  table: {
    id: "ID",
    name: "Name",
    email: "Email",
    phone: "Phone",
    city: "City",
    company: "Company",
    website: "Website",
    pagination: {
      showing: "{{start}}-{{end}} of {{total}} users",
    },
  },
  language: {
    switch: "Switch Language",
    english: "English",
    russian: "Русский",
  },
  post: {
    create: "Create Post",
    title: "Post Title",
    body: "Post Content",
    submit: "Create Post",
    cancel: "Cancel",
    success: "Post created successfully!",
    error: "Failed to create post",
    userId: "User ID",
    id: "Post ID",
    notFound: "Post not found",
    posts: "Posts",
    loadingPosts: "Loading posts...",
    noPosts: "No posts found for this user",
    totalPosts: "Total Posts",
    delete: "Delete",
    deleteConfirm: "Are you sure you want to delete this post?",
    deleteSuccess: "Post deleted successfully!",
    deleteError: "Failed to delete post",
  },
  footer: {
    madeWith: "Made with",
    using: "using modern web technologies",
    dataSource: "Data provided by JSONPlaceholder API",
  },
  sidebar: {
    title: "Navigation",
    users: "Users",
  },
  theme: {
    light: "Light theme",
    dark: "Dark theme",
  },
};

export default en;
