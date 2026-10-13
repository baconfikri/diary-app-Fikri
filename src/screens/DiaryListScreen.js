import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';

const DATA = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Bangun lebih pagi, menyiapkan kopi dan menulis refleksi singkat.',
    body: 'Pagi ini terasa tenang dan jauh lebih fokus. Saya memulai hari dengan menata jadwal belajar, menyiapkan kopi hangat, dan menuliskan semua rencana penting agar kegiatan hari ini lebih terarah.',
    moodUri: 'https://picsum.photos/seed/happy/200',
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul dan berdiskusi dengan teman di kelas.',
    body: 'Hari ini saya berhasil menyelesaikan modul praktek dan berdiskusi dalam kelompok. Diskusi membuat saya lebih memahami konsep, terutama saat menyiapkan materi untuk tugas berikutnya.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Membaca buku sambil menikmati angin sore yang nyaman.',
    body: 'Saat senja, saya menghabiskan waktu di taman untuk membaca buku dan merenung. Kondisi yang tenang membuat pikiran lebih segar dan memberi energi baru untuk memulai aktivitas malam.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
  },
  {
    id: 4,
    title: 'Belajar Mobile',
    date: '2025-10-03',
    preview: 'Menyelesaikan latihan React Native dan memeriksa layout.',
    body: 'Hari ini saya fokus mendalami React Native dan mencoba membuat komponen yang lebih rapi serta responsif. Saya belajar bahwa layout yang konsisten membuat app lebih mudah dibaca dan dipahami.',
    moodUri: 'https://picsum.photos/seed/mobile/200',
    heroUri: 'https://picsum.photos/seed/mobilehero/800/450',
  },
  {
    id: 5,
    title: 'Hari yang Menyenangkan',
    date: '2025-10-02',
    preview: 'Berjalan santai sambil mengabadikan momen sederhana.',
    body: 'Saya menikmati hari ini dengan berjalan santai di lingkungan sekitar dan memperhatikan detail kecil dari kegiatan sehari-hari. Kadang momen sederhana justru paling berkesan dan memberi rasa syukur.',
    moodUri: 'https://picsum.photos/seed/joy/200',
    heroUri: 'https://picsum.photos/seed/joyhero/800/450',
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrapGrid]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>

      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? styles.columnWrapper : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingBottom: SPACE.xl,
        }}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
      />

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    color: COLORS.text,
  },
  itemWrap: {
    flex: 1,
  },
  itemWrapGrid: {
    flexBasis: '48%',
  },
  columnWrapper: {
    gap: SPACE.m,
    justifyContent: 'space-between',
  },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },
});
