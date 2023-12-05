import React from 'react'
import { PDFViewer, Document, Page, Image, Text, View, StyleSheet, Font, PDFDownloadLink } from '@react-pdf/renderer';
import Logo from './image/logo.jpg'
import numeroPorExtenso from 'numero-por-extenso';

// //FONTS

Font.registerHyphenationCallback(word => {
    return [word];
});



const styles = StyleSheet.create({

    image: {
        width: 90,
        height: 65,
        marginHorizontal: 255,

    },
    image2: {
        paddingBottom: 25,
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: "Times-Bold",
        fontWeight: 'bold',
        textDecoration: 'underline',
        lineHeight: 1.1,

    },
    text2: {
        fontSize: 12,
        lineHeight: 1.3,
        fontFamily: "Times-Roman",
        paddingTop: 30,
        paddingHorizontal: 80,
        textAlign: 'justify'
    },
    text3: {
        fontSize: 12,
        lineHeight: 1.3,
        fontFamily: "Times-Bold",
        textAlign: 'justify'
    },
    text4: {
        fontSize: 12,
        fontFamily: "Times-Bold",
        paddingTop: 10,
        fontWeight: 'bold',
        textDecoration: 'underline',
        paddingHorizontal: 80,

    },
    text5: {
        fontSize: 12,
        paddingTop: 10,
        lineHeight: 1.3,
        fontFamily: "Times-Roman",
        paddingHorizontal: 80,
        textAlign: 'justify',
    },
    footer: {
        fontSize: 7.4,
        position: 'absolute',
        bottom: 36,
        paddingHorizontal: 80,
        fontFamily: "Helvetica",
        lineHeight: 1.1,
    },
    text6: {
        fontSize: 8,
        fontFamily: "Helvetica-Bold",
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
    text7: {
        paddingTop: 50,
        marginHorizontal: 80,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 235,
        height: 20,
    },

    text8: {
        fontSize: 12,
        fontFamily: "Times-Bold",
        paddingTop: 10,
        fontWeight: 'bold',
        paddingHorizontal: 80,
    },
    view_page_one: {
        paddingTop: 35,
        paddingBottom: 90,
        textAlign: 'justify'
    },

})


export default function PDFFile(props) {
    //CLIENTE UM
    const client_1 = props.Cliente_um
    const client_1_parceiro = props.Cliente_um_Parceiro

    //CLIENTE DOIS
    const client_2 = props.Cliente_dois
    const client_2_parceiro = props.Cliente_dois_Parceiro

    //INFORMAÇÕES DO LOTE
    const Lote = props.Informacao_do_lote

    //DATA ATUAL
    const dataAtual = new Date()
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    const mesesPorExtenso = [
        '',
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const mesPorExtenso = mesesPorExtenso[mes];

    const Logo64 = "data:image/jpeg;base64,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"
    return (
        <Document >

            <Page style={styles.view_page_one} >
                <View fixed style={styles.image2}>
                    <Image  style={styles.image} src={Logo64} />

                </View>
                <Text style={styles.text}>TERMO ADITIVO DE CONTRATO PARTICULAR DE CESSÃO DE  {`\n`}DIREITOS DE ÁREA DE TERRA</Text>
                <View >

                    <Text style={styles.text2}>Pelo presente instrumento particular de promessa de cessão de direitos, fazem partes justas e contratadas entre si de um lado como OUTORGANTE(S)  <Text style={styles.text3}>PROMITENTE(S) CEDENTE(S)</Text>,
                        doravante simplesmente <Text style={styles.text3}>{`${client_1.nome.toLocaleUpperCase()}`}</Text> brasileiro(a), {`${client_1.Estado_Civil}`}{client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text> sob regime {`${client_1_parceiro.Tipo_de_uniao}`}</Text>) : (<Text></Text>)}, {`${client_1.Profissao}`}, portador(a) do RG nº.<Text style={styles.text3}>{`${client_1.RG}`}</Text> e CPF n°. <Text style={styles.text3}>{`${client_1.CPF}`} </Text>

                        {client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text><Text>e seu cônjuge <Text style={styles.text3}>{`${client_1_parceiro.nome.toLocaleUpperCase()}`}</Text> brasileiro(a), {`${client_1_parceiro.Estado_Civil}`}, {`${client_1_parceiro.Profissao}`}, portador(a) do RG nº.<Text style={styles.text3}>{`${client_1_parceiro.RG}`}</Text> e CPF n°. <Text style={styles.text3}>{`${client_1_parceiro.CPF}`};</Text> </Text></Text>) : (<Text></Text>)}


                        de outro lado <Text style={styles.text3}> {`${client_2.nome.toLocaleUpperCase()}`}</Text> brasileiro(a), {`${client_2.Estado_Civil}`}{client_2.Estado_Civil === "casado(a)" || client_2.Estado_Civil === "união estável" ? (<Text> sob regime {`${client_2_parceiro.Tipo_de_uniao}`}</Text>) : (<Text></Text>)}, {`${client_2.Profissao}`}, portador(a) do RG nº. <Text style={styles.text3}>{`${client_2.RG}`}</Text> e CPF n°. <Text style={styles.text3}>{`${client_2.CPF}`}</Text>
                        {client_2.Estado_Civil == "casado(a)" || client_2.Estado_Civil === "união estável" ? (<Text><Text> e seu cônjuge <Text style={styles.text3}>{`${client_2_parceiro.nome.toLocaleUpperCase()}`}</Text> brasileiro(a), {`${client_2_parceiro.Estado_Civil}`}, {`${client_2_parceiro.Profissao}`}, portador(a) do RG nº.<Text style={styles.text3}>{`${client_2_parceiro.RG}`}</Text> e CPF n°. <Text style={styles.text3}>{`${client_2_parceiro.CPF}`};</Text></Text></Text>) : (<Text></Text>)} na qualidade de <Text style={styles.text3}>OUTORGADO(S) A PROMISSÓRIO(S) CESSIONÁRIO(S),</Text> doravante simplesmente <Text style={styles.text3}>OUTORGADO</Text>, resolvem na melhor forma de direito contratarem-se mediante as cláusulas e condições abaixo:</Text>

                    <Text style={styles.text4}>A ORIGEM DO DIREITO:</Text>
                    <Text style={styles.text5}>Cláusula 1 - Conforme a documentação extraída dos arquivos verifica-se que o(a) <Text style={styles.text3}>{`${client_1.nome.toLocaleUpperCase()}`}</Text>{client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text> e seu cônjuge </Text>) : (<Text></Text>)} acima {client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text>qualificados</Text>) : (<Text>qualificado(a)</Text>)} configurava-se como {client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text>únicos cessionários</Text>) : (<Text>único(a) cessionário(a)</Text>)} do(s) terreno(s)
                        n°. <Text style={styles.text3}>{`${Lote.Lote}`}</Text> da Quadra <Text style={styles.text3}>{`${Lote.Quadra.toLocaleUpperCase()}`},</Text> de uma área de terra agrícola situada no lugar denominado <Text style={styles.text3}>{`${Lote.NomeEmpreendimento.split(' ').map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(' ')}`}</Text> situado em {`${Lote.Endereco_do_lote}`}, Município de Feira de Santana-BA, medindo <Text style={styles.text3}>{`${Lote.metragemTotal}`}m²</Text> ({`${Lote.extenso_Total.toLocaleUpperCase()}`}),
                        sendo <Text style={styles.text3}>{`${Lote.MetragemFrente}`}m</Text>  ({`${Lote.extenso_Frente.toLocaleUpperCase()}`}) de frente, <Text style={styles.text3}>{`${Lote.MetragemFundo}`}m</Text> ({`${Lote.extenso_Fundo.toLocaleUpperCase()}`}) de fundo, <Text style={styles.text3}>{`${Lote.MetragemLDireito}`}m</Text> ({`${Lote.extenso_Direito.toLocaleUpperCase()}`}) da lateral direita,  <Text style={styles.text3}>{`${Lote.MetragemLEsquerdo}`}m</Text> ({`${Lote.extenso_Esquerdo.toLocaleUpperCase()}`}) da lateral esquerda.
                    </Text>
                    <Text style={styles.text4}>DO IMÓVEL:</Text>
                    <Text style={styles.text5}>Cláusula 2ª – <Text style={styles.text3}> {client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text>OS ATUAIS CESSIONÁRIOS {client_1.nome.toLocaleUpperCase()} e seu cônjuge <Text style={styles.text2}>devidamente qualificados</Text></Text>) : (<Text>O(A) ATUAL CESSIONÁRIO(A) {client_1.nome.toLocaleUpperCase()} <Text style={styles.text2}>devidamente qualificado</Text></Text>)},</Text> no instrumento em anexo, encontra-se na data como {client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text>possuidores</Text>) : (<Text>possuidor(a)</Text>)} do(s) terreno(s) nº.<Text style={styles.text3}>{`${Lote.Lote}`}</Text> da Quadra <Text style={styles.text3}>{`${Lote.Quadra.toLocaleUpperCase()}`}</Text> de uma área de terra, medindo em sua totalidade a metragem de <Text style={styles.text3}>{`${Lote.metragemTotal}`}m²</Text> ({`${Lote.extenso_Total.toLocaleUpperCase()}`}), por ter havido pago apenas o valor de <Text style={styles.text3}>R$ {`${Lote.quanto_pagou}`}</Text> ({`${Lote.quanto_pagou_extenso.toLocaleUpperCase()}`}).</Text>
                    <Text style={styles.text5}>Cláusula 3ª – O(A)  <Text style={styles.text3}>{client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text>{`${client_1.nome.toLocaleUpperCase()}`} <Text style={styles.text5}> e seu cônjuge</Text></Text>) : (<Text>{`${client_1.nome.toLocaleUpperCase()}`}</Text>)}</Text>, através deste Termo Aditivo, transferirá a  <Text style={styles.text3}>{client_2.Estado_Civil === "casado(a)" || client_2.Estado_Civil === "união estável" ? (<Text>{client_2.nome.toLocaleUpperCase()} e seu cônjuge NOVOS CESSIONÁRIOS</Text>) : (<Text>{client_2.nome.toLocaleUpperCase()} NOVO(A) CESSIONÁRIO(A)</Text>)},</Text> os direitos e obrigações cabíveis do bem descrito na cláusula 2ª.</Text>
                    <Text style={styles.text5}>Cláusula 4ª – Com o presente Termo Aditivo, o(a) <Text style={styles.text3}>{client_2.Estado_Civil === "casado(a)" || client_2.Estado_Civil === "união estável" ? (<Text>{client_2.nome.toLocaleUpperCase()} e seu cônjuge <Text style={styles.text5}>sub-rogam-nos</Text></Text>) : (<Text>{client_2.nome.toLocaleUpperCase()} <Text style={styles.text5}>sub-roga</Text></Text>)} </Text> no direito que o(a) <Text style={styles.text3}>{client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text>{client_1.nome.toLocaleUpperCase()} <Text style={styles.text5}>e seu cônjuge transferem-lhes</Text></Text>) : (<Text>{client_1.nome.toLocaleUpperCase()} <Text style={styles.text5}>lhe transfere</Text></Text>)} </Text> por meio do presente instrumento, assumindo a sua titularidade com todas as qualidades e defeitos do direito cedido.</Text>
                    <Text></Text>
                </View>

                <View >
                    <Text style={styles.text5}><Text style={styles.text3}>Parágrafo Único:</Text> A continuação do contrato de cessão de direitos de área de terras, entabulado entre o <Text style={styles.text3}>CEDENTE</Text> o(a) <Text style={styles.text3}>{client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ? (<Text>{client_1.nome.toLocaleUpperCase()} e seu cônjuge <Text style={styles.text5}>,permaneceram</Text></Text>) : (<Text>{client_1.nome.toLocaleUpperCase()} <Text style={styles.text5}>,permanecerá</Text></Text>)}</Text> com relação <Text>{client_2.Estado_Civil === "casado(a)" || client_2.Estado_Civil === "união estável" ? (<Text>aos <Text style={styles.text3}>NOVOS CESSIONÁRIOS {client_2.nome.toLocaleUpperCase()} e seu cônjuge</Text></Text>) : (<Text>a(o) NOVO(a) CESSIONÁRIO(A) {client_2.nome.toLocaleUpperCase()}</Text>)}</Text>, nos seus termos originais, quanto aos deveres, obrigações e ônus pelo descumprimento das cláusulas convencionais.</Text>
                    <Text>{`\n`}</Text>
                    <Text style={styles.text5}>Cláusula 5ª – Declara o(a) <Text style={styles.text3}>CEDENTE</Text> que os direitos acima mencionados incidentes sobre a área descrita se encontram completamente livres e desembaraçados de todo e quaisquer ônus, impostos e taxas até a presente data, foro ou pensão.</Text>
                    <Text style={styles.text4}>DO PAGAMENTO DO PREÇO E CONDIÇÕES:</Text>
                    <Text style={styles.text5}>Cláusula 6ª – Que assim nos melhores termos de direito, o(a) CEDENTE promete e se obriga a ceder e transferir, a título oneroso o(a)  <Text style={styles.text3}>CESSIONÁRIO(A)</Text>, a totalidade de direito que possui, correspondentes a área acima descrita, tudo mediante as seguintes condições:</Text>
                    <Text style={styles.text5}>Cláusula 7ª – O preço total desta promessa de cessão de direitos é de R$ {`${Lote.quanto_vai_pagar}`} ({`${Lote.quanto_vai_pagar_extenso.toLocaleUpperCase()}`}) mediante parcelamento em {`${Lote.parcelas}`} vezes no valor de cada parcela sendo R$130,06 (CENTO E TRINTA REAIS E CINCO CENTAVOS).</Text>
                    <Text style={styles.text4}>DA CONCESSÃO DA POSSE:</Text>
                    <Text style={styles.text5}>Cláusula 8ª – Que por força do presente, <Text>{client_2.Estado_Civil === "casado(a)" || client_2.Estado_Civil === "união estável" ? (<Text>os NOVOS CESSIONÁRIOS <Text style={styles.text3}>{client_2.nome.toLocaleUpperCase()} e seu cônjuge</Text> entram</Text>) : (<Text>o(a) NOVO(A) CESSIONÁRIO(A) {client_2.nome.toLocaleUpperCase()} <Text style={styles.text5}>entra</Text></Text>)}</Text> na posse do presente imóvel no dia {`${dia}`} {`${mesPorExtenso.toLocaleUpperCase()}`} DE {`${ano}`}, a que se reporta os termos do presente pacto, podendo à partir de então usufruí-lo como bem entender, assumindo no entanto em decorrência disto com o dever de pagar todos os impostos, taxas e demais contribuições que recaem ou venham a recair sobre o dito imóvel.</Text>
                    <Text style={styles.text4}>DA OBRIGATORIEDADE DO CONTRATO:</Text>
                    <Text style={styles.text5}>Cláusula 10ª – O presente é firmado em caráter irrevogável e irretratável para ambos os contratantes, extensivo a todos os respectivos sucessores a qualquer título, devendo, por conseguinte, respeitarem o presente como se lei fosse, não podendo em consequência arrependerem-se na forma do art.417 do Código Civil Brasileiro.</Text>
                    <Text style={styles.text5}>Cláusula 11ª – Fica acertado que no caso de haver nas cláusulas pertinentes a este documento qualquer erro material que porventura modifique ou crie direitos e obrigações pertencente a quaisquer dos contraentes, deverá tal erro ser retificado por ocasião da lavratura da competente escritura pública de compra e venda, sem que isto diminua ou aumente qualquer direito aos ora contraentes.</Text>
                </View>
                <View >
                    <Text style={styles.text5}>Cláusula 12ª - Não obstante a boa-fé dos ora contraentes elegem o foro da cidade de Feira de Santana-Bahia, para dirimir quaisquer dúvidas decorrentes do presente contrato.</Text>
                    <Text></Text>
                    <Text style={styles.text5}>Feira de Santana-Bahia, {`${dia}`} de {`${mesPorExtenso.toLocaleLowerCase()}`} de {`${ano}`}.</Text>
                    <Text style={styles.text8}>OUTORGANTE PROMITENTE CEDENTE:</Text>
                    <Text style={styles.text7}></Text>
                    <Text style={styles.text8}>{`${client_1.nome.toLocaleUpperCase()}`}</Text>

                    {client_1.Estado_Civil === "casado(a)" || client_1.Estado_Civil === "união estável" ?
                        (
                            <>
                                <Text style={styles.text7}></Text>
                                <Text style={styles.text8}>{`${client_1_parceiro.nome.toLocaleUpperCase()}`}</Text>
                            </>
                        ) : (<Text></Text>)}

                    <Text style={styles.text8}>OUTORGADO PROMISSÁRIO CESSIONÁRIO:</Text>
                    <Text style={styles.text7}></Text>
                    <Text style={styles.text8}>{`${client_2.nome.toLocaleUpperCase()}`}</Text>

                    {client_2.Estado_Civil === "casado(a)" || client_2.Estado_Civil === "união estável" ?
                        (<>
                            <Text style={styles.text7}></Text>
                            <Text style={styles.text8}>{`${client_2_parceiro.nome.toLocaleUpperCase()}`}</Text>
                        </>
                        ) : (<Text></Text>)}

                    <Text style={styles.text7}></Text>
                    <Text style={styles.text8}>{`${Lote.proprietario.toLocaleUpperCase()}`}</Text>
                </View>

                <Text fixed style={styles.footer}><Text style={styles.text6}>{`${Lote.proprietario.toLocaleUpperCase()}`}</Text>{`\n`}Rua Morro Amarelo 05 – Conceição I{`\n`}Tel.: (75) 9 9164.9082/3471-7484{`\n`}CNPJ: {Lote.proprietario == "AEA EMPREENDIMENTOS IMOBILIÁRIOS" ? (<Text>27.218.108/0001-01</Text>) : (<Text>36.075.401/0001-58</Text>)} </Text>
                {/* <Text style={styles.text3}></Text> */}

            </Page>

        </Document>
    )
}

