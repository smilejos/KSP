import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux'
import Button from 'react-native-button'

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: "#f2f2f2"
    },
    btn: {
        backgroundColor:"#333",
        padding:8,
        borderRadius:6,
        width:200
    },
});

class Arrival extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Button style={styles.btnText}
                containerStyle={styles.btn}
                onPress={Actions.Arrival}>Arrival
              </Button>
              <Button style={styles.btnText}
                containerStyle={styles.btn}
                onPress={Actions.Departure}>Departure
              </Button>
            </View>
        );
    }
}

export default Arrival;
