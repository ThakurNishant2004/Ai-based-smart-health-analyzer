import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  X,
  Eye,
  Download,
  Brain,
  Activity,
  Droplet,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

interface ExtractedData {
  parameter: string;
  value: string;
  unit: string;
  normalRange: string;
  status: 'normal' | 'high' | 'low';
}

export function ReportUpload() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const mockExtractedData: ExtractedData[] = [
    { parameter: 'Hemoglobin', value: '14.5', unit: 'g/dL', normalRange: '12.0-16.0', status: 'normal' },
    { parameter: 'RBC Count', value: '4.8', unit: 'million/μL', normalRange: '4.5-5.5', status: 'normal' },
    { parameter: 'WBC Count', value: '9.2', unit: 'thousand/μL', normalRange: '4.0-11.0', status: 'normal' },
    { parameter: 'Platelet Count', value: '280', unit: 'thousand/μL', normalRange: '150-450', status: 'normal' },
    { parameter: 'Glucose (Fasting)', value: '105', unit: 'mg/dL', normalRange: '70-100', status: 'high' },
    { parameter: 'Total Cholesterol', value: '195', unit: 'mg/dL', normalRange: '<200', status: 'normal' },
    { parameter: 'HDL Cholesterol', value: '45', unit: 'mg/dL', normalRange: '>40', status: 'normal' },
    { parameter: 'LDL Cholesterol', value: '125', unit: 'mg/dL', normalRange: '<100', status: 'high' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      setShowResults(false);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setShowResults(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-50 text-green-700 border-green-200';
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      case 'low': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal': return <CheckCircle2 className="w-4 h-4" />;
      case 'high': return <TrendingUp className="w-4 h-4" />;
      case 'low': return <Activity className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Health Report Upload</h1>
          <p className="text-gray-500">Upload your medical reports for AI-powered analysis and insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Card */}
            <Card className="p-6 bg-white border-0 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900">Upload Medical Report</h3>
                  <p className="text-sm text-gray-500">Supports PDF, JPG, PNG formats</p>
                </div>
              </div>

              {!uploadedFile ? (
                <label className="block">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                  />
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-gray-900 mb-2">Drop your report here or click to browse</h4>
                    <p className="text-sm text-gray-500 mb-4">Maximum file size: 10MB</p>
                    <Button type="button" className="bg-blue-500 hover:bg-blue-600">
                      Select File
                    </Button>
                  </div>
                </label>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900">{uploadedFile.name}</h4>
                      <p className="text-sm text-gray-500">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      onClick={handleRemoveFile}
                      className="w-8 h-8 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  {isAnalyzing && (
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-700">AI is analyzing your report...</p>
                      </div>
                      <Progress value={66} className="h-2" />
                      <p className="text-sm text-gray-500 mt-2">Extracting health data using OCR and AI</p>
                    </div>
                  )}

                  {!showResults && !isAnalyzing && (
                    <Button onClick={handleAnalyze} className="w-full bg-blue-500 hover:bg-blue-600">
                      <Brain className="w-4 h-4 mr-2" />
                      Analyze with AI
                    </Button>
                  )}
                </div>
              )}
            </Card>

            {/* Results Section */}
            {showResults && (
              <Card className="p-6 bg-white border-0 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-gray-900 mb-1">Extracted Health Data</h3>
                    <p className="text-sm text-gray-500">AI has successfully extracted and analyzed your report</p>
                  </div>
                  <Badge className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Analyzed
                  </Badge>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 mb-1">Normal</p>
                    <p className="text-2xl text-green-900">6</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
                    <p className="text-sm text-red-700 mb-1">High</p>
                    <p className="text-2xl text-red-900">2</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 mb-1">Total</p>
                    <p className="text-2xl text-blue-900">8</p>
                  </div>
                </div>

                {/* Data Table */}
                <div className="space-y-3">
                  {mockExtractedData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-1">{item.parameter}</h4>
                        <p className="text-sm text-gray-500">Normal range: {item.normalRange}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-gray-900">
                            {item.value} <span className="text-sm text-gray-500">{item.unit}</span>
                          </p>
                        </div>
                        <Badge variant="outline" className={getStatusColor(item.status) + ' min-w-[80px] justify-center'}>
                          {getStatusIcon(item.status)}
                          <span className="ml-1 capitalize">{item.status}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Insights */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-blue-900 mb-2">AI Health Insights</h4>
                      <ul className="space-y-2 text-sm text-blue-800">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Your fasting glucose (105 mg/dL) is slightly elevated. Consider reducing sugar intake and monitoring regularly.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>LDL cholesterol is higher than recommended. Increase fiber intake and consider cardiovascular exercise.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Blood cell counts are within healthy ranges, indicating good overall blood health.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  <Button className="flex-1 bg-blue-500 hover:bg-blue-600">
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Analysis
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Supported Reports */}
            <Card className="p-6 bg-white border-0 shadow-sm">
              <h3 className="text-gray-900 mb-4">Supported Reports</h3>
              <div className="space-y-3">
                {[
                  { name: 'Blood Test', icon: Droplet, color: 'text-red-500 bg-red-50' },
                  { name: 'Urine Analysis', icon: Activity, color: 'text-yellow-500 bg-yellow-50' },
                  { name: 'Lipid Profile', icon: TrendingUp, color: 'text-purple-500 bg-purple-50' },
                  { name: 'Liver Function', icon: FileText, color: 'text-green-500 bg-green-50' },
                  { name: 'Kidney Function', icon: FileText, color: 'text-blue-500 bg-blue-50' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Previous Uploads */}
            <Card className="p-6 bg-white border-0 shadow-sm">
              <h3 className="text-gray-900 mb-4">Previous Uploads</h3>
              <div className="space-y-3">
                {[
                  { name: 'Blood Test Oct 2025', date: 'Oct 18, 2025', status: 'normal' },
                  { name: 'Lipid Profile Sep 2025', date: 'Sep 25, 2025', status: 'high' },
                  { name: 'Complete Blood Count', date: 'Sep 10, 2025', status: 'normal' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(item.status) + ' text-xs'}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Info Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-sm">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">AI-Powered OCR</h3>
              <p className="text-sm text-gray-600">
                Our advanced AI uses Optical Character Recognition to accurately extract and interpret data from your medical reports, providing instant health insights.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
