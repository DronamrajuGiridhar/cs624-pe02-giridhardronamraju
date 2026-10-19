import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  // Replace this placeholder with the verified course name.
  const capstoneCourse = 'Add verified MSCS capstone course';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Image
        source={require('../assets/icon.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.inputLabel}>
        Which course did you like?
      </Text>

      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      {favoriteCourse.trim().length > 0 && (
        <Text style={styles.favoriteText}>
          Your favorite course: {favoriteCourse}
        </Text>
      )}

      <View style={styles.section}>
        <Text style={styles.heading}>
          Core Requirements (24 credits)
        </Text>

        {coreCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Depth of Study (6 Credits)
        </Text>

        {depthCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Capstone
        </Text>

        <Text style={styles.course}>
          {capstoneCourse}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  image: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 20,
  },

  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#888888',
    padding: 10,
    fontSize: 16,
    marginBottom: 12,
  },

  favoriteText: {
    fontSize: 14,
    marginBottom: 15,
  },

  section: {
    marginTop: 20,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 8,
    marginBottom: 10,
  },

  course: {
    fontSize: 15,
    marginBottom: 5,
  },
});

export default CoreComponents;