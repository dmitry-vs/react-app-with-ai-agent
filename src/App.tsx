import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, Layout } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UsersTable from "./components/UsersTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import theme from "./theme.json";
import "./i18n";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyleProvider layer>
        <ConfigProvider theme={theme as any}>
          <Layout className="min-h-screen">
            <Sidebar />
            <Layout>
              <Header />
              <Layout.Content className="bg-primary-50 p-8">
                <UsersTable />
              </Layout.Content>
              <Footer />
            </Layout>
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </ConfigProvider>
      </StyleProvider>
    </QueryClientProvider>
  );
}

export default App;
