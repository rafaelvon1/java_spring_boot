# java_spring_boot

# API de Vagas (CRUD)

Esta API permite o gerenciamento de **vagas de emprego para PCD**, com operações de criação, leitura, atualização e exclusão.
Os exemplos abaixo mostram como interagir com os endpoints utilizando **JSON** como formato de requisição e resposta.

---

## 🔎 Endpoints

### 1. Listar todas as vagas

**Endpoint:**

```
GET localhost:8080/vagas
```

**Exemplo de Resposta (200 OK):**

```json
[
  {
    "id": 3,
    "empresa": "umc",
    "tituloVaga": "RH",
    "texto": "trabalha 24 por dia, sem descanso",
    "tipoDeficiencia": "visual",
    "endereco": "rua matheus",
    "salario": 3000.0,
    "beneficios": "salario",
    "tipoContrato": "clt",
    "requisitos": "nao dormir",
    "dataPublicacao": "2025-09-01",
    "dataExpiracao": "2025-09-16"
  }
]
```

---

### 2. Criar uma nova vaga

**Endpoint:**

```
POST localhost:8080/vagas/add
```

**Exemplo de Corpo da Requisição (JSON):**

```json
{
  "empresa": "renova_tech",
  "tituloVaga": "mercado do sao jão",
  "texto": "nossa empresa tem como objetivo contratar todos os deficientes",
  "tipoDeficiencia": "cadeirante",
  "endereco": "rua do joao",
  "salario": 2500.0,
  "beneficios": "um salario",
  "tipoContrato": "trabalho escravo 2.0 = clt",
  "requisitos": "ser deficiente",
  "dataPublicacao": "2025-11-01",
  "dataExpiracao": "2025-11-21"
}
```

---

### 3. Consultar vaga por ID

**Endpoint:**

```
GET localhost:8080/vagas/{id}
```

**Exemplo de Resposta (200 OK):**

```json
{
  "id": 3,
  "empresa": "umc",
  "tituloVaga": "RH",
  "texto": "trabalha 24 por dia, sem descanso",
  "tipoDeficiencia": "visual",
  "endereco": "rua matheus",
  "salario": 3000.0,
  "beneficios": "salario",
  "tipoContrato": "clt",
  "requisitos": "nao dormir",
  "dataPublicacao": "2025-09-01",
  "dataExpiracao": "2025-09-16"
}
```

---

### 4. Atualizar uma vaga

**Endpoint:**

```
PUT localhost:8080/vagas/update
```

**Exemplo de Corpo da Requisição (JSON):**

```json
{
  "id": 3,
  "empresa": "empresa",
  "tituloVaga": "ti",
  "texto": "nossa empresa...",
  "tipoDeficiencia": "visual",
  "endereco": "rua",
  "salario": 1200.0,
  "beneficios": "salario",
  "tipoContrato": "clt",
  "requisitos": "python",
  "dataPublicacao": "2025-09-16",
  "dataExpiracao": "2025-09-20"
}
```

---

### 5. Deletar uma vaga por ID

**Endpoint:**

```
DELETE localhost:8080/vagas/delete/{id}
```

**Exemplo:**

```
DELETE localhost:8080/vagas/delete/3
```

**Resposta esperada (200 OK):**

```
Vaga com ID 3 deletada com sucesso.
```

---

## 📌 Considerações

* **Formato JSON obrigatório** para requisições `POST` e `PUT`.
* **ID** é gerado automaticamente na criação da vaga, mas deve ser informado para atualização e exclusão.
* Datas devem seguir o formato **YYYY-MM-DD** (ISO 8601).
* Em caso de erro, a API retorna mensagens padronizadas com o código HTTP correspondente.

---

## 📌 Tabela de Vagas

| Campo              | Descrição                                  | Tipo de dado       |
|-------------------|-------------------------------------------|------------------|
| id_vaga           | Identificador único da vaga               | Integer / String |
| empresa           | Nome da empresa                           | String           |
| titulo_vaga       | Título da vaga                            | String           |
| texto             | Descrição detalhada da vaga               | String           |
| tipo_deficiencia  | Tipo de deficiência compatível (se PCD)  | String           |
| endereco          | Endereço ou cidade da vaga                | String           |
| salario           | Salário oferecido                          | Number           |
| beneficios        | Benefícios incluídos                       | String / Array   |
| tipo_contrato     | Tipo de contrato (CLT, PJ, Temporário)    | String           |
| requisitos        | Requisitos e qualificações necessárias    | String / Array  |
| data_publicacao   | Data em que a vaga foi publicada          | String             |
| data_expiracao    | Data de expiração da vaga                  | String             |


