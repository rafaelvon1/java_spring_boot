import { execSync } from 'node:child_process';
import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Pega o diff do PR
const diff = execSync('git diff origin/main...HEAD').toString();

if (!diff) {
  console.log("Nenhuma mudança detectada.");
  process.exit(0);
}

// Pergunta para IA se o código está ok
(async () => {
  const prompt = `
  Você é um revisor de código. Analise o seguinte diff de código e
  diga se existem erros, problemas de segurança, más práticas ou melhorias.
  Forneça apenas comentários objetivos.
  
  Diff:
  ${diff}
  `;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const review = response.choices[0].message.content;
  console.log("=== AI Review ===\n", review);

  // Se houver a palavra "ERROR", falha o workflow
  if (review.toUpperCase().includes("ERROR")) {
    console.error("❌ Problema detectado pelo AI Review!");
    process.exit(1);
  }
})();
