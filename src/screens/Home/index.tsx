/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participantName.trim() === '') {
      return Alert.alert(
        'No name provided',
        'You need to type a name in order to add a participant.',
      )
    }
    if (participants.includes(participantName)) {
      return Alert.alert('Participant exists', 'This name is already registered')
    }

    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remove', `Remove the participant ${name}?`, [
      {
        text: 'Yes',
        onPress: () =>
          setParticipants((prevState) => prevState.filter((participant) => participant !== name)),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Important Meeting</Text>

      <Text style={styles.eventDate}>Wednesday, june 14th 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name of participant"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            No participants arrived yet. Add participants to list.
          </Text>
        )}
      />
    </View>
  )
}
