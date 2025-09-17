import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { WebView} from 'react-native-webview';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
        />
      }>
    <ThemedView style={styles.titleContainer}>
        <WebView source={{
            uri: 'https://github.com/pratikthorat/maratha'
        }}
        style={{
            height: 600,
            width: 400,
        }}
        />
      </ThemedView>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
