import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UsersTable from "./components/UsersTable";
import LanguageSwitcher from "./components/LanguageSwitcher";
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
          <div className="min-h-screen bg-primary-50 p-8">
            <div className="flex justify-end mb-4">
              <LanguageSwitcher />
            </div>
            <UsersTable />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </ConfigProvider>
      </StyleProvider>
    </QueryClientProvider>
  );
}

export default App;
