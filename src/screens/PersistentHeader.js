import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PersistentHeader = React.forwardRef((props, ref) => {
    return (
        <View ref={ref} style={styles.headerWrapper}>
            <Text style={styles.text1}>г. Якутск</Text>
            <View style={styles.headerRight}>
                <Text style={styles.text2}>AfishaYkt</Text>
                <Image
                    source={require('../../assets/icons/icon.png')}
                    style={styles.icon1}
                />
            </View>
        </View>
    );
});

const styles = {
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingTop: 50,
        backgroundColor: '#007AFF',
    },
    text1: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFF',
        fontSize: 25,
        marginRight: 10,
        fontFamily: 'Jua-Regular',
    },
    icon1: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
};

export default PersistentHeader;