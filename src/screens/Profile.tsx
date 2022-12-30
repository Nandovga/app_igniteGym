import {useState} from "react";
import {TouchableOpacity} from "react-native";
import {Center, Heading, ScrollView, Skeleton, Text, VStack, useToast} from "native-base";
import * as ImagePicker from "expo-image-picker"
import * as FileSystem from 'expo-file-system';

import {ScreenHeader} from "@components/ScreenHeader";
import {UserPhoto} from "@components/UserPhoto";
import {Input} from "@components/Input";
import {Button} from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
    const toast = useToast();
    const [photoIsLoading, setPhotoIsLoading] = useState(true)
    const [userPhoto, setUserPhoto] = useState("https://conteudo.imguol.com.br/c/esporte/96/2021/11/29/lionel-messi-atacante-do-psg-1638213496667_v2_450x450.jpg")

    console.log(photoIsLoading)

    //Realiza o carregamento de Imagem do dispositivo do usuário
    async function handleUserPhotoSelect() {
        setPhotoIsLoading(false)
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            });

            //Verifica se o botão cancelar foi presionado
            if (photoSelected.canceled)
                return;

            //Obtém informações da Imagem
            const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
            if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 5)
                return toast.show({
                    title: "Essa imagem é muito grande. Escolha uma de até 5MB",
                    placement: "top",
                    bgColor: "red.500"
                })

            setUserPhoto(photoSelected.assets[0].uri)
        } catch (error){
            console.log(error)
        } finally {
            setPhotoIsLoading(true)
        }
    }

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil"/>
            <ScrollView>
                <Center mt={6} px={10}>
                    {photoIsLoading
                        ? <UserPhoto size={PHOTO_SIZE}
                                     source={{uri: userPhoto}}
                                     alt="Foto do Usuário"/>
                        : <Skeleton w={PHOTO_SIZE}
                                    h={PHOTO_SIZE}
                                    rounded="full"
                                    startColor="gray.500"
                                    endColor="gray.400"/>}
                    <TouchableOpacity>
                        <Text color="green.500"
                              mt={2}
                              mb={8}
                              fontSize="md"
                              fontWeight="bold"
                              onPress={handleUserPhotoSelect}>Alterar foto</Text>
                    </TouchableOpacity>
                    <Input bg="gray.600"
                           placeholder="Nome"/>
                    <Input bg="gray.600"
                           placeholder="E-mail"
                           isDisabled/>
                </Center>
                <VStack px={10}
                        mt={12}
                        mb={9}>
                    <Heading color="gray.200"
                             mb={2}
                             fontFamily="heading"
                             fontSize="md">Alterar Senha</Heading>
                    <Input bg="gray.600"
                           placeholder="Senha antiga"
                           secureTextEntry/>
                    <Input bg="gray.600"
                           placeholder="Nova senha"
                           secureTextEntry/>
                    <Input bg="gray.600"
                           placeholder="Confirma a nova senha"
                           secureTextEntry/>
                    <Button title="Atualizar" mt={4}/>
                </VStack>
            </ScrollView>
        </VStack>
    );
}
