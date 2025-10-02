export interface Locale {
  app: {
    title: string;
    reload: string;
    loading: string;
    error: string;
  };
  table: {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    company: string;
    website: string;
    pagination: {
      showing: string;
    };
  };
  language: {
    switch: string;
    english: string;
    russian: string;
  };
  post: {
    create: string;
    title: string;
    body: string;
    submit: string;
    cancel: string;
    success: string;
    error: string;
    userId: string;
    id: string;
    notFound: string;
    posts: string;
    loadingPosts: string;
    noPosts: string;
    totalPosts: string;
    delete: string;
    deleteConfirm: string;
    deleteSuccess: string;
    deleteError: string;
  };
  footer: {
    madeWith: string;
    using: string;
    dataSource: string;
  };
}
