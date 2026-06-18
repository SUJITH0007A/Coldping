import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  /* ── Validate env ────────────────────────────────── */
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    return Response.json(
      { error: "Gemini API key is not configured on the server." },
      { status: 500 }
    );
  }

  /* ── Parse body ──────────────────────────────────── */
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { linkedinText, product, cta, tone } = body;

  if (!linkedinText || !product || !cta) {
    return Response.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  /* ── Tone mapping ────────────────────────────────── */
  const toneMap = {
    friendly: "friendly and casual",
    professional: "professional and polished",
    bold: "direct and bold",
  };
  const toneLabel = toneMap[tone] || "friendly and casual";

  /* ── Build prompt ────────────────────────────────── */
  const systemPrompt = `You are an elite cold email copywriter. You write personalized cold emails that feel like they were written by a thoughtful human who did their research — never by a bot.

RULES — follow every single one:
1. Max 150 words total (subject + body combined).
2. Open with ONE specific hook drawn directly from the recipient's LinkedIn profile text provided below.
3. Mention one pain point that is specific to their role or industry.
4. NEVER say "I hope this email finds you well."
5. NEVER start with "My name is."
6. Sound like a smart, sharp human — conversational but respectful.
7. The tone should be: ${toneLabel}.
8. End with the exact CTA the user provides.
9. Include a subject line.

OUTPUT FORMAT (follow exactly):
Subject: <subject line>

<email body>

Do NOT add any commentary, labels, or formatting outside of the above format.`;

  const userPrompt = `LINKEDIN PROFILE TEXT:
${linkedinText.slice(0, 4000)}

PRODUCT / SERVICE:
${product}

DESIRED CTA:
${cta}`;

  /* ── Call Gemini ──────────────────────────────────── */
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\n\n" + userPrompt }] },
      ],
      generationConfig: {
        temperature: 0.85,
        maxOutputTokens: 2000,
      },
    });

    const text = result.response.text();

    /* ── Parse subject & body ────────────────────────── */
    let subject = "";
    let emailBody = text;

    const subjectMatch = text.match(/^Subject:\s*(.+)/im);
    if (subjectMatch) {
      subject = subjectMatch[1].trim();
      emailBody = text.slice(subjectMatch.index + subjectMatch[0].length).trim();
    }

    /* ── Word count for score ────────────────────────── */
    const wordCount = emailBody.split(/\s+/).filter(Boolean).length;
    let score = 95;
    if (wordCount > 150) score -= 10;
    if (/I hope this email finds you well/i.test(emailBody)) score -= 15;
    if (/^My name is/im.test(emailBody)) score -= 15;
    if (wordCount < 40) score -= 5;
    score = Math.max(50, Math.min(100, score));

    return Response.json({ subject, body: emailBody, score, wordCount });
  } catch (err) {
    console.error("Gemini API error:", err);
    return Response.json(
      { error: "Failed to generate email. Please try again." },
      { status: 502 }
    );
  }
}
