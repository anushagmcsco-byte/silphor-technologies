import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt, context } = await req.json();
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { text: "Silphor AI is active, but GEMINI_API_KEY is not set in environment secrets. You can configure your API key in the AI Studio settings. Meanwhile, I can provide expert guidance on VLSI, Verilog, STA, and semiconductor engineering!" },
        { status: 200 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `You are Silphor AI, an expert AI assistant for Silphor Technologies Private Limited (#45 East Link Road, Malleswaram 3rd Cross, Bengaluru - 5860003), a premier semiconductor technology and VLSI engineering organization.
    You assist engineers, students, and enterprise clients with:
    - RTL Design (Verilog, SystemVerilog, ASIC, FPGA, RISC-V)
    - Design Verification (UVM, Testbench, Functional Verification, Coverage)
    - Physical Design & STA (Synthesis, Floorplanning, CTS, Routing, Setup/Hold violations, Slack)
    - DFT (Scan, ATPG, MBIST)
    - Analog & Custom Layout
    - EDA Automation (TCL, Python)
    - Career guidance, interview preparation, and VLSI program recommendations.
    
    Context: ${context || 'General'}
    
    Provide professional, technically rigorous, and well-structured responses. Use Markdown formatting for code, equations, and bullet points.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    return NextResponse.json({ text: response.text || "No response generated." });
  } catch (error: any) {
    console.error("Silphor AI API Error:", error);
    const errMessage = error?.message || '';
    if (errMessage.includes('resource_exhausted') || errMessage.includes('quota') || errMessage.includes('429')) {
      return NextResponse.json(
        { text: "Silphor AI is currently experiencing high demand (Gemini API quota/rate limit reached). Please try again shortly or use our built-in offline VLSI debugging guides, Verilog templates, and STA calculators!" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { text: `AI Service note: ${error.message || 'Unable to connect to Gemini API.'}` },
      { status: 200 }
    );
  }
}
