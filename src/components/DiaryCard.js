import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const moodColors = {
  happy: '#fef3c7',
  focus: '#e0f2fe',
  calm: '#eef2ff',
  tired: '#fee2e2',
  social: '#ecfccb',
};

export default function DiaryCard({ title, date, preview, moodUri, mood }) {
  const borderColor = moodColors[mood] || '#e5e7eb';
  return (
    <View style={[styles.card, { borderColor }]}>
      <Image source={{ uri: moodUri }} style={styles.mood} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});
