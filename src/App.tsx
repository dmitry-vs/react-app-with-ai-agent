import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider, Layout, theme } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UsersTable from "./components/UsersTable";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import lightTheme from "./theme.json";
import darkTheme from "./theme-dark.json";
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

const AppContent: React.FC = () => {
  const { theme: currentTheme } = useTheme();

  // Prepare the theme configuration with algorithm
  const themeConfig =
    currentTheme === "dark"
      ? { ...darkTheme, algorithm: theme.darkAlgorithm }
      : lightTheme;

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <StyleProvider layer>
          <ConfigProvider theme={themeConfig as any}>
            <Layout className="min-h-screen">
              <Sidebar />
              <Layout>
                <Header />
                <Layout.Content className="bg-primary-50 p-8">
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/users" replace />}
                    />
                    <Route path="/users" element={<UsersTable />} />
                    <Route path="/counter" element={<Counter />} />
                  </Routes>
                </Layout.Content>
                <Footer />
              </Layout>
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
          </ConfigProvider>
        </StyleProvider>
      </QueryClientProvider>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
