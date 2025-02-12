import {useState} from 'react';
import { 
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Text } from 'react-native';
import {useRouter} from 'expo-router'
import {icons, SIZES} from '../../../constants';
import styles from './welcome.style'

const jobTypes=["Full-time", "Part-time", "Contractor"]
const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router =useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const handleClick1 = (searchTerm) =>{
    router.push(`/search/${searchTerm}`)
  }
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>Hello Sana</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput 
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={(text)=>{setSearchTerm(text)}}
        placeholder="What are you looking for?"
        />        
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{handleClick1(searchTerm)}}>
          <Image 
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
        data= {jobTypes}
        renderItem={({item})=>(
          <TouchableOpacity 
          style={styles.tab(activeJobType, item)}
          onPress={()=>{
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.xxSmall}}
        horizontal
        />
      </View>
    </View>
  )
}

export default Welcome