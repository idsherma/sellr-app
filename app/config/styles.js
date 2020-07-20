import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors, 
    text: {
        fontSize: 18, 
        color: colors.dark_grey_02,
        ...Platform.select({
            ios: {
                fontFamily: "Avenir"
            }, 
            android: {
                fontFamily: "Roboto"
            }
        })
    }
}
