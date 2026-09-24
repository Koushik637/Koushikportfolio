import React, { useState } from 'react';
import { X, Play, RefreshCw, Cpu, Activity, Award } from 'lucide-react';

interface CricketPredictorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CricketPredictorModal: React.FC<CricketPredictorModalProps> = ({ isOpen, onClose }) => {
  const [format, setFormat] = useState<'T20' | 'ODI' | 'Test'>('T20');
  const [pitch, setPitch] = useState<'Flat Batting' | 'Dry Spinning' | 'Green Seam'>('Flat Batting');
  const [playerRole, setPlayerRole] = useState<'Top-Order Batter' | 'All-Rounder' | 'Pace Bowler'>('Top-Order Batter');
  const [algorithm, setAlgorithm] = useState<'XGBoost' | 'LightGBM' | 'CatBoost' | 'LSTM' | 'Random Forest'>('XGBoost');
  const [isSimulating, setIsSimulating] = useState(false);
  const [results, setResults] = useState<{
    projectedMetric: string;
    expectedValue: string;
    confidence: string;
    boundaryProbability: string;
    volatilityIndex: string;
    modelNotes: string;
  } | null>({
    projectedMetric: "Predicted Run Expectancy",
    expectedValue: "58.4 Runs (SR: 142.1)",
    confidence: "91.8%",
    boundaryProbability: "24.6%",
    volatilityIndex: "Low (0.18)",
    modelNotes: "Ensemble model convergence achieved across XGBoost gradient boosted decision trees."
  });

  if (!isOpen) return null;

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      let expected = "54 Runs";
      let conf = "89.4%";
      let bound = "22%";
      let vol = "Moderate";
      let notes = "";

      if (format === 'T20') {
        if (playerRole === 'Top-Order Batter') {
          expected = pitch === 'Flat Batting' ? "64.2 Runs (SR: 154.6)" : "41.8 Runs (SR: 128.2)";
        } else if (playerRole === 'All-Rounder') {
          expected = pitch === 'Dry Spinning' ? "32 Runs & 2 Wickets (Econ: 6.4)" : "28 Runs & 1 Wicket (Econ: 7.2)";
        } else {
          expected = pitch === 'Green Seam' ? "3.2 Wickets (Econ: 6.1, SR: 12.5)" : "1.8 Wickets (Econ: 8.2)";
        }
      } else if (format === 'ODI') {
        if (playerRole === 'Top-Order Batter') {
          expected = pitch === 'Flat Batting' ? "86.5 Runs (SR: 98.4)" : "62.0 Runs (SR: 84.1)";
        } else {
          expected = pitch === 'Green Seam' ? "3.5 Wickets (Econ: 4.8)" : "2.1 Wickets (Econ: 5.4)";
        }
      } else {
        expected = playerRole === 'Top-Order Batter' ? "108 Runs (2 Innings avg)" : "4.8 Match Wickets";
      }

      if (algorithm === 'LSTM') {
        conf = "93.4%";
        vol = "Very Low (Temporal Smoothing)";
        notes = "Long Short-Term Memory captures sequential bowler matchup trends.";
      } else if (algorithm === 'CatBoost') {
        conf = "92.1%";
        notes = "Categorical features (Pitch, Weather, Bowler Type) handled with minimal variance.";
      } else if (algorithm === 'LightGBM') {
        conf = "90.7%";
        notes = "Leaf-wise tree growth delivers ultra-fast predictive convergence.";
      } else {
        conf = "91.5%";
        notes = "Gradient boosted regularized trees minimize over-fitting in high-variance cricket data.";
      }

      setResults({
        projectedMetric: playerRole === 'Pace Bowler' ? "Projected Bowling Figures" : "Predicted Batting Score",
        expectedValue: expected,
        confidence: conf,
        boundaryProbability: bound,
        volatilityIndex: vol,
        modelNotes: notes
      });
      setIsSimulating(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#12141a] border-2 border-[#373d4d] shadow-[8px_8px_0px_#ff2a55] text-white my-8 overflow-hidden">
        {/* Manga Top Banner */}
        <div className="bg-[#1b1f2b] px-6 py-4 border-b-2 border-[#373d4d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#ff2a55] text-black font-manga text-sm px-2 py-0.5 font-bold tracking-widest">
              SIMULATION CONSOLE
            </span>
            <span className="font-manga text-xl tracking-wider text-white">
              QUEST 01 // CRICKET PERFORMANCE ENGINE
            </span>
            <span className="text-xs text-neutral-400 font-jp hidden sm:inline">
              予測シミュレータ
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#ff2a55] hover:text-black transition-colors border border-neutral-700 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Manga Pipeline Visual */}
          <div className="bg-[#161822] border border-[#2b3040] p-4">
            <div className="text-xs font-mono text-[#ff2a55] mb-2 uppercase tracking-wider">
              Data Pipeline & Architecture
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 bg-[#0f1117] border border-neutral-700">
                <div className="text-[10px] text-neutral-400">INPUT</div>
                <div className="font-bold text-white mt-0.5">CRICKET DATA</div>
              </div>
              <div className="p-2.5 bg-[#0f1117] border border-neutral-700">
                <div className="text-[10px] text-neutral-400">PIPELINE</div>
                <div className="font-bold text-[#ff2a55] mt-0.5">MACHINE LEARNING</div>
              </div>
              <div className="p-2.5 bg-[#0f1117] border border-neutral-700">
                <div className="text-[10px] text-neutral-400">ENGINE</div>
                <div className="font-bold text-[#00f0ff] mt-0.5">PREDICTION ENGINE</div>
              </div>
              <div className="p-2.5 bg-[#0f1117] border border-neutral-700">
                <div className="text-[10px] text-neutral-400">OUTPUT</div>
                <div className="font-bold text-emerald-400 mt-0.5">PLAYER PERFORMANCE</div>
              </div>
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Model Parameters */}
            <div className="space-y-4">
              <h4 className="font-manga text-lg tracking-wider text-neutral-200 border-b border-neutral-800 pb-1">
                EXECUTION PARAMETERS
              </h4>

              {/* Format selection */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                  MATCH FORMAT
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['T20', 'ODI', 'Test'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setFormat(fmt)}
                      className={`py-1.5 px-3 text-xs font-bold font-mono border transition-all cursor-pointer ${
                        format === fmt
                          ? 'bg-[#ff2a55] text-black border-[#ff2a55] shadow-[2px_2px_0px_#fff]'
                          : 'bg-[#181b24] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pitch Conditions */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                  PITCH CONDITIONS
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Flat Batting', 'Dry Spinning', 'Green Seam'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPitch(p)}
                      className={`py-1.5 px-2 text-xs font-medium font-mono border transition-all cursor-pointer ${
                        pitch === p
                          ? 'bg-white text-black border-white shadow-[2px_2px_0px_#ff2a55]'
                          : 'bg-[#181b24] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Player Role */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                  PLAYER ARCHETYPE
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Top-Order Batter', 'All-Rounder', 'Pace Bowler'] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setPlayerRole(role)}
                      className={`py-1.5 px-2 text-xs font-medium font-mono border transition-all cursor-pointer ${
                        playerRole === role
                          ? 'bg-[#00f0ff] text-black border-[#00f0ff] shadow-[2px_2px_0px_#fff]'
                          : 'bg-[#181b24] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Algorithm selector */}
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                  ACTIVE PREDICTIVE ALGORITHM
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['XGBoost', 'LightGBM', 'CatBoost', 'LSTM', 'Random Forest'] as const).map((algo) => (
                    <button
                      key={algo}
                      onClick={() => setAlgorithm(algo)}
                      className={`py-1 px-2.5 text-xs font-mono border transition-all cursor-pointer ${
                        algorithm === algo
                          ? 'bg-neutral-100 text-black border-neutral-100 font-bold'
                          : 'bg-[#14161f] text-neutral-400 border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      {algo}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full mt-4 py-3 bg-[#ff2a55] hover:bg-[#e01f48] text-black font-manga text-xl tracking-wider font-bold transition-all shadow-[4px_4px_0px_#fff] flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="animate-spin" size={18} />
                    <span>RUNNING INFERENCE MATRIX...</span>
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    <span>CALCULATE PREDICTION // 実行</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Column: Predictive Results Display */}
            <div className="bg-[#0e1017] border-2 border-neutral-700 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-4">
                  <div className="flex items-center gap-2 text-[#ff2a55] font-mono text-xs font-bold">
                    <Activity size={14} />
                    <span>ESTIMATION OUTPUT MATRIX</span>
                  </div>
                  <span className="text-[10px] font-mono bg-neutral-800 px-2 py-0.5 text-neutral-300">
                    ENGINE: {algorithm}
                  </span>
                </div>

                {results && (
                  <div className="space-y-4">
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 uppercase">
                        {results.projectedMetric}
                      </div>
                      <div className="text-2xl sm:text-3xl font-manga text-white tracking-wide mt-1 text-[#00f0ff]">
                        {results.expectedValue}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-[#151822] border border-neutral-800">
                        <div className="text-[10px] font-mono text-neutral-400">
                          CONFIDENCE INTERVAL
                        </div>
                        <div className="text-lg font-mono font-bold text-white mt-0.5">
                          {results.confidence}
                        </div>
                      </div>
                      <div className="p-3 bg-[#151822] border border-neutral-800">
                        <div className="text-[10px] font-mono text-neutral-400">
                          VARIANCE RATIO
                        </div>
                        <div className="text-lg font-mono font-bold text-white mt-0.5">
                          {results.volatilityIndex}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#1a1c26] border border-dashed border-neutral-700 text-xs text-neutral-300 font-mono leading-relaxed">
                      <span className="text-[#ff2a55] font-bold">INSIGHT: </span>
                      {results.modelNotes}
                    </div>
                  </div>
                )}
              </div>

              {/* Supported Models Badges */}
              <div className="mt-4 pt-3 border-t border-neutral-800">
                <div className="text-[10px] font-mono text-neutral-500 mb-1.5">
                  RESUME MODELS BENCHMARKED:
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-neutral-400">
                  <span>XGBoost</span> · 
                  <span>LightGBM</span> · 
                  <span>CatBoost</span> · 
                  <span>Poisson Regression</span> · 
                  <span>Negative Binomial</span> · 
                  <span>Survival Analysis</span> · 
                  <span>LSTM</span> · 
                  <span>Random Forest</span> · 
                  <span>SVM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#161822] px-6 py-3 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono font-bold text-neutral-200 border border-neutral-600 cursor-pointer"
          >
            CLOSE CONSOLE [ ESC ]
          </button>
        </div>
      </div>
    </div>
  );
};
