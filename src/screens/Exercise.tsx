import {VStack, Icon, HStack, Heading, Text, Image, Box, ScrollView} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {Feather} from "@expo/vector-icons"
import {TouchableOpacity} from "react-native";

import {AppNavigatorRoutesProps} from "@routes/app.routes";
import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionsSvg from "@assets/repetitions.svg"
import {Button} from "@components/Button";

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon as={Feather}
                          name="arrow-left"
                          color="green.500"
                          size={6}/>
                </TouchableOpacity>
                <HStack justifyContent="space-between"
                        alignItems="center"
                        mt={4}
                        mb={8}>
                    <Heading color="gray.100"
                             flexShrink={1}
                             fontSize="lg">Puxada Frontal</Heading>
                    <HStack alignItems="center">
                        <BodySvg/>
                        <Text color="gray.200"
                              ml={1}
                              textTransform="capitalize">Costas</Text>
                    </HStack>
                </HStack>
            </VStack>
            <ScrollView>
                <VStack p={8}>
                    <Image w="full"
                           h={80}
                           resizeMode="cover"
                           rounded="lg"
                           mb={3}
                           source={{
                               uri: "https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/04/284054-scheila-revisar-ate-0204-treino-na-academia-porque-fazer-exercicios-fisicos-na-academia-e-a-melhor-opcao.jpg"
                           }}
                           alt="Foto"/>
                    <Box bg="gray.600"
                         pb={4}
                         px={4}
                         rounded="md">
                        <HStack alignItems="center"
                                justifyContent="space-between"
                                mb={6}
                                mt={5}>
                            <HStack>
                                <SeriesSvg/>
                                <Text color="gray.200" ml={2}>3 Series</Text>
                            </HStack>
                            <HStack>
                                <RepetitionsSvg/>
                                <Text color="gray.200" ml={2}>12 repetições</Text>
                            </HStack>
                        </HStack>
                        <Button title="Marcar como realizado"/>
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    );
}
