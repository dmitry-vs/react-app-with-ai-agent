import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import UsersTable from "./components/UsersTable";
import theme from "./theme.json";

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={theme as any}>
        <div className="min-h-screen bg-primary-50 p-8">
          <UsersTable />
        </div>
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;
