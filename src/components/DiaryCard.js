import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  onPress,
  variant = 'list',
}) {
  const isGrid = variant === 'grid';

  return (
    <Pressable
      onPress={onPress}
      onPressIn={undefined}
      android_ripple={{ color: '#e5e7eb' }}
      style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      accessible
      accessibilityRole="button"
      accessibilityLabel={`Entri ${title} tanggal ${date}`}
      hitSlop={8}
    >
      <View style={[styles.card, isGrid && styles.cardGrid]}>
        <Image
          source={{ uri: moodUri }}
          style={[styles.mood, isGrid && styles.moodGrid]}
        />
        <View style={[styles.content, isGrid && styles.contentGrid]}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
            {preview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACE.m,
    padding: SPACE.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
  },
  cardGrid: {
    flexDirection: 'column',
    gap: SPACE.s,
    minHeight: 200,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: '#eef2ff',
  },
  moodGrid: {
    width: '100%',
    height: 110,
    borderRadius: RADIUS.card,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  contentGrid: {
    width: '100%',
  },
  title: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
    marginBottom: 6,
  },
  preview: {
    fontSize: TYPO.body,
    color: COLORS.text,
  },
});
