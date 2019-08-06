import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator, Modal } from 'react-native';
import { styles } from './style';
import { colors } from '../../styles/base';

class Spinner extends Component {
    render() {
        return (
            <Modal
                visible={this.props.loading}
                animationType={'fade'}
                transparent
            >
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator
                            animating={this.props.loading}
                            size="large"
                            color={colors.headerBackground}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({ loading: state.loading.loading });

export default connect(mapStateToProps)(Spinner);
