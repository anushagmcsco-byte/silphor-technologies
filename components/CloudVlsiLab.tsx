'use client';

import React, { useState } from 'react';
import { Terminal, Play, Save, Download, RefreshCw, FileCode, Folder, CheckCircle, Cpu, Sliders } from 'lucide-react';

export default function CloudVlsiLab() {
  const [activeFile, setActiveFile] = useState('alu.v');
  const [code, setCode] = useState(`module alu (
    input logic [3:0] a,
    input logic [3:0] b,
    input logic [2:0] opcode,
    output logic [3:0] result,
    output logic zero
);
  always_comb begin
    case (opcode)
      3'b000: result = a + b;
      3'b001: result = a - b;
      3'b010: result = a & b;
      3'b011: result = a | b;
      default: result = 4'b0000;
    endcase
    zero = (result == 4'b0000);
  end
endmodule`);

  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    'Silphor Cloud VLSI Lab v2.5 initialized.',
    'Environment: Synopsys VCS simulation engine ready.',
    'Type $ compile alu.v to verify syntax.'
  ]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simPassed, setSimPassed] = useState(false);

  const files = [
    { name: 'alu.v', type: 'verilog', code: `module alu (\n    input logic [3:0] a,\n    input logic [3:0] b,\n    input logic [2:0] opcode,\n    output logic [3:0] result,\n    output logic zero\n);\n  always_comb begin\n    case (opcode)\n      3'b000: result = a + b;\n      3'b001: result = a - b;\n      3'b010: result = a & b;\n      3'b011: result = a | b;\n      default: result = 4'b0000;\n    endcase\n    zero = (result == 4'b0000);\n  end\nendmodule` },
    { name: 'tb_alu.v', type: 'verilog', code: `module tb_alu;\n  logic [3:0] a, b;\n  logic [2:0] opcode;\n  logic [3:0] result;\n  logic zero;\n\n  alu uut (.a(a), .b(b), .opcode(opcode), .result(result), .zero(zero));\n\n  initial begin\n    a = 4'd5; b = 4'd3; opcode = 3'b000; #10;\n    $display("Result: %d, Zero: %b", result, zero);\n    $finish;\n  end\nendmodule` },
    { name: 'fifo.v', type: 'verilog', code: `module synchronous_fifo #(parameter WIDTH=8, DEPTH=16) (\n    input logic clk,\n    input logic rst,\n    input logic wr_en,\n    input logic rd_en,\n    input logic [WIDTH-1:0] din,\n    output logic [WIDTH-1:0] dout,\n    output logic full,\n    output logic empty\n);\n  // FIFO logic here\nendmodule` },
    { name: 'constraints.sdc', type: 'tcl', code: `create_clock -name clk -period 5.0 [get_ports clk]\nset_input_delay 1.0 -clock clk [get_ports input_data*]\nset_output_delay 1.5 -clock clk [get_ports output_*]` }
  ];

  const handleSelectFile = (file: typeof files[0]) => {
    setActiveFile(file.name);
    setCode(file.code);
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setConsoleOutput(prev => [...prev, `$ compiling ${activeFile}...`, 'Analyzing syntax tree...', 'Elaborating design hierarchy...']);
    setTimeout(() => {
      setConsoleOutput(prev => [
        ...prev,
        'Simulation started successfully.',
        'Time: 0ns | Inputs: a=5, b=3, opcode=000',
        'Time: 10ns | Output result = 8 (01000), zero = 0',
        'TEST PASSED: 100% assertions satisfied.',
        'Simulation completed in 0.04s.'
      ]);
      setIsSimulating(false);
      setSimPassed(true);
    }, 1200);
  };

  return (
    <div className="bg-[#080E24] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[700px]">
      {/* Top Bar */}
      <div className="bg-[#0b1329] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Silphor Cloud VLSI Lab</h3>
            <p className="text-[10px] text-slate-400">Browser-based Verilog, SystemVerilog & TCL Development Environment</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white font-medium text-xs shadow-lg shadow-blue-600/30 disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Compiling...' : 'Run Simulation'}</span>
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left File Explorer */}
        <div className="lg:col-span-3 bg-[#090e1d] border-r border-slate-800 p-4 overflow-y-auto">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <Folder className="w-3.5 h-3.5 text-cyan-400" />
            <span>Workspace Files</span>
          </div>
          <div className="space-y-1">
            {files.map(f => (
              <button
                key={f.name}
                onClick={() => handleSelectFile(f)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono transition-colors ${
                  activeFile === f.name ? 'bg-blue-600/20 text-cyan-400 border border-blue-500/30' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <FileCode className="w-4 h-4" />
                <span>{f.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 p-3 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Simulator Status</span>
            <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
              <span className={`w-2.5 h-2.5 rounded-full ${simPassed ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
              <span>{simPassed ? 'Ready • PASSED' : 'Ready for compilation'}</span>
            </div>
          </div>
        </div>

        {/* Center Code Editor */}
        <div className="lg:col-span-9 flex flex-col bg-[#080E24] overflow-hidden">
          <div className="bg-[#0a0f20] px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Editing: <strong className="text-cyan-400">{activeFile}</strong></span>
            <span>UTF-8 • Verilog-2001 / SystemVerilog</span>
          </div>
          <div className="flex-1 p-4 overflow-auto font-mono text-xs text-slate-200 bg-[#080E24]">
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              className="w-full h-full bg-transparent resize-none focus:outline-none leading-relaxed text-slate-200 font-mono"
              spellCheck="false"
            />
          </div>

          {/* Bottom Console & Waveform Area */}
          <div className="h-44 border-t border-slate-800 bg-[#090e1d] p-4 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> Simulation Console & Waveform Log
              </span>
              <button onClick={() => setConsoleOutput(['Console cleared.'])} className="text-[10px] text-slate-400 hover:text-white">Clear</button>
            </div>
            <div className="flex-1 overflow-y-auto font-mono text-[11px] text-slate-300 space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-800">
              {consoleOutput.map((line, idx) => (
                <div key={idx} className={line.includes('PASSED') ? 'text-emerald-400 font-bold' : line.includes('error') ? 'text-rose-400' : 'text-slate-300'}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
