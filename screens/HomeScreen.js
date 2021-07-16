import React, { Component } from "react";
import {
  View,
  Text,StyleSheet,
  TouchableOpacity,Image
} from "react-native";


export default class HomeScreen extends Component {
     render () {
          return(
               <View style={styles.conatiner}>
                   <TouchableOpacity >
                   <Image
                style={styles.googleimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /google_icon.png')}
            />
                      
                   </TouchableOpacity>


  <TouchableOpacity >
                  <Image
                style={styles.spotifyimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /spotify.png')}
            />
                      
                   </TouchableOpacity>

     <TouchableOpacity >
                  <Image
                style={styles. netfliximg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /netflix.png')}
            />
                      
                   </TouchableOpacity>

  <TouchableOpacity >
                  <Image
                style={styles.whatsappimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /whatsapp.png')}
            />
                      
                   </TouchableOpacity>

     <TouchableOpacity >
                  <Image
                style={styles.amazonimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /Amazon.jpg')}
            />
                      
                   </TouchableOpacity>

  <TouchableOpacity >
                  <Image
                style={styles.amazonmusicimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /amazon-music.png')}
            />
                      
                   </TouchableOpacity>

  <TouchableOpacity >
                  <Image
                style={styles.fastimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /fast.png')}
            />
                      
                   </TouchableOpacity>

  <TouchableOpacity >
                  <Image
                style={styles.mailimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /mail.png')}
            />
                      
                   </TouchableOpacity>


  <TouchableOpacity >
                  <Image
                style={styles.igimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /ig.png')}
            />       
    </TouchableOpacity>

  <TouchableOpacity >
                  <Image
                style={styles.ytimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /yt.png')}
            />
     </TouchableOpacity>

     <TouchableOpacity >
                  <Image
                style={styles.expoimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /expo.png')}
            />        
      </TouchableOpacity>


     <TouchableOpacity >
                  <Image
                style={styles.fbimg}
                resizeMode="contain"
                resizeMethod="resize"
                source={require('../assets /Facebook-logo.png')}
            />
      </TouchableOpacity>


                   </View>
               ) } }

  const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },

googleimg: {
      width: '25%',
      position: 'absolute',
      left: 10,
       top:10
    },
  netfliximg: {
      width: '30%',
      position: 'absolute',
      right:9,
      top:130     
    },

    spotifyimg: {
      width: '30%',
      position: 'absolute',
      right:5,
      top:130     
    },
    whatsappimg: {
      width: '25%',
      position: 'absolute',
      right:9,
      top:130     
    },
    amazonimg: {
      width: '60%',
      position: 'absolute',
      right:9,
      top:130     
    },
    amazonmusicimg: {
      width: '14%',
      position: 'absolute',
      right:9,
      top:130     
    },
    mailimg: {
      width: '30%',
      position: 'absolute',
      right:9,
      top:130     
    },
    igimg: {
      width: '30%',
      position: 'absolute',
      right:9,
      top:130     
    },
fastimg: {
        width: '30%',
      position: 'absolute',
      right:9,
      top:130     
    },
    ytimg: {
      width: '30%',
      position: 'absolute',
      right:9,
      top:130     
    },
    expoimg: {
      width: '30%',
      position: 'absolute',
      right:9,
      top:130     
    },
  fbimg: {
      width: '30%',
      position: 'absolute',
      right:9,
      top:130     
    }
});
