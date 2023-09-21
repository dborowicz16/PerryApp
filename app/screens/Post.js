import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  let dt = date.getDate();
  let Month = '';
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    Month = MONTH[month];
  }
  return Month + ' ' + dt + ', ' + year;
};

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor: 'black', width: 350, borderRadius: '20%'}}>
        {post.featuredImage && (
          <Image
            style={{ width: '100%', height: 300, alignSelf: 'center', borderTopLeftRadius: '20%', borderTopRightRadius: '20%', resizeMode: 'cover' }}
            source={{ uri: post.featuredImage.url }}
          />
        )}
        <Text style={[styles.text, {paddingBottom: 25}]}>{post.inshorts}</Text>
        <Text style={[styles.text, {textAlign: 'right', opacity: 0.6, fontSize: 14}]}>{formatDate(post.publishDate)}</Text>
    </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  text: {
    fontSize: 18,
    margin: 10,
    color: 'white',
  },
});