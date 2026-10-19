import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  // Core Requirements: 24 Credits
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

  // Depth of Study: 6 Credits
  const depthCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  // Capstone: 3 Credits
  const capstoneCourse = 'CS 687 Computer Science Capstone';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      {/* Application Icon */}
      <Image
        source={require('./assets/icon.png')}
        style={styles.image}
        resizeMode="contain"
        accessibilityLabel="Core Components application icon"
      />

      {/* Favorite Course Input */}
      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>
          Which course did you like?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          autoCapitalize="characters"
          accessibilityLabel="Enter your favorite course"
        />

        {favoriteCourse.trim().length > 0 && (
          <Text style={styles.favoriteText}>
            Your favorite course: {favoriteCourse.trim()}
          </Text>
        )}
      </View>

      {/* Core Requirements */}
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

      {/* Depth of Study */}
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

      {/* Capstone */}
      <View style={styles.section}>
        <Text style={styles.heading}>
          Capstone (3 Credits)
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

  inputSection: {
    marginBottom: 10,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#222222',
  },

  input: {
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#222222',
  },

  favoriteText: {
    fontSize: 14,
    marginTop: 10,
    color: '#333333',
  },

  section: {
    marginTop: 20,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#FFFF00',
    color: '#000000',
    padding: 8,
    marginBottom: 10,
  },

  course: {
    fontSize: 15,
    color: '#222222',
    marginBottom: 8,
    lineHeight: 22,
  },
});

export default CoreComponents;