import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image, Button, ActivityIndicator } from 'react-native';
import ApiManager from './src/apiManager/ApiManager'; // Import ApiManager
import { User } from './src/model/User'; // Import User model

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await ApiManager.getUsers();
      const userData = User.fromJson(response);
      setUser(userData);
      console.log(userData);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={getUser}>
        <Text style={styles.buttonText}>Get Another User</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator />}

      {/* Card view for user data */}
      <View style={styles.card}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.cardTitle}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.cardSubtitle}>{user.username}</Text>
        <Text>Email : {user.email}</Text>

        <Text style={styles.cardDetail}>Employment: {user.employment?.title}</Text>
        <Text style={styles.cardDetail}>Key Skill: {user.employment?.key_skill}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'none', // Prevents automatic capitalization
  },
  card: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardDetail: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default App;
