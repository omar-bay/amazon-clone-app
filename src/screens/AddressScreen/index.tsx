import React, { useState } from 'react';
import {View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView} from 'react-native';
import styles from './styles'
import { Picker } from '@react-native-picker/picker'
import Button from '../../components/Button';
import countryList from 'country-list'

const AddressScreen = () => {
    const countries = countryList.getData();
    const [country, setCountry] = useState(countries[0].code);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [addressError, setAddressError] = useState('');

    const onCheckOut = () => {
        if(!fullName) {
            Alert.alert("Full Name required!");
            return;
        }
        if(!phone) {
            Alert.alert("Phone Numebr required!");
            return;
        }
        if(!!addressError) {
            Alert.alert('Fix field errors!')
            return
        }

        console.warn('Success');
    }
    const validateAddress = () => {
        if(address.length < 3) {
            setAddressError('Address is too short');
        }
    }

    return (
        // handle something about ios in keyboard avoiding view
        <KeyboardAvoidingView>
            <ScrollView style={styles.root}>
                {/* country picker */}
                <View style={styles.row}>
                    <Picker
                    onValueChange={setCountry}
                    selectedValue={country}
                    >
                        {countries.map(country => (
                            <Picker.Item value={country.code} label={country.name} />
                        ))}
                    </Picker>
                </View>

                {/* full name */}
                <View style={styles.row}>
                    <Text style={styles.label}>Full Name (first and last name)</Text>
                    <TextInput
                    value={fullName}
                    onChangeText={setFullName}
                    style={styles.input}
                    placeholder="full name..."
                    />
                </View>

                {/* phone number */}
                <View style={styles.row}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                    keyboardType={'phone-pad'}
                    value={phone}
                    onChangeText={setPhone}
                    style={styles.input}
                    placeholder="phone number..."
                    />
                </View>

                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}>Adress</Text>
                    <TextInput
                    value={address}
                    onChangeText={text => {
                        setAddress(text);
                        setAddressError('');
                    }}
                    onEndEditing={validateAddress}
                    style={styles.input}
                    placeholder="address..."
                    />
                </View>
                {!!addressError && (
                    <Text style={styles.errorLabel}>{addressError}</Text>
                )}

                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                    value={city}
                    onChangeText={setCity}
                    style={styles.input}
                    placeholder="city..."
                    />
                </View>

                {/* checkout */}
                <Button
                text="CheckOut"
                onPress={onCheckOut}
                />

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default AddressScreen;
