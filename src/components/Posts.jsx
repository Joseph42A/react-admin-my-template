import { useMediaQuery } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  useRecordContext,
} from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

const postFilters = [<TextInput source="search" label="Search" alwaysOn />];

export const PostList = () => {
  return (
    <List filters={postFilters}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        {/* <ReferenceField source="userId" reference="users" /> */}
        <TextField source="name" />
        <TextField source="code" />
        <TextField source="price" />
        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" disabled />
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
