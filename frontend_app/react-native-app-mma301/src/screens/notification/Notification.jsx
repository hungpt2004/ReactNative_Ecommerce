import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { Type1, Type2, Type3 } from '../../../assets/notifi_icon';
import { Arrowleft } from '../../../assets/index';
const notificationsData = [
    { id: '1', notifType: 1, title: "We know that—for children AND adults—learning is most effective when it is", time: "Aug 12, 2020 at 12:08 PM", read: false },
    { id: '2', notifType: 2, title: "The future of professional learning is immersive, communal experiences for", time: "Aug 12, 2020 at 12:08 PM", read: true },
    { id: '3', notifType: 3, title: "With this in mind, Global Online Academy created the Blended Learning Design", time: "Aug 12, 2020 at 12:08 PM", read: true },
    { id: '4', notifType: 3, title: "Technology should serve, not drive, pedagogy. Schools often discuss", time: "Aug 12, 2020 at 12:08 PM", read: true },
    { id: '5', notifType: 3, title: "Peer learning works. By building robust personal learning communities both", time: "Aug 12, 2020 at 12:08 PM", read: true },
];

export const Notification = () => {
    const [notifications, setNotifications] = useState(notificationsData);

    // Mark all notifications as read
    const clearAllNotifications = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft} >
                    <Arrowleft />
                    <Text style={styles.notificationHeader}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearAllNotifications}>
                    <Text style={styles.clearAll}>Clear All</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    borderBottomColor: '#E7E9EC',
                    borderBottomWidth: 1,
                }}
            />
            {/* Notification List */}
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.notificationItem, item.read ? styles.read : styles.unread]}>
                        <View style={styles.iconContainer}>
                            {item.notifType === 1 && (<Text>
                                <Type1 />
                            </Text>)}
                            {item.notifType === 2 && (<Text>
                                <Type2 />
                            </Text>)}
                            {item.notifType === 3 && (<Text>
                                <Type3 />
                            </Text>)}
                        </View>
                        <View style={styles.notificationTextContainer}>
                            <Text style={styles.notificationInfo}>{item.title}</Text>
                            <Text style={styles.notificationTime}>{item.time}</Text>
                        </View>
                        <View style={item.read ? styles.redDotPlaceholder : styles.redDot} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        // marginBottom: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',  // Căn giữa icon với text
    },
    notificationHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 180,
    },
    clearAll: {
        fontSize: 13,
        color: "#1987FB",
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E7E9EC',
        padding: 20
    },
    unread: {
        backgroundColor: "#FFF",
    },
    read: {

    },
    iconContainer: {
        marginRight: 20,

    },
    notificationTextContainer: {
        flex: 1,
    },
    notificationInfo: {
        fontSize: 14,
        fontWeight: '500',
    },
    notificationTime: {
        fontSize: 13,
        color: '#091C3F73',
    },
    redDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red',
        marginLeft: 10,
    },
    redDotPlaceholder: {
        width: 10, // Giữ nguyên kích thước như `redDot`
        height: 10,
        marginLeft: 10,
        backgroundColor: 'transparent', // Không hiển thị màu khi đã đọc
    }
});

