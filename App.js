import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View, SafeAreaView } from 'react-native';
import ProductList from './components/ProductList';
import { useColorScheme } from 'nativewind';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme()
  return (
    <SafeAreaView className="flex-1 pt-5 bg-slate-200 dark:bg-black">
      <View className="flex flex-row gap-5">
      <Text className="text-2xl  p-5 dark:text-white">New collections</Text>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme}/>
      </View>
      <ProductList />
      <StatusBar style={colorScheme === "dark" ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

