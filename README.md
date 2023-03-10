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

- Unfortunately nothing shows on this, for the random generation of data didn't work but the header shows so...

  > How about we tweak the question using the one used by the video reference?

- How to build a todo list application using react native/React Native?

  > It still doesnt show any data, the design is good and simple, yet it can't generate its own solid data

- I feed it with a statement of there's no data on your code --following the code it provided the answer is a pretty clever answer to get

  > The code I provided is a basic example of how to build a todo-list application using React Native. The code defines a function called App() that returns a view containing a flat list of todo items.

  > The state of the app is stored in two variables: todos and newTodo. todos is an array that holds the list of todo items, and newTodo is a string that holds the current value of the input field for adding new todo items.

  > The addTodo function is called when the user submits a new todo item. It adds the new todo to the todos array and clears the newTodo field. The deleteTodo function is called when the user clicks the delete icon next to a todo item. It removes the item from the todos array.

  > The flat list is rendered using the data prop and the renderItem prop. The renderItem prop defines a function that takes an item from the data array and returns a list item component. The list item component includes a delete icon that calls the deleteTodo function when clicked.

  > I hope this helps! Let me know if you have any further questions.

- Then I followed up with "can you provide a styling for the FlatList code you've provided"
  > It responded with a low effort response on the first try and retried using the "Regenerate response"

```
<FlatList
  style={styles.flatList}
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
      containerStyle={styles.listItem}
      titleStyle={styles.listItemTitle}
    />
  )}
/>

const styles = StyleSheet.create({
  ...
  flatList: {
    marginTop: 16,
    marginBottom: 16,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemTitle: {
    fontSize: 16,
  },
});
```

## Debugging

- The code is pretty good in structure but for ListItem it doesn't show any data even you've provided the good sample data on the useState,
  doing this it could take a lot of time to debug while trying the conventional way of stackoverflowing and debugging things on your own. Here
  are some tweaking of code to display the data from the FlatList, for some reason the ListItem doesnt show

> **Disclaimer**: The tweaking of code is simple and aiming to display the data, icons doesn't work also

```
import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      key: 0,
      title: 'Account',
      icon: 'av-timer',
    },
    {
      key: 1,
      title: 'Category',
      icon: 'flight-takeoff',
    },
    {
      key: 2,
      title: 'About',
      icon: 'av-timer',
    },
  ]);
  const [newTodo, setNewTodo] = React.useState('YETS');

  const addTodo = () => {
    console.log(todos);
  };

  const deleteTodo = key => {
    setTodos(todos.filter(todo => todo.key !== key));
  };

  const Item = ({title}) => (
    <View
      style={[
        styles.listItem,
        {
          flex: 1,
          padding: 0,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      ]}>
      <Text style={styles.listItemTitle}>{title}</Text>
      <Icon
        name="md-trash"
        size={24}
        color="#900"
        onPress={() => deleteTodo(key)}
      />
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} key={item.key} />;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {height: 40}]}>Todo List</Text>

      <FlatList
        style={styles.flatList}
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.key}
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
  flatList: {
    marginTop: 16,
    marginBottom: 16,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemTitle: {
    fontSize: 16,
    color: 'black',
  },
});
```

## CONCLUSION

Chat GPT is a strong tool for developers, it gives a different approach than Stack Overflow in helping the developer solve a specific problem or two. Hence, as many AI it is data driven, the help it could offer is based on the date and time the data has been fed on its model. As for now Chat GPT can't replace developer, but this comment could be wrong on the near future. Stack Overflow and Chat GPT are such great tools for developers for my opinion.
