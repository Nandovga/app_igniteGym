import {Heading, HStack, VStack, Text, Icon} from "native-base";
import {MaterialIcons} from "@expo/vector-icons"
import {UserPhoto} from "@components/UserPhoto";
import {TouchableOpacity} from "react-native";

export function HomeHeader() {
    return (
        <HStack backgroundColor="gray.600" pt={12} pb={5} px={8} alignItems="center">
            <UserPhoto
                source={{
                    uri: "https://conteudo.imguol.com.br/c/esporte/96/2021/11/29/lionel-messi-atacante-do-psg-1638213496667_v2_450x450.jpg"
                }}
                alt="Image do usuário"
                size={16}
                mr={4}/>
            <VStack flex={1}>
                <Text color="gray.100"
                      fontSize="md">Olá</Text>
                <Heading color="gray.100"
                         fontSize="md"
                         fontFamily="heading">Lionel Messi</Heading>
            </VStack>
            <TouchableOpacity>
                <Icon as={MaterialIcons}
                      name="logout"
                      color="gray.200"
                      size={7}/>
            </TouchableOpacity>
        </HStack>
    )
}
