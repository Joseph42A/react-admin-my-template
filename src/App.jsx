// in src/App.tsx
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./components/Posts";
import PostIcon from "@mui/icons-material/Book";
import { authProvider } from "./authProvider";

const dataProvider = jsonServerProvider(
  "https://fronttask.techeyeco.com/api/ClientSide"
);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="GetProducts"
      options={{ label: "Products" }}
      list={PostList}
      // edit={PostEdit}
      // create={PostCreate}
      icon={PostIcon}
    />
    {/* <Resource
      name="users"
      list={UserList}
      recordRepresentation="name"
      icon={UserIcon}
    /> */}
  </Admin>
);

export default App;
