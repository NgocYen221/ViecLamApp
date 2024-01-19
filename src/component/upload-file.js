import React from "react"
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/storage";
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as DocumentPicker from 'expo-document-picker';
import AntDesign from "react-native-vector-icons/AntDesign"

const heightWindow = Dimensions.get("window").height;
export default UploadFile = () => {
    const [file, setFile] = React.useState(null)
    const pickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: "application/pdf",
            multipleL: false
        });
        if (!result.canceled) {
            setFile(result.assets[0]);
        }
    }
    const handleUpload = async () => {
        if (file) {
            const { uri, name } = file;
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = ref(storage, `pdfs/${Date.now()}_${name}`);
            const uploadTask = uploadBytesResumable(storageRef, blob);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Handle progress updates
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.error("Error uploading file:", error);
                },
                () => {
                    // Handle successful uploads on complete
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('Download URL:', downloadURL);
                        setFile(null);
                    });
                }
            );
        }
    }
    return (
        <>
            <Text style={{fontSize:40}}>Thêm CV</Text>
            <TouchableOpacity style={styles.form} onPress={pickDocument}>
                <View style={styles.pickFile}></View>
                <AntDesign color="#cccccc" name="addfile" size={64} />
                <Text style={styles.title}>{file ? file.name : "Chọn file Cv của bạn"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={handleUpload}
            >
                <Text style={styles.text}> Upload CV </Text>
                <AntDesign color="#00b14f" name="upload" size={16} />
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    form: {
        borderWidth: 1,
        borderRadius: 8,
        width: "100%",
        height: heightWindow * 0.2,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dashed",
        backgroundColor: "#FCFEFD",
        borderColor: "#00b14f",
    },
    pickFile: {

    },
    icon: {

    },
    title: {
        color: "#CCCCCC",
        marginTop: 20,
        fontSize: 20
    },
    button: {
        marginTop: 4,
        width: "100%",
        backgroundColor: "#00b14f",
        padding: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
        color: "#fff"
    }
})
