# POC - 01 - BASIC REGISTRATIONS WITHOUT BUSINESS RULES

An application that allows you to manage customers, products and create sales. It is possible to include, query, edit and exclude each of the entities, through endpoints for these resources, transmitting data in json format.

## Summary

- [POC - 01 - BASIC REGISTRATIONS WITHOUT BUSINESS RULES](#poc---01---basic-registrations-without-business-rules)
  - [Summary](#summary)
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Schema](#schema)
  - [Running](#running)

## Introduction

This application aims to document the necessary skills with a kit of specific technologies for this project. Through customer, product and sales management, this application will manage persistent data for consumption by a frontend application.

## Technologies

This project use Apollo Server and graphQL.

## Schema

  <details>
    <summary><strong>Documento</strong></summary>
    <ul>
      <li>[String] CPF <strong>Unique</strong></li>
      <li>[String] CNPJ <strong>Unique</strong></li>
      <li>Client (One)</li>
    </ul>
  </details>

  <details>
    <summary><strong>Endereços</strong></summary>
    <ul>
      <li>[String] cobrança <strong>Unique</strong></li>
      <li>[String] entrega <strong>Unique</strong></li>
      <li>Client (One)</li>
    </ul>
  </details>

  <details>
    <summary><strong>Cliente</strong></summary>
    <ul>
      <li>[String] nome </li>
      <li>[String] email <strong>Unique</strong></li>
      <li>Documento (One)</li>
      <li>Endereços (One)</li>
      <li>Vendas (Many)</li>
    </ul>
  </details>

  <details>
    <summary><strong>Categoria</strong></summary>
    <ul>
      <li>[String] nome <strong>Unique</strong></li>
      <li>Produtos (Many)</li>
    </ul>
  </details>

  <details>
    <summary><strong>Produto</strong></summary>
    <ul>
      <li>[String] nome </li>
      <li>[String] descrição</li>
      <li>[Number] valor</li>
      <li>[Number] quantidade em estoque</li>
      <li>Categorias (Many)</li>
      <li>Pedidos (Many)</li>
    </ul>
  </details>

  <details>
    <summary><strong>Pedido</strong></summary>
    <ul>
      <li>[Number] quantidade</li>
      <li>[Number] Valor Total</li>
      <li>Produto (One)</li>
    </ul>
  </details>

  <details>
    <summary><strong>Venda</strong></summary>
    <ul>
      <li>[Number] Valor total Number</li>
      <li>Pedidos (Many)</li>
      <li>Cliente (One)</li>
    </ul>
  </details>

## Running

```bash
  git clone git@github.com:Rharuow/POC-01-BACK.git

  cd ./POC-01-BACK

  yarn && yarn start:dev
```
