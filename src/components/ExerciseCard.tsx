import {TouchableOpacity, TouchableOpacityProps} from "react-native";
import {Heading, HStack, Image, Text, VStack, Icon} from "native-base";
import {Entypo} from "@expo/vector-icons"

type Props = TouchableOpacityProps & {}

export function ExerciseCard({...rest}: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack alignItems="center"
                    bg="gray.500"
                    p={2}
                    mb={3}
                    rounded="md">
                <Image source={{
                    uri: "https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/04/284054-scheila-revisar-ate-0204-treino-na-academia-porque-fazer-exercicios-fisicos-na-academia-e-a-melhor-opcao.jpg"
                }}
                       w={16}
                       h={16}
                       rounded="md"
                       mr={4}
                       resizeMode="cover"
                       alt="Imagem do exercício"/>
                <VStack justifyContent="center" flex={1}>
                    <Heading fontSize="lg"
                             color="white">Corrida</Heading>
                    <Text fontSize="lg"
                          numberOfLines={2}
                          color="gray.200"
                          mt={1}>3 séries x 12 repetições</Text>
                </VStack>
                <Icon as={Entypo}
                      name="chevron-thin-right"
                      color="gray.300"/>
            </HStack>
        </TouchableOpacity>
    )
}
