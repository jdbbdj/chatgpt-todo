# Welcome to My First Chat GPT generated application!

# Description

- This Project will be **documented** using questions and answers by stackoverflow
- **Questions used** will be inserted on the readme through Q and A tags

# Q&A

> **1** Q: How to build an application using React Native?
> **A1**: Install the React Native CLI by running the following command:
> npm install -g react-native-cli
> **A2**: Create a new project using the React Native CLI by running the following command:
> react-native init ChatGPTTodo
> **A3**: Navigate to the project directory:
> cd ChatGPTTodo
> **A4**: Start the development server:
> react-native start
> **A5**: Run the app on an emulator or physical device:
> react-native run-android

# A1 Problem encountered TypeError: cli.init is not a function

> Troubleshooting:
> npm uninstall -g react-native
> npm uninstall -g react-native-cli
> npm -g list
> npm install -g react-native-cli
> npm install -g react-native
> npx react-native init ProjectName

# Disclaimer for A1:

> Follow up question: I am getting an error of TypeError: cli.init is not a function
> Chat GPT answers the same with the stack overflow
> **A1** Make sure that you have the latest version of the React Native CLI installed. You can check the installed version by running the following command:
> react-native -v
> **A2** If you have an older version of the React Native CLI installed, try uninstalling it and then installing the latest version:
> npm uninstall -g react-native-cli
> npm install -g react-native-cli
> **A3** If the issue persists, try deleting the node_modules directory and installing the dependencies again:
> rm -rf node_modules
> npm install

## Conclusion:

> Human interaction are much important in following ChatGPT instructions, I encountered a ERROR:EPERM operation not permitted error and tried to run the code
> in an administrative permission on the folder. and it worked.

> **2** Q: How to build a todo-list application using react-native?
> **A1** Install the required dependencies. For this project, you will need to install react-native-elements and react-native-vector-icons:
> npm install react-native-elements
> npm install react-native-vector-icons
> **A2** Open the App.js file in your text editor and replace the default code with the following code:

```
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { title: newTodo, key: Math.random().toString() }]);
    setNewTodo('');
  };

  const deleteTodo = key => {
    setTodos(todos.filter(todo => todo.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            rightIcon={
              <Icon
                name="md-trash"
                size={24}
                color="#900"
                onPress={() => deleteTodo(item.key)}
              />
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

```
