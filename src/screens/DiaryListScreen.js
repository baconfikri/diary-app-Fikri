import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk dan membantu memulai hari dengan tenang.',
    mood: 'happy',
    moodUri: 'https://picsum.photos/seed/happy/80',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru yang berguna untuk tugas akhir.',
    mood: 'focus',
    moodUri: 'https://picsum.photos/seed/focus/80',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah dan menenangkan pikiran.',
    mood: 'calm',
    moodUri: 'https://picsum.photos/seed/calm/80',
  },
  {
    id: 4,
    title: 'Belajar Sampai Larut',
    date: '2025-10-03',
    preview:
      'Menyelesaikan bab sulit pada malam hari. Meski lelah, ada kepuasan setelah memahami konsep baru.',
    mood: 'tired',
    moodUri: 'https://picsum.photos/seed/tired/80',
  },
  {
    id: 5,
    title: 'Ngopi dan Diskusi',
    date: '2025-10-02',
    preview:
      'Bertemu teman, berdiskusi proyek, dan mendapat ide-ide segar. Sesi yang produktif dan menyenangkan.',
    mood: 'social',
    moodUri: 'https://picsum.photos/seed/social/80',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar/48' }}
          style={styles.avatar}
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          mood={entry.mood}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
