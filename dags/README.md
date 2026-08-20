# Integração de Dados & Pipelines (Airflow)

Esta pasta é reservada para conter os fluxos de trabalho e DAGs (Directed Acyclic Graphs) focados em inteligência de dados, sincronização de ativos e orquestração de rotinas do ecossistema **REAVEN**.

## 🚀 Integração com o Rextor AI & DATA
A plataforma de dados do REAVEN Tech Group (**[ai.reaven.com.br](https://ai.reaven.com.br)**) utiliza pipelines de ETL automatizados para alimentar dashboards em tempo real do **Apache Superset** e treinar agentes autônomos de IA.

As DAGs contidas neste diretório devem:
1.  Seguir as convenções de tratamento de exceções e e-mails de alerta.
2.  Mapear fontes de dados de forma assíncrona.
3.  Estar sincronizadas de forma contínua com os schedulers de produção.
