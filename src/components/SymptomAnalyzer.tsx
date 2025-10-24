import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Mic, 
  Send, 
  Brain, 
  AlertTriangle, 
  CheckCircle2,
  Activity,
  Thermometer,
  Clock,
  TrendingUp
} from 'lucide-react';

interface AnalysisResult {
  condition: string;
  probability: number;
  riskLevel: 'low' | 'medium' | 'high';
  description: string;
}

export function SymptomAnalyzer() {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const mockResults: AnalysisResult[] = [
    {
      condition: 'Common Cold',
      probability: 78,
      riskLevel: 'low',
      description: 'A viral infection affecting the upper respiratory tract'
    },
    {
      condition: 'Seasonal Allergies',
      probability: 65,
      riskLevel: 'low',
      description: 'Allergic reaction to environmental allergens'
    },
    {
      condition: 'Viral Fever',
      probability: 42,
      riskLevel: 'medium',
      description: 'Fever caused by viral infection'
    }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Mock voice input
    if (!isListening) {
      setTimeout(() => {
        setSymptoms('I have been experiencing headache, mild fever, and runny nose for the past 2 days');
        setIsListening(false);
      }, 3000);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-50 text-green-700 border-green-200';
      case 'medium': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low': return <CheckCircle2 className="w-5 h-5" />;
      case 'medium': return <AlertTriangle className="w-5 h-5" />;
      case 'high': return <AlertTriangle className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex-1 w-full max-w-full min-w-0 bg-gray-50 overflow-auto">
      <div className="p-3 sm:p-6 w-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-1">AI Symptom Analyzer</h1>
          <p className="text-gray-500">Describe your symptoms and get instant AI-powered health insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* Symptom Input Card */}
            <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">Describe Your Symptoms</h3>
                  <p className="text-sm text-gray-500">Be as detailed as possible for accurate analysis</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <Textarea
                    placeholder="Example: I have been experiencing headache, fever of 100°F, body aches, and fatigue for the past 3 days..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="min-h-[140px] sm:min-h-[180px] resize-none"
                    disabled={isListening}
                  />
                  {isListening && (
                    <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-14 h-14 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center animate-pulse">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-blue-600">Listening...</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleVoiceInput}
                    variant="outline"
                    className={`${isListening ? 'border-blue-500 text-blue-600' : ''} w-full sm:w-auto`}
                  >
                    <Mic className="w-4 h-4 mr-2" />
                    {isListening ? 'Stop Recording' : 'Voice Input'}
                  </Button>
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!symptoms || isAnalyzing}
                    className="bg-blue-500 hover:bg-blue-600 w-full sm:flex-1"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Analyze with AI
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Results Section */}
            {showResults && (
              <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-gray-900 mb-1">AI Analysis Results</h3>
                    <p className="text-sm text-gray-500">Based on the symptoms you provided</p>
                  </div>
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    <Brain className="w-3 h-3 mr-1" />
                    AI Powered
                  </Badge>
                </div>

                <div className="space-y-3">
                  {mockResults.map((result, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="text-gray-900">{result.condition}</h4>
                            <Badge variant="outline" className={getRiskColor(result.riskLevel)}>
                              {getRiskIcon(result.riskLevel)}
                              <span className="ml-1 capitalize">{result.riskLevel} Risk</span>
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Probability Match</span>
                          <span className="text-gray-900">{result.probability}%</span>
                        </div>
                        <Progress value={result.probability} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-blue-900 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    AI Recommendations
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Get adequate rest and stay hydrated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Monitor your temperature regularly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>If symptoms persist for more than 3 days, consult a healthcare provider</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="w-full sm:flex-1">
                    Save Analysis
                  </Button>
                  <Button className="w-full sm:flex-1 bg-green-500 hover:bg-green-600">
                    Consult Doctor
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Side Panel - Tips & Info */}
          <div className="space-y-4">
             {/* Tips Card */}
            <Card className="p-3 sm:p-4 bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-sm">
              <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                <Thermometer className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-gray-900 mb-1">Tips for Better Analysis</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Include when symptoms started</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Mention symptom severity (mild, moderate, severe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>List all symptoms you're experiencing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Include any relevant medical history</span>
                </li>
              </ul>
            </Card>
 
             {/* Recent Analyses */}
            <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
               <h3 className="text-gray-900 mb-4">Recent Analyses</h3>
               <div className="space-y-3">
                 { [
                   { date: 'Oct 18, 2025', condition: 'Headache & Fatigue', risk: 'low' },
                   { date: 'Oct 10, 2025', condition: 'Stomach Pain', risk: 'medium' },
                   { date: 'Oct 02, 2025', condition: 'Joint Pain', risk: 'low' }
                 ].map((item, index) => (
                   <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                     <Clock className="w-4 h-4 text-gray-400" />
                     <div className="flex-1">
                       <p className="text-sm text-gray-900">{item.condition}</p>
                       <p className="text-xs text-gray-500">{item.date}</p>
                     </div>
                     <Badge variant="outline" className={getRiskColor(item.risk) + ' text-xs'}>
                       {item.risk}
                     </Badge>
                   </div>
                 ))}
               </div>
             </Card>
 
             {/* Disclaimer */}
            <Card className="p-3 sm:p-4 bg-orange-50 border border-orange-200">
               <div className="flex items-start gap-3">
                 <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                 <div>
                   <h4 className="text-orange-900 mb-1">Medical Disclaimer</h4>
                   <p className="text-sm text-orange-800">
                     This AI analysis is for informational purposes only and should not replace professional medical advice. 
                     Always consult with a qualified healthcare provider.
                   </p>
                 </div>
               </div>
             </Card>
           </div>
         </div>
       </div>
     </div>
   );
 }
