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
};

export default en;
