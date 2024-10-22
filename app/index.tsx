// Struttura del progetto:
//   Costanti: tutto ciò che è di appoggio nel progetto
//   DATA: tutte le richieste api
//   Callback: tutte le funzioni che useremo nel progetto
//   UI: tutto lo stile della schermata
import React from 'react';
import { Todo, todoListData } from '@/api/data.mock';
import { TodoView } from '@/components/molecules/todoComponent/todoView.molecule';

import { useState } from 'react';
import { View, Text, ListRenderItem, FlatList } from 'react-native';

export default function Index() {
  const [todoList, setTodoList] = useState([]);

  const renderItem: ListRenderItem<Todo> = ({ item }) => {
    return <TodoView id={item.id} title={item.title} description={item.description} />;
  };
  // ** UI ** //

  return (
    <View style={{ flex: 1 }}>
      <Text>ciao</Text>
      <Text>ciao</Text>
      <FlatList data={todoListData} renderItem={renderItem} />
    </View>
  );
}
