import {useNavigation} from "@react-navigation/native";
import {VStack, Image, Text, Center, Heading, ScrollView} from "native-base";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import {Input} from "@components/Input";
import {Button} from "@components/Button";

import LogoSvg from "@assets/logo.svg"
import BackgroundImg from "@assets/background.png"

type FormDataProps = {
    name: string
    email: string,
    password: string
    password_confirm: string
}

//Validação do form via yup
const signUpSchema = yup.object({
    name: yup.string()
        .required("Informe o nome."),
    email: yup.string()
        .required("Informe o e-mail.")
        .email("E-mail invalido."),
    password: yup.string()
        .required("Informe a senha.")
        .min(6, "A senha deve ter pelo menos 6 dígitos."),
    password_confirm: yup.string()
        .required("Confirme a senha.")
        .oneOf([yup.ref('password'), null], "A confirmação da senha não confere." +
            "")
});

export function SignUp() {
    const navigation = useNavigation();
    const {control, handleSubmit, formState: {errors}} = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    })

    function handleSignUp({name, email, password, password_confirm}: FormDataProps) {
        console.log(name, email, password, password_confirm)
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}
                    showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10}>
                <Image source={BackgroundImg}
                       defaultSource={BackgroundImg}
                       alt="Pessoas treinando"
                       resizeMode="contain"
                       position="absolute"/>
                <Center my={24}>
                    <LogoSvg/>
                    <Text color="gray.100"
                          fontSize="sm">Treine sua mente e seu corpo</Text>
                </Center>
                <Center>
                    <Heading color="gray.100"
                             fontSize="xl" mb={6}
                             fontFamily="heading">Criar sua conta</Heading>
                    <Controller control={control}
                                name="name"
                                render={({field: {onChange, value}}) => (
                                    <Input placeholder="Nome"
                                           value={value}
                                           errorMessage={errors.name?.message}
                                           onChangeText={onChange}/>
                                )}/>
                    <Controller control={control}
                                name="email"
                                render={({field: {onChange, value}}) => (
                                    <Input placeholder="E-mail"
                                           keyboardType="email-address"
                                           autoCapitalize="none"
                                           value={value}
                                           errorMessage={errors.email?.message}
                                           onChangeText={onChange}/>
                                )}/>
                    <Controller control={control}
                                name="password"
                                render={({field: {onChange, value}}) => (
                                    <Input placeholder="Senha"
                                           secureTextEntry
                                           value={value}
                                           errorMessage={errors.password?.message}
                                           onChangeText={onChange}/>
                                )}/>
                    <Controller control={control}
                                name="password_confirm"
                                render={({field: {onChange, value}}) => (
                                    <Input placeholder="Confirmar a Senha"
                                           secureTextEntry
                                           value={value}
                                           onChangeText={onChange}
                                           onSubmitEditing={handleSubmit(handleSignUp)}
                                           errorMessage={errors.password_confirm?.message}
                                           returnKeyType="send"/>
                                )}/>
                    <Button title="Criar e acessar"
                            onPress={handleSubmit(handleSignUp)}/>
                </Center>
                <Button title="Voltar para o login"
                        mt={12}
                        onPress={() => navigation.goBack()}
                        variant="outline"/>
            </VStack>
        </ScrollView>
    );
}
