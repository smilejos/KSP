import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux'
import Button from 'react-native-button'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/airplane'
import Information from './Information'

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column'
    },
    listView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeffee'
    },
    control: {
        flex: 0,
        height: 40,
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor:"#fff",
    },
    btnText: {
        color: "#3c3c3c",
    },
    btn: {
        flex: 1,
        padding:8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnail: {
        width: 24,
        height: 24
    }
});

class Departure extends Component {
    constructor(props){
        super(props);
        let { requestDepartureInfo } = this.props.actions;
        requestDepartureInfo();
    }
    _onSwitch() {
        Actions.Arrival({type: ActionConst.RESET});
    }
    render() {

        return (
            <View style = {styles.container}>
                <View style={styles.listView}>
                    <Information dataSource={this.props.state.departure_data} ></Information>
                </View>
                <View style={styles.control}>
                    <Button style={styles.btnText} containerStyle={styles.btn} onPress={this._onSwitch}>
                        <Image style={styles.thumbnail} source={require('../../img/airplane_landing.png')}/>
                        (到站)
                    </Button>
                    <Button style={styles.btnText} containerStyle={styles.btn} onPress={this._onSwitch}>
                        <Image style={styles.thumbnail} source={require('../../img/airplane_takeoff.png')}/>
                        (離站)
                    </Button>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.airplane
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Departure)
