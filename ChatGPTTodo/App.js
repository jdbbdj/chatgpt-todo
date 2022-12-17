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
