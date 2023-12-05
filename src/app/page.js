"use client"

import jsPDF from "jspdf"
import { PDFDownloadLink } from '@react-pdf/renderer';
import { format } from 'date-fns'

import PDFFile from "./PDFFile";
import extenso from "extenso";
import { useEffect, useState } from "react";
export default function Home() {
  //REPLACE CHARS
  const chars = {
    "inteiros": "metros",
    "inteiro": "metro",
    "décimos": "centímetros",
    "décimo": "centímetro",
    "centésimos": "centímetros",
    "centésimo": "centímetro",
    "milésimos": "centímetros",
    "milésimo": "centímetro",
  }
  const modificar = new RegExp(Object.keys(chars).join('|'), 'g');

  //CLIENTES
  const [Cliente_um, setCliente_um] = useState({
    "nome": "",
    "CPF": "",
    "RG": "",
    "Estado_Civil": "",
    "Profissao": ""
  })
  const [Cliente_um_Parceiro, setCliente_um_Parceiro] = useState({
    "nome": "",
    "CPF": "",
    "RG": "",
    "Estado_Civil": "",
    "Profissao": "",
    "Tipo_de_uniao": ""
  })

  const [Cliente_dois, setCliente_dois] = useState({
    "nome": "",
    "CPF": "",
    "RG": "",
    "Estado_Civil": "",
    "Profissao": ""
  })
  const [Cliente_dois_Parceiro, setCliente_dois_Parceiro] = useState({
    "nome": "",
    "CPF": "",
    "RG": "",
    "Estado_Civil": "",
    "Profissao": "",
    "Tipo_de_uniao": ""
  })
  const informacao_completa = (e, key) => {
    // CLIENTE UM
    if (e.target.getAttribute('name') == "Cliente_um") {
      setCliente_um({ ...Cliente_um, [key]: e.target.value })
    }
    //  CLIENTE UM CASADO
    if (e.target.getAttribute('name') == "Cliente_um_Parceiro") {
      setCliente_um_Parceiro({ ...Cliente_um_Parceiro, [key]: e.target.value })
    }
    //CLIENTE DOIS

    if (e.target.getAttribute('name') == "Cliente_dois") {
      setCliente_dois({ ...Cliente_dois, [key]: e.target.value })
    }

    //  CLIENTE UM CASADO
    if (e.target.getAttribute('name') == "Cliente_dois_Parceiro") {
      setCliente_dois_Parceiro({ ...Cliente_dois_Parceiro, [key]: e.target.value })
    }
  }

  const [Informacao_do_lote, setInformacao_do_lote] = useState({
    NomeEmpreendimento: "",
    Quadra: "",
    Lote: "",
    Endereco_do_lote: "",
    metragemTotal: "",
    extenso_Total: "",
    MetragemFrente: "",
    extenso_Frente: "",
    MetragemFundo: "",
    extenso_Fundo: "",
    MetragemLDireito: "",
    extenso_Direito: "",
    MetragemLEsquerdo: "",
    extenso_Esquerdo: "",
    quanto_pagou: "",
    quanto_pagou_extenso: "",
    quanto_vai_pagar: "",
    quanto_vai_pagar_extenso: "",
    parcelas: "",
    valor_parcelas: "",
    valor_parcelas_extenso: "",
    proprietario: "",
  })


  const Atualizacao_do_empreendimento = (e, key) => {
    setInformacao_do_lote({ ...Informacao_do_lote, [key]: e.target.value })

    if (e.target.getAttribute('name') == "Metragem_Total") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": e.target.value, "extenso_Total": extenso(e.target.value, { number: { decimal: "formal" } }).replace(modificar, (match) => chars[match]), "MetragemFrente": Informacao_do_lote.MetragemFrente, "extenso_Frente": Informacao_do_lote.extenso_Frente, "MetragemFundo": Informacao_do_lote.MetragemFundo, "extenso_Fundo": Informacao_do_lote.extenso_Fundo, "MetragemLDireito": Informacao_do_lote.MetragemLDireito, "extenso_Direito": Informacao_do_lote.extenso_Direito, "MetragemLEsquerdo": Informacao_do_lote.MetragemLEsquerdo, "extenso_Esquerdo": Informacao_do_lote.extenso_Esquerdo, "quanto_pagou": Informacao_do_lote.quanto_pagou, "quanto_pagou_extenso": Informacao_do_lote.quanto_pagou_extenso, "quanto_vai_pagar": Informacao_do_lote.quanto_vai_pagar, "quanto_vai_pagar_extenso": Informacao_do_lote.quanto_vai_pagar_extenso, "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": Informacao_do_lote.valor_parcelas, "valor_parcelas_extenso": Informacao_do_lote.valor_parcelas_extenso, "proprietario": Informacao_do_lote.proprietario })
    }
    if (e.target.getAttribute('name') == "Metragem_Frente") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": Informacao_do_lote.metragemTotal, "extenso_Total": Informacao_do_lote.extenso_Total, "MetragemFrente": e.target.value, "extenso_Frente": extenso(e.target.value, { number: { decimal: "formal" } }).replace(modificar, (match) => chars[match]), "MetragemFundo": Informacao_do_lote.MetragemFundo, "extenso_Fundo": Informacao_do_lote.extenso_Fundo, "MetragemLDireito": Informacao_do_lote.MetragemLDireito, "extenso_Direito": Informacao_do_lote.extenso_Direito, "MetragemLEsquerdo": Informacao_do_lote.MetragemLEsquerdo, "extenso_Esquerdo": Informacao_do_lote.extenso_Esquerdo, "quanto_pagou": Informacao_do_lote.quanto_pagou, "quanto_pagou_extenso": Informacao_do_lote.quanto_pagou_extenso, "quanto_vai_pagar": Informacao_do_lote.quanto_vai_pagar, "quanto_vai_pagar_extenso": Informacao_do_lote.quanto_vai_pagar_extenso, "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": Informacao_do_lote.valor_parcelas, "valor_parcelas_extenso": Informacao_do_lote.valor_parcelas_extenso, "proprietario": Informacao_do_lote.proprietario })
    }
    if (e.target.getAttribute('name') == "Metragem_Fundo") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": Informacao_do_lote.metragemTotal, "extenso_Total": Informacao_do_lote.extenso_Total, "MetragemFrente": Informacao_do_lote.MetragemFrente, "extenso_Frente": Informacao_do_lote.extenso_Frente, "MetragemFundo": e.target.value, "extenso_Fundo": extenso(e.target.value, { number: { decimal: "formal" } }).replace(modificar, (match) => chars[match]), "MetragemLDireito": Informacao_do_lote.MetragemLDireito, "extenso_Direito": Informacao_do_lote.extenso_Direito, "MetragemLEsquerdo": Informacao_do_lote.MetragemLEsquerdo, "extenso_Esquerdo": Informacao_do_lote.extenso_Esquerdo, "quanto_pagou": Informacao_do_lote.quanto_pagou, "quanto_pagou_extenso": Informacao_do_lote.quanto_pagou_extenso, "quanto_vai_pagar": Informacao_do_lote.quanto_vai_pagar, "quanto_vai_pagar_extenso": Informacao_do_lote.quanto_vai_pagar_extenso, "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": Informacao_do_lote.valor_parcelas, "valor_parcelas_extenso": Informacao_do_lote.valor_parcelas_extenso, "proprietario": Informacao_do_lote.proprietario })
    }
    if (e.target.getAttribute('name') == "Metragem_Direito") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": Informacao_do_lote.metragemTotal, "extenso_Total": Informacao_do_lote.extenso_Total, "MetragemFrente": Informacao_do_lote.MetragemFrente, "extenso_Frente": Informacao_do_lote.extenso_Frente, "MetragemFundo": Informacao_do_lote.MetragemFundo, "extenso_Fundo": Informacao_do_lote.extenso_Fundo, "MetragemLDireito": e.target.value, "extenso_Direito": extenso(e.target.value, { number: { decimal: "formal" } }).replace(modificar, (match) => chars[match]), "MetragemLEsquerdo": Informacao_do_lote.MetragemLEsquerdo, "extenso_Esquerdo": Informacao_do_lote.extenso_Esquerdo, "quanto_pagou": Informacao_do_lote.quanto_pagou, "quanto_pagou_extenso": Informacao_do_lote.quanto_pagou_extenso, "quanto_vai_pagar": Informacao_do_lote.quanto_vai_pagar, "quanto_vai_pagar_extenso": Informacao_do_lote.quanto_vai_pagar_extenso, "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": Informacao_do_lote.valor_parcelas, "valor_parcelas_extenso": Informacao_do_lote.valor_parcelas_extenso, "proprietario": Informacao_do_lote.proprietario })
    }
    if (e.target.getAttribute('name') == "Metragem_Esquerda") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": Informacao_do_lote.metragemTotal, "extenso_Total": Informacao_do_lote.extenso_Total, "MetragemFrente": Informacao_do_lote.MetragemFrente, "extenso_Frente": Informacao_do_lote.extenso_Frente, "MetragemFundo": Informacao_do_lote.MetragemFundo, "extenso_Fundo": Informacao_do_lote.extenso_Fundo, "MetragemLDireito": Informacao_do_lote.MetragemLDireito, "extenso_Direito": Informacao_do_lote.extenso_Direito, "MetragemLEsquerdo": e.target.value, "extenso_Esquerdo": extenso(e.target.value, { number: { decimal: "formal" } }).replace(modificar, (match) => chars[match]), "quanto_pagou": Informacao_do_lote.quanto_pagou, "quanto_pagou_extenso": Informacao_do_lote.quanto_pagou_extenso, "quanto_vai_pagar": Informacao_do_lote.quanto_vai_pagar, "quanto_vai_pagar_extenso": Informacao_do_lote.quanto_vai_pagar_extenso, "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": Informacao_do_lote.valor_parcelas, "valor_parcelas_extenso": Informacao_do_lote.valor_parcelas_extenso, "proprietario": Informacao_do_lote.proprietario })
    }
    if (e.target.getAttribute('name') == "Quanto_Pagou") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": Informacao_do_lote.metragemTotal, "extenso_Total": Informacao_do_lote.extenso_Total, "MetragemFrente": Informacao_do_lote.MetragemFrente, "extenso_Frente": Informacao_do_lote.extenso_Frente, "MetragemFundo": Informacao_do_lote.MetragemFundo, "extenso_Fundo": Informacao_do_lote.extenso_Fundo, "MetragemLDireito": Informacao_do_lote.MetragemLDireito, "extenso_Direito": Informacao_do_lote.extenso_Direito, "MetragemLEsquerdo": Informacao_do_lote.MetragemLEsquerdo, "extenso_Esquerdo": Informacao_do_lote.extenso_Esquerdo, "quanto_pagou": e.target.value, "quanto_pagou_extenso": extenso(e.target.value, { mode: 'currency', currency: { type: 'BRL' } }), "quanto_vai_pagar": Informacao_do_lote.quanto_vai_pagar, "quanto_vai_pagar_extenso": Informacao_do_lote.quanto_vai_pagar_extenso, "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": Informacao_do_lote.valor_parcelas, "valor_parcelas_extenso": Informacao_do_lote.valor_parcelas_extenso, "proprietario": Informacao_do_lote.proprietario })
    }
    if (e.target.getAttribute('name') == "Quanto_vai_pagar") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": Informacao_do_lote.metragemTotal, "extenso_Total": Informacao_do_lote.extenso_Total, "MetragemFrente": Informacao_do_lote.MetragemFrente, "extenso_Frente": Informacao_do_lote.extenso_Frente, "MetragemFundo": Informacao_do_lote.MetragemFundo, "extenso_Fundo": Informacao_do_lote.extenso_Fundo, "MetragemLDireito": Informacao_do_lote.MetragemLDireito, "extenso_Direito": Informacao_do_lote.extenso_Direito, "MetragemLEsquerdo": Informacao_do_lote.MetragemLEsquerdo, "extenso_Esquerdo": Informacao_do_lote.extenso_Esquerdo, "quanto_pagou": Informacao_do_lote.quanto_pagou, "quanto_pagou_extenso": Informacao_do_lote.quanto_pagou_extenso, "quanto_vai_pagar": e.target.value, "quanto_vai_pagar_extenso": extenso(e.target.value, { mode: 'currency', currency: { type: 'BRL' } }), "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": Informacao_do_lote.valor_parcelas, "valor_parcelas_extenso": Informacao_do_lote.valor_parcelas_extenso, "proprietario": Informacao_do_lote.proprietario })
    }
    if (e.target.getAttribute('name') == "valor_parcelas") {
      setInformacao_do_lote({ "NomeEmpreendimento": Informacao_do_lote.NomeEmpreendimento, "Quadra": Informacao_do_lote.Quadra, "Lote": Informacao_do_lote.Lote, "Endereco_do_lote": Informacao_do_lote.Endereco_do_lote, "metragemTotal": Informacao_do_lote.metragemTotal, "extenso_Total": Informacao_do_lote.extenso_Total, "MetragemFrente": Informacao_do_lote.MetragemFrente, "extenso_Frente": Informacao_do_lote.extenso_Frente, "MetragemFundo": Informacao_do_lote.MetragemFundo, "extenso_Fundo": Informacao_do_lote.extenso_Fundo, "MetragemLDireito": Informacao_do_lote.MetragemLDireito, "extenso_Direito": Informacao_do_lote.extenso_Direito, "MetragemLEsquerdo": Informacao_do_lote.MetragemLEsquerdo, "extenso_Esquerdo": Informacao_do_lote.extenso_Esquerdo, "quanto_pagou": Informacao_do_lote.quanto_pagou, "quanto_pagou_extenso": Informacao_do_lote.quanto_pagou_extenso, "quanto_vai_pagar": Informacao_do_lote.quanto_vai_pagar, "quanto_vai_pagar_extenso": Informacao_do_lote.quanto_vai_pagar_extenso, "parcelas": Informacao_do_lote.parcelas, "valor_parcelas": e.target.value, "valor_parcelas_extenso": extenso(e.target.value, { mode: 'currency', currency: { type: 'BRL' } }), "proprietario": Informacao_do_lote.proprietario })
    }

  }
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      {isClient ?
        <main className="flex flex-col items-center py-4">
          <header className="w-[60%]">
            <h1 className="bg-white py-[10px] rounded text-center font-bold shadow-2xl">Mudança de titularidade</h1>
          </header>

          <section className=" mt-8 flex-row flex justify-between w-full px-[15%]  text-left">
            <div className=" flex flex-col">
              <h1>Cliente 1</h1>
              <label className=" mt-3 text-white">
                Nome Completo:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um" value={Cliente_um.nome} onChange={(e) => informacao_completa(e, "nome")} />
              </label>

              <label className=" mt-3 text-white">
                CPF:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um" value={Cliente_um.CPF} onChange={(e) => informacao_completa(e, "CPF")} />
              </label>
              <label className=" mt-3 text-white">
                RG:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um" value={Cliente_um.RG} onChange={(e) => informacao_completa(e, "RG")} />
              </label>
              <label className=" mt-3 text-white">
                Estado Civil
                <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Cliente_um" value={Cliente_um.Estado_Civil} onChange={(e) => informacao_completa(e, "Estado_Civil")}>
                  <option value=""></option>
                  <option value="casado(a)">casado(a)</option>
                  <option value="solteiro(a)">solteiro(a)</option>
                  <option value="divorciado(a)">divorciado(a)</option>
                  <option value="união estável">união estável</option>
                  <option value="viúvo(a)">viúvo(a)</option>
                </select>
              </label>
              <label className=" mt-3 text-white">
                Profissão:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um" value={Cliente_um.Profissao} onChange={(e) => informacao_completa(e, "Profissao")} />
              </label>

              {Cliente_um.Estado_Civil == "união estável" || Cliente_um.Estado_Civil == "casado(a)" ? (
                <>
                  <h1 className="my-4">Informações do Parceiro(a)</h1>
                  <label className=" mt-3 text-white">
                    Nome Completo:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um_Parceiro" value={Cliente_um_Parceiro.nome} onChange={(e) => informacao_completa(e, "nome")} />
                  </label>

                  <label className=" mt-3 text-white">
                    CPF:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um_Parceiro" value={Cliente_um_Parceiro.CPF} onChange={(e) => informacao_completa(e, "CPF")} />
                  </label>
                  <label className=" mt-3 text-white">
                    RG:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um_Parceiro" value={Cliente_um_Parceiro.RG} onChange={(e) => informacao_completa(e, "RG")} />
                  </label>
                  <label className=" mt-3 text-white">
                    Estado Civil
                    <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Cliente_um_Parceiro" value={Cliente_um_Parceiro.Estado_Civil} onChange={(e) => informacao_completa(e, "Estado_Civil")}>
                      <option value=""></option>
                      <option value={`${Cliente_um.Estado_Civil}`}>{`${Cliente_um.Estado_Civil}`}</option>
                    </select>
                  </label>
                  <label className=" mt-3 text-white">
                    Tipo de Regime
                    <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Cliente_um_Parceiro" value={Cliente_um_Parceiro.Tipo_de_uniao} onChange={(e) => informacao_completa(e, "Tipo_de_uniao")}>
                      <option value=""></option>
                      <option value="comunhão parcial de bens">comunhão parcial de bens</option>
                      <option value="comunhão universal de bens">comunhão universal de bens</option>
                      <option value="separação total de bens">separação total de bens</option>
                      <option value="participação final nos aquestos">more uxório</option>

                    </select>
                  </label>
                  <label className=" mt-3 text-white">
                    Profissão:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_um_Parceiro" value={Cliente_um_Parceiro.Profissao} onChange={(e) => informacao_completa(e, "Profissao")} />
                  </label>
                </>
              ) : (<></>)}

            </div>
            <div className=" flex flex-col">
              <h1>Cliente 2</h1>
              <label className=" mt-3 text-white">
                Nome Completo:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois" value={Cliente_dois.nome} onChange={(e) => informacao_completa(e, "nome")} />
              </label>

              <label className=" mt-3 text-white">
                CPF:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois" value={Cliente_dois.CPF} onChange={(e) => informacao_completa(e, "CPF")} />
              </label>
              <label className=" mt-3 text-white">
                RG:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois" value={Cliente_dois.RG} onChange={(e) => informacao_completa(e, "RG")} />
              </label>
              <label className=" mt-3 text-white">
                Estado Civil
                <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Cliente_dois" value={Cliente_dois.Estado_Civil} onChange={(e) => informacao_completa(e, "Estado_Civil")}>
                  <option value=""></option>
                  <option value="casado(a)">casado(a)</option>
                  <option value="solteiro(a)">solteiro(a)</option>
                  <option value="divorciado(a)">divorciado(a)</option>
                  <option value="união estável">união estável</option>
                  <option value="viúvo(a)">viúvo(a)</option>
                </select>
              </label>
              <label className=" mt-3 text-white">
                Profissão:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois" value={Cliente_dois.Profissao} onChange={(e) => informacao_completa(e, "Profissao")} />
              </label>

              {Cliente_dois.Estado_Civil == "união estável" || Cliente_dois.Estado_Civil == "casado(a)" ? (
                <>
                  <h1 className="my-4">Informações do Parceiro(a)</h1>
                  <label className=" mt-3 text-white">
                    Nome Completo:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois_Parceiro" value={Cliente_dois_Parceiro.nome} onChange={(e) => informacao_completa(e, "nome")} />
                  </label>

                  <label className=" mt-3 text-white">
                    CPF:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois_Parceiro" value={Cliente_dois_Parceiro.CPF} onChange={(e) => informacao_completa(e, "CPF")} />
                  </label>
                  <label className=" mt-3 text-white">
                    RG:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois_Parceiro" value={Cliente_dois_Parceiro.RG} onChange={(e) => informacao_completa(e, "RG")} />
                  </label>
                  <label className=" mt-3 text-white">
                    Estado Civil
                    <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Cliente_dois_Parceiro" value={Cliente_dois_Parceiro.Estado_Civil} onChange={(e) => informacao_completa(e, "Estado_Civil")}>
                      <option value=""></option>
                      <option value={`${Cliente_dois.Estado_Civil}`}>{`${Cliente_dois.Estado_Civil}`}</option>
                    </select>
                  </label>
                  <label className=" mt-3 text-white">
                    Tipo de Regime
                    <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Cliente_dois_Parceiro" value={Cliente_dois_Parceiro.Tipo_de_uniao} onChange={(e) => informacao_completa(e, "Tipo_de_uniao")}>
                      <option value=""></option>
                      <option value="comunhão parcial de bens">comunhão parcial de bens</option>
                      <option value="comunhão universal de bens">comunhão universal de bens</option>
                      <option value="separação total de bens">separação total de bens</option>
                      <option value="participação final nos aquestos">more uxório</option>
                    </select>
                  </label>
                  <label className=" mt-3 text-white">
                    Profissão:
                    <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Cliente_dois_Parceiro" value={Cliente_dois_Parceiro.Profissao} onChange={(e) => informacao_completa(e, "Profissao")} />
                  </label>
                </>
              ) : (<></>)}
            </div>

          </section>
          <section className=" flex-col flex mt-10 items-center justify-center w-full ">


            <div className="text-left flex flex-col">
              <label className=" mt-3 text-white">
                Nome do empreendimento:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Lote" value={Informacao_do_lote.NomeEmpreendimento} onChange={(e) => Atualizacao_do_empreendimento(e, "NomeEmpreendimento")} />
              </label>
              <label className=" mt-3 text-white">
                Quadra:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Lote" value={Informacao_do_lote.Quadra} onChange={(e) => Atualizacao_do_empreendimento(e, "Quadra")} />
              </label>

              <label className=" mt-3 text-white">
                Numero do Lote:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Lote" value={Informacao_do_lote.Lote} onChange={(e) => Atualizacao_do_empreendimento(e, "Lote")} />
              </label>


              <label className=" mt-3 text-white">
                Endereço do Loteamento:
                <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Lote" value={Informacao_do_lote.Endereco_do_lote} onChange={(e) => Atualizacao_do_empreendimento(e, "Endereco_do_lote")}>
                  <option value=""></option>
                  <option value="Distrito de Maria Quitéria">Distrito de Maria Quitéria - Todos</option>
                  <option value="Jaíba">Jaíba - Morada Brandão</option>
                  <option value="Matinha">Matinha - Matinha, Recanto do Alvorecer</option>
                  <option value="Pé de serra">Pé de serra - Pé de serra, Coroné</option>
                  <option value="Euclides da Cunha">Euclides da Cunha - Eldorado</option>
                  <option value="Sauipe">Sauipe - Sauipe</option>
                  <option value="Campo Limpo">Campo Limpo - João Araujo</option>
                  <option value="Candeal">Candeal - Eco Residence 2</option>

                </select>
              </label>
              <label className=" mt-3 text-white">
                Metragem Total:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Metragem_Total" value={Informacao_do_lote.metragemTotal} onChange={(e) => Atualizacao_do_empreendimento(e, "metragemTotal")} />
              </label>


              <label className=" mt-3 text-white">
                Frente:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Metragem_Frente" value={Informacao_do_lote.MetragemFrente} onChange={(e) => Atualizacao_do_empreendimento(e, "MetragemFrente")} />
              </label>
              <label className=" mt-3 text-white">
                Fundo:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Metragem_Fundo" value={Informacao_do_lote.MetragemFundo} onChange={(e) => Atualizacao_do_empreendimento(e, "MetragemFundo")} />
              </label>
              <label className=" mt-3 text-white">
                Lateral Direita:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Metragem_Direito" value={Informacao_do_lote.MetragemLDireito} onChange={(e) => Atualizacao_do_empreendimento(e, "MetragemLDireito")} />
              </label>
              <label className=" mt-3 text-white">
                Lateral Esquerda:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Metragem_Esquerda" value={Informacao_do_lote.MetragemLEsquerdo} onChange={(e) => Atualizacao_do_empreendimento(e, "MetragemLEsquerdo")} />
              </label>
              <label className=" mt-3 text-white">
                Quanto Pagou:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Quanto_Pagou" value={Informacao_do_lote.quanto_pagou} onChange={(e) => Atualizacao_do_empreendimento(e, "quanto_pagou")} />
              </label>
              <label className=" mt-3 text-white">
                Quanto vai ficar restando para pagar:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Quanto_vai_pagar" value={Informacao_do_lote.quanto_vai_pagar} onChange={(e) => Atualizacao_do_empreendimento(e, "quanto_vai_pagar")} />
              </label>
              <label className=" mt-3 text-white">
                Quantidade de parcelas restantes:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="Lote" value={Informacao_do_lote.parcelas} onChange={(e) => Atualizacao_do_empreendimento(e, "parcelas")} />
              </label>
              <label className=" mt-3 text-white">
                Valor de cada parcela Restante:
                <input className=" text-black ml-2 pl-2 outline-none py-1 rounded" type="text" name="valor_parcelas" value={Informacao_do_lote.valor_parcelas} onChange={(e) => Atualizacao_do_empreendimento(e, "valor_parcelas")} />
              </label>

              <label className=" mt-3 text-white">
                Qual o proprietário que vai assinar:
                <select className=" text-black ml-2 pl-2 outline-none py-1 rounded" name="Lote" value={Informacao_do_lote.proprietario} onChange={(e) => Atualizacao_do_empreendimento(e, "proprietario")}>
                  <option value=""></option>
                  <option value="A&A EMPREENDIMENTOS IMOBILIÁRIOS">A&A EMPREENDIMENTOS IMOBILIARIOS</option>
                  <option value="AV DE SOUZA EMPREENDIMENTOS IMOBILIÁRIOS">AV DE SOUZA EMPREENDIMENTOS IMOBILIARIOS</option>
                </select>
              </label>
            </div>


            <div className="mt-10">
              <button >
                <PDFDownloadLink document={<PDFFile Informacao_do_lote={Informacao_do_lote} Cliente_dois={Cliente_dois} Cliente_dois_Parceiro={Cliente_dois_Parceiro} Cliente_um={Cliente_um} Cliente_um_Parceiro={Cliente_um_Parceiro} />} fileName="Mudanca-de-Titularidade">
                  {({ loading }) => loading ? <button className=" bg-green-600 rounded px-4 py-2">Carregando...</button> : <button className=" border border-black bg-green-600 rounded px-4 py-2">Gerar PDF</button>}
                </PDFDownloadLink>
              </button>

            </div>


          </section>
        </main>
        : null}


    </>

  )
}
