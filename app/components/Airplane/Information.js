import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, ListView, TouchableHighlight } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    headContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
    colHead: {
        alignItems: 'center',
        fontSize: 12
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    company: {
        flex: 1,
        padding: 10
    },
    info: {
        flex: 1,
        padding: 10
    },
    text: {
        fontSize: 10
    },
    thumbnail: {
        width: 28,
        height: 20
    }
});


class Information extends Component {
    constructor(props){
        super(props);
    }
    _renderImage(company) {
        let path = '';
        switch(company) {
          case 'TNA':
            path = require('../../img/AE.gif');
            break;
          case 'UIA':
            path = require('../../img/B7.gif');
            break;
          case 'MDA':
            path = require('../../img/GE.gif');
            break;
          case 'FEA':
            path = require('../../img/FE.gif');
            break;
        }
        return path;
    }

    _renderRow(data) {
        let path = this._renderImage(data.airline);
        return (
            <TouchableHighlight>
              <View style={styles.rowContainer}>
                  <View style={styles.company}>
                      <Image style={styles.thumbnail} source={path}/>
                      <Text style={styles.text}>{data.flight}</Text>
                  </View>
                  <View style={styles.info}>
                      <Text style={styles.text}>{data.departFrom}</Text>
                      <Text style={styles.text}>{data.departTo}</Text>
                  </View>
                  <View style={styles.info}>
                      <Text style={styles.text}>{data.scheduleDeparture}</Text>
                      <Text style={styles.text}>{data.scheduleArrival}</Text>
                  </View>
                  <View style={styles.info}>
                      <Text style={styles.text}>{data.realDeparture}</Text>
                      <Text style={styles.text}>{data.realArrival}</Text>
                  </View>
                  <View style={styles.info}>
                      <Text style={styles.text}>{data.status}</Text>
                  </View>
              </View>
            </TouchableHighlight>
       );
    }

    _renderHeader() {
      return (
          <View style={styles.headContainer}>
              <View style={styles.info}>
                  <Text style={styles.colHead}>Airplane</Text>
              </View>
              <View style={styles.info}>
                  <Text style={styles.colHead}>From / To</Text>
              </View>
              <View style={styles.info}>
                  <Text style={styles.colHead}>Schedule</Text>
              </View>
              <View style={styles.info}>
                  <Text style={styles.colHead}>Actual</Text>
              </View>
              <View style={styles.info}>
                  <Text style={styles.colHead}>Status</Text>
              </View>
          </View>
      );
    }

    _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
      console.log(sectionID, rowID, adjacentRowHighlighted);
      return (
        <View
          key= {`${sectionID}-${rowID}`}
          style={{
            height: 1,
            backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
          }}
        />
      );
    }

    render() {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(this.props.dataSource);
        return (
          <View style={styles.container}>
              <ListView
                dataSource={dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSectionHeader={this._renderHeader.bind(this)}
                renderSeparator={this._renderSeperator.bind(this)}
                />
          </View>
        );
    }
}

export default Information
