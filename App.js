import React from 'react';
import { StyleSheet, Text, View, Platform, Image, SafeAreaView, Button, Dimensions, TouchableOpacity} from 'react-native';
import { Images, Profiles, Colors, Metrics } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navigationBar}>
          <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                tintColor: '#C5C5C5',
                }}
                source={Images.settings}
            />
          </TouchableOpacity>
          <Image
            style={{
              width: 82, 
              height: 31,
            }}
            source={Images.logo}
          />
          <TouchableOpacity>
            <Image
              style={{
                width: 45,
                height: 45,
                tintColor: '#C5C5C5',
                marginRight: width * .02
              }}
              source={Images.chat}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileCard}>
           <Image
              style={styles.profilePicture}
              source={Images.harold}
            />
             <Text style={{
               fontWeight: 'bold',
               fontSize: 24,
               marginLeft: width *.01,
               marginTop: height * .01,
             }}>Harold,
                <Text style={{fontWeight: 'normal'}}>
                {' '}65
                </Text>
             </Text>
             <Text style={{
               fontSize: 16,
               marginLeft: width * .01,
               marginBottom: height * .01,
               color: 'gray',
             }}>Internet Meme</Text>
        </View>  
        <View style={styles.buttonsBar}>
        
          <View style={styles.smallButton}>
            <TouchableOpacity>
              <Image
                style={{width: 26, height: 29}}
                source={Images.rewind}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bigButton}>
            <TouchableOpacity>
              <Image
                style={{width: 32, height: 32}}
                source={Images.nope}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.smallButton}>
            <TouchableOpacity>
              <Image
                style={{width: 20, height: 33}}
                source={Images.boost}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bigButton}>
            <TouchableOpacity>
              <Image
                style={{width: 42, height: 35}}
                source={Images.like}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.smallButton}>
            <TouchableOpacity>
              <Image
                style={{width: 32, height: 28}}
                source={Images.superLike}
              />
            </TouchableOpacity>
          </View>
        </View>
          
      </SafeAreaView>
    );
  }
}

const {height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DCDCDC',
  },
  navigationBar: {
    width: '100%',
    height: Platform.OS === 'ios' ? 44 : 56,
    flexDirection: 'row',
    borderColor: '#696969',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileCard: {
    width: width * .9,
    height: width * 1.07,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    
  },
  profilePicture: {
    width: width * .9,
    height: width * .9,
  },
  buttonsBar: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  bigButton: {
    height: 60,
    width: 60,
    borderRadius: 0.5 * height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButton: {
    height: 50,
    width: 50,
    borderRadius: 0.5 * height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});