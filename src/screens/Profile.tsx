import {useState} from "react";
import {TouchableOpacity} from "react-native";
import {Center, Heading, ScrollView, Skeleton, Text, VStack} from "native-base";

import {ScreenHeader} from "@components/ScreenHeader";
import {UserPhoto} from "@components/UserPhoto";
import {Input} from "@components/Input";
import {Button} from "@components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(true)

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil"/>
            <ScrollView>
                <Center mt={6} px={10}>
                    {photoIsLoading
                        ? <UserPhoto size={PHOTO_SIZE}
                                     source={{uri: "https://conteudo.imguol.com.br/c/esporte/96/2021/11/29/lionel-messi-atacante-do-psg-1638213496667_v2_450x450.jpg"}}
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
                              fontWeight="bold">Alterar foto</Text>
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
