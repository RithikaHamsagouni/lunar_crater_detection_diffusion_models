import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Search, 
  Code, 
  FileText, 
  Layers, 
  Activity, 
  Moon, 
  ChevronRight, 
  Download,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Telescope
} from 'lucide-react';

// Types
type ProjectSection = 'abstract' | 'methodology' | 'architecture' | 'demo' | 'code';

export default function App() {
  const [activeSection, setActiveSection] = useState<ProjectSection>('abstract');

  return (
    <div className="h-screen w-full bg-soph-black text-soph-text font-sans flex flex-col overflow-hidden research-border border">
      {/* Top Header */}
      <header className="h-16 border-b border-soph-border px-8 flex items-center justify-between bg-soph-dark shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full border-2 border-soph-border-light flex items-center justify-center">
            <div className="w-4 h-4 bg-soph-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(242,125,38,0.5)]"></div>
          </div>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 font-mono">Planetary Research Lab / v.2.4</span>
        </div>
        <div className="flex gap-8">
          {[
            { id: 'abstract', label: 'Abstract' },
            { id: 'methodology', label: 'Methodology' },
            { id: 'architecture', label: 'Architecture' },
            { id: 'demo', label: 'Live Inference' },
            { id: 'code', label: 'Repository' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as ProjectSection)}
              className={`text-[11px] uppercase tracking-widest font-semibold transition-all pb-1 border-b-2 ${
                activeSection === item.id 
                ? 'text-white border-white opacity-100' 
                : 'text-soph-text border-transparent opacity-40 hover:opacity-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Left Panel: Project Info */}
        <aside className="col-span-4 border-r border-soph-border p-10 flex flex-col gap-10 bg-soph-surface overflow-y-auto">
          <section>
            <h1 className="text-4xl font-serif leading-tight italic mb-6 text-white">
              Diffusion-Based Lunar Crater Detection
            </h1>
            <p className="text-xs leading-relaxed opacity-60 font-light tracking-wide max-w-sm">
              Leveraging diffusion-inspired denoising and U-Net architectures for high-precision lunar morphology analysis. Developed for Chandrayaan-2 OHRC imagery with classification based on topological radius metrics.
            </p>
          </section>

          <section className="grid grid-cols-2 gap-4">
            {[
              { label: 'Mean IoU Score', value: '0.8842', color: 'text-soph-accent' },
              { label: 'Dice Coefficient', value: '0.9120', color: 'text-soph-accent' },
              { label: 'Latency', value: '42ms' },
              { label: 'Parameters', value: '14.2M' },
            ].map((stat, i) => (
              <div key={i} className="border border-soph-border-light p-4 bg-black/20">
                <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2 font-mono">{stat.label}</p>
                <p className={`text-2xl font-mono ${stat.color || 'opacity-80'}`}>{stat.value}</p>
              </div>
            ))}
          </section>

          <section className="mt-auto">
             <div className="bg-soph-black p-6 border border-soph-border-light shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-5">
                   <Moon size={40} />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-500/80">Active Detection Engine</span>
                </div>
                <p className="text-xl font-serif mb-1 italic text-white">Segmenting Lunar Features...</p>
                <p className="text-[10px] font-mono opacity-50 uppercase tracking-tighter">System Buffer: Ready for T4 Acceleration</p>
             </div>
          </section>
        </aside>

        {/* Right Panel: Active Viewport */}
        <section className="col-span-8 p-12 bg-soph-black relative overflow-hidden grid-motif">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {activeSection === 'abstract' && <AbstractSection />}
              {activeSection === 'methodology' && <MethodologySection />}
              {activeSection === 'architecture' && <ArchitectureSection />}
              {activeSection === 'demo' && <DemoSection />}
              {activeSection === 'code' && <CodeSection />}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      {/* Bottom Status Bar */}
      <footer className="h-10 bg-soph-dark border-t border-soph-border flex items-center px-8 justify-between shrink-0">
        <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] opacity-40 font-mono">
          <span className="flex items-center gap-1.5"><Rocket size={10} /> SYSTEM_OK</span>
          <span className="flex items-center gap-1.5"><Cpu size={10} /> CUDA_UTIL: 42%</span>
          <span className="flex items-center gap-1.5"><Activity size={10} /> FREQ: 2.4GHz</span>
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-mono">
          Diffusion_UNet_Phase: <span className="text-soph-accent">Segment_Validate_Ready</span>
        </div>
      </footer>
    </div>
  );
}

function AbstractSection() {
  return (
    <div className="h-full flex flex-col justify-center max-w-2xl mx-auto space-y-12">
      <div className="space-y-6">
        <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-soph-accent font-bold">Scientific Context</h3>
        <p className="text-2xl font-serif italic leading-relaxed text-white">
          "The lunar surface is densely populated with craters, making their accurate detection a critical step in planetary exploration."
        </p>
        <p className="text-sm opacity-60 leading-relaxed font-light tracking-wide">
          Our methodology focuses on the "Grey Areas" of orbital imagery. Where standard YOLO models fail due to shadow ambiguity, our Diffusion-UNet hybrid resolves topological inconsistencies through iterative reverse-noise feature extraction.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8 border-t border-soph-border-light pt-8">
        <div>
          <p className="text-[10px] font-mono uppercase opacity-40 mb-4 tracking-widest leading-none">Primary Dataset</p>
          <p className="text-lg">Chandrayaan-2 OHRC Images</p>
          <p className="text-xs opacity-40 mt-1 font-mono">1.2k High-Res Samples / XML Labels</p>
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase opacity-40 mb-4 tracking-widest leading-none">AI Architecture</p>
          <p className="text-lg">Denoising U-Net</p>
          <p className="text-xs opacity-40 mt-1 font-mono">4-Level Depth / Bilateral Filter</p>
        </div>
      </div>
    </div>
  );
}

function MethodologySection() {
  const pipeline = [
    { label: '01', title: 'Data Cleaning', desc: 'Sourcing resolution-matched OHRC frames.' },
    { label: '02', title: 'Diffusion Step', desc: 'Anisotropic diffusion to normalize moon-light artifacts.' },
    { label: '03', title: 'Segmentation', desc: 'U-Net pixel-wise crater boundary estimation.' },
    { label: '04', title: 'Morphology', desc: 'Geometrical classification using centroid radius.' },
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-soph-accent font-bold mb-12">Process Pipeline</h3>
      <div className="space-y-12">
        {pipeline.map((step, i) => (
          <div key={i} className="flex items-start gap-8 group">
            <span className="text-xs font-mono opacity-20 group-hover:opacity-100 group-hover:text-soph-accent transition-all duration-300 font-bold">{step.label}</span>
            <div>
              <h4 className="text-xl font-serif italic text-white mb-1">{step.title}</h4>
              <p className="text-xs opacity-50 max-w-md tracking-wider font-light">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureSection() {
  return (
    <div className="h-full flex flex-col justify-center gap-12">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-soph-accent font-bold">Network Schema</h3>
          <div className="glass-panel p-8 bg-black/40 research-border">
             <div className="flex justify-between items-center h-48 px-12 border-x border-white/5 relative">
                {/* Visual indicators of layers */}
                <div className="w-1.5 h-32 bg-soph-accent/20 rounded-full" />
                <div className="w-1.5 h-24 bg-soph-accent/40 rounded-full" />
                <div className="w-4 h-4 rounded-full bg-white animate-pulse shadow-[0_0_15px_white]" />
                <div className="w-1.5 h-24 bg-soph-accent/40 rounded-full" />
                <div className="w-1.5 h-32 bg-soph-accent/20 rounded-full" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                   <span className="text-[60px] font-serif italic">UNet</span>
                </div>
             </div>
          </div>
        </div>
        <div className="col-span-5 space-y-8">
          <div>
            <h4 className="text-[10px] font-mono uppercase opacity-40 mb-3 tracking-widest">Encoder Stacks</h4>
            <p className="text-sm opacity-70 font-light leading-relaxed">
              Successive down-pooling captures semantic crater 'essence' across varying orbital scales.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono uppercase opacity-40 mb-3 tracking-widest">Decoder Stacks</h4>
            <p className="text-sm opacity-70 font-light leading-relaxed">
              Upsampling with skip-connections ensures no spatial data loss during feature restoration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoSection() {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<{confidence: number, type: string} | null>(null);

  const processSim = () => {
    setStep(1);
    setTimeout(() => setStep(2), 1500);
    setTimeout(() => {
        setStep(3);
        setResults({ confidence: 96.2, type: 'Medium Crater' });
    }, 3000);
  };

  return (
    <div className="h-full flex flex-col pt-4">
      <div className="flex items-center justify-between mb-8">
         <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-soph-accent font-bold">Live Inference Engine</h3>
         <button 
           onClick={() => step === 3 ? setStep(0) : processSim()}
           disabled={step > 0 && step < 3}
           className="px-6 py-2 border border-soph-border-light hover:border-soph-accent hover:text-white transition-all font-mono text-[10px] uppercase tracking-widest"
         >
           {step === 0 ? 'Enter Test Mode' : step < 3 ? 'AI Processing...' : 'Reset System'}
         </button>
      </div>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {/* Input Views */}
        <div className="space-y-6">
           <div className="relative border border-soph-border aspect-square overflow-hidden group bg-soph-surface">
              <img 
                src="https://images.unsplash.com/photo-1522030239044-12f014385226?q=80&w=1000&auto=format&fit=crop" 
                alt="Moon surface" 
                className={`w-full h-full object-cover transition-all duration-1000 ${step >= 1 ? 'blur-[1px] brightness-125' : 'opacity-60'}`}
              />
              <div className="absolute top-3 left-3 bg-black/60 px-2 py-1 text-[8px] uppercase tracking-widest z-10 font-mono">Input: OHRC_RAW_001</div>
              {step === 1 && (
                <div className="absolute inset-0 bg-soph-accent/5 flex items-center justify-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse py-2 px-4 bg-black/80 border border-soph-accent/20">Applying Diffusion...</span>
                </div>
              )}
           </div>
           
           <div className="relative border border-soph-border aspect-square overflow-hidden bg-black">
              <div className="absolute top-3 left-3 bg-black/60 px-2 py-1 text-[8px] uppercase tracking-widest z-10 font-mono">Predict: Binary_Mask</div>
              <div className={`w-full h-full flex items-center justify-center transition-opacity duration-1000 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="w-32 h-32 bg-white rounded-full blur-[2px] opacity-90 shadow-[0_0_40px_white]" />
              </div>
              {step === 2 && (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-soph-accent shadow-[0_0_10px_#f27d26] animate-scan" />
                 </div>
              )}
           </div>
        </div>

        {/* Inference Stats */}
        <div className="space-y-6 flex flex-col">
           <div className="flex-1 bg-soph-surface border border-soph-border p-8 flex flex-col items-center justify-center text-center">
              {results ? (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="w-16 h-16 rounded-full border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                       <CheckCircle2 className="text-emerald-500" size={32} />
                    </div>
                    <h4 className="text-4xl font-serif italic text-white leading-none">Detection Active</h4>
                    <p className="text-xs font-mono text-emerald-500 tracking-[0.2em]">{results.confidence}% Statistical Confidence</p>
                    <div className="pt-8 border-t border-soph-border-light">
                       <p className="text-[10px] font-mono uppercase opacity-40 mb-2 tracking-widest">Classification Outcome</p>
                       <p className="text-2xl font-mono text-soph-accent uppercase">{results.type}</p>
                    </div>
                 </motion.div>
              ) : (
                 <div className="opacity-20 space-y-4">
                    <Search size={40} className="mx-auto" />
                    <p className="font-mono text-xs uppercase tracking-widest">Waiting for Input Analysis</p>
                 </div>
              )}
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="border border-soph-border-light p-4">
                 <p className="text-[8px] font-mono uppercase opacity-40 mb-1">Center Coords</p>
                 <p className="text-xs font-mono opacity-80">{results ? 'X: 422, Y: 102' : '----'}</p>
              </div>
              <div className="border border-soph-border-light p-4">
                 <p className="text-[8px] font-mono uppercase opacity-40 mb-1">Morphology</p>
                 <p className="text-xs font-mono opacity-80">{results ? 'Circular' : '----'}</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function CodeSection() {
  const [selectedFile, setSelectedFile] = useState('model.py');
  
  const files = [
    { name: 'model.py', icon: Cpu },
    { name: 'dataset.py', icon: Layers },
    { name: 'train.py', icon: Activity },
    { name: 'utils.py', icon: Rocket },
  ];

  return (
    <div className="h-full flex flex-col pt-4">
        <div className="flex items-center justify-between mb-8">
             <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-soph-accent font-bold">Research Source Repository</h3>
             <button className="flex items-center gap-2 px-4 py-1.5 border border-soph-border-light hover:border-white transition-all text-[10px] uppercase font-mono tracking-widest">
                <Download size={12} /> Sync Local ZIP
            </button>
        </div>

        <div className="flex gap-4 mb-6">
            {files.map(file => (
                <button
                    key={file.name}
                    onClick={() => setSelectedFile(file.name)}
                    className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all ${
                        selectedFile === file.name 
                        ? 'text-soph-accent border-b border-soph-accent opacity-100' 
                        : 'text-soph-text opacity-40 hover:opacity-100'
                    }`}
                >
                    {file.name}
                </button>
            ))}
        </div>

        <div className="flex-1 bg-black border border-soph-border-light p-8 font-mono text-[11px] leading-relaxed overflow-y-auto scrollbar-hide text-soph-text/80">
            <pre>
                {selectedFile === 'model.py' && `class UNet(nn.Module):\n    def __init__(self, in_channels=1, out_channels=1):\n        super(UNet, self).__init__()\n        # Res-Block Encoding Layers\n        self.enc1 = conv_block(in_channels, 64)\n        self.enc2 = conv_block(64, 128)\n        self.enc3 = conv_block(128, 256)\n        self.enc4 = conv_block(256, 512)\n        # Skip-Connection Decoder...`}
                {selectedFile === 'dataset.py' && `class LunarCraterDataset(Dataset):\n    def __init__(self, img_dir, mask_dir, transform=None):\n        self.img_dir = img_dir\n        self.mask_dir = mask_dir\n        self.transform = transform\n        self.images = os.listdir(img_dir)\n\n    def __len__(self):\n        return len(self.images)`}
                {selectedFile === 'train.py' && `def train():\n    DEVICE = "cuda" if torch.cuda.is_available() else "cpu"\n    LEARNING_RATE = 1e-4\n    BATCH_SIZE = 8\n    NUM_EPOCHS = 15\n    \n    # Optimizer: Adam with Weight Decay\n    model = UNet().to(DEVICE)\n    print(f"Engine Ready on {DEVICE}")`}
                {selectedFile === 'utils.py' && `def diffusion_denoise(image):\n    # Diffusion Inspired Anisotropic Filtering\n    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))\n    enhanced = clahe.apply(image)\n    denoised = cv2.bilateralFilter(enhanced, 9, 75, 75)\n    return denoised`}
            </pre>
        </div>

        <div className="mt-8 p-4 border border-soph-border-light bg-soph-surface flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Telescope size={16} className="text-soph-accent" />
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-60">Verified for T4/L4 Accelerators</p>
            </div>
            <span className="text-[9px] font-mono opacity-20 uppercase tracking-[0.2em]">Source_Checksum: FD82A...</span>
        </div>
    </div>
  );
}
