import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import UsersTable from "./components/UsersTable";
import LanguageSwitcher from "./components/LanguageSwitcher";
import theme from "./theme.json";
import "./i18n";

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={theme as any}>
        <div className="min-h-screen bg-primary-50 p-8">
          <div className="flex justify-end mb-4">
            <LanguageSwitcher />
          </div>
          <UsersTable />
        </div>
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;
