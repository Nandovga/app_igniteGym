import {useState} from "react";
import {Heading, VStack, SectionList, Text} from "native-base";

import {ScreenHeader} from "@components/ScreenHeader";
import {HistoryCard} from "@components/HistoryCard";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "28/12/2022",
            data: ["Puxada frontal", "Remana Lateral"]
        },
        {
            title: "30/12/2022",
            data: ["Puxada frontal"]
        }
    ])


    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercícios"/>
            <SectionList sections={exercises}
                         keyExtractor={item => item}
                         renderItem={({item}) => <HistoryCard/>}
                         renderSectionHeader={({section}) => (
                             <Heading color="gray.200"
                                      mt={10}
                                      mb={3}
                                      fontFamily="heading"
                                      fontSize="md">{section.title}</Heading>
                         )}
                         px={8}
                         contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent: "center"}}
                         showsVerticalScrollIndicator={false}
                         ListEmptyComponent={() => (
                             <Text color="gray.100"
                                   textAlign="center">
                                 Não há exercícios registrados ainda. {'\n'}
                                 Vamos fazer exercícios hoje ?
                             </Text>
                         )}/>
        </VStack>
    )
        ;
}
