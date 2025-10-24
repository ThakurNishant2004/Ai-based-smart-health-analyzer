import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Heart, 
  Activity, 
  Droplet, 
  TrendingUp, 
  AlertCircle,
  Upload,
  Eye,
  Calendar,
  ArrowUp,
  ArrowDown,
  Brain,
  Shield
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const heartRateData = [
  { time: '00:00', value: 72 },
  { time: '04:00', value: 68 },
  { time: '08:00', value: 75 },
  { time: '12:00', value: 82 },
  { time: '16:00', value: 78 },
  { time: '20:00', value: 74 },
  { time: '23:59', value: 70 },
];

const bloodSugarData = [
  { day: 'Mon', value: 95 },
  { day: 'Tue', value: 102 },
  { day: 'Wed', value: 88 },
  { day: 'Thu', value: 94 },
  { day: 'Fri', value: 98 },
  { day: 'Sat', value: 92 },
  { day: 'Sun', value: 90 },
];

const recentReports = [
  { id: 1, name: 'Blood Test Report', date: '2025-10-20', type: 'Laboratory', status: 'Completed' },
  { id: 2, name: 'X-Ray Chest', date: '2025-10-15', type: 'Radiology', status: 'Completed' },
  { id: 3, name: 'ECG Report', date: '2025-10-10', type: 'Cardiology', status: 'Reviewed' },
];

export function Dashboard() {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Welcome back, Sarah!</h1>
          <p className="text-gray-500">Here's your health overview for today</p>
        </div>

        {/* Top Cards - Patient Profile and AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Patient Profile Card */}
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-blue-100 to-blue-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1758691461516-7e716e0ca135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwYXRpZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMDYwNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">Sarah Johnson</h3>
                <p className="text-sm text-gray-500 mb-3">Patient ID: MDS-2024-1847</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Age</p>
                    <p className="text-gray-900">32 years</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Gender</p>
                    <p className="text-gray-900">Female</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Blood Type</p>
                    <p className="text-gray-900">A+</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Height</p>
                    <p className="text-gray-900">165 cm</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* AI Insights Card */}
          <Card className="lg:col-span-2 p-6 bg-linear-to-br from-blue-500 to-blue-600 border-0 shadow-sm text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3>AI Diagnosis Summary</h3>
                  <Badge className="bg-green-400 text-green-900 border-0">Low Risk</Badge>
                </div>
                <p className="text-blue-100 mb-4">
                  Based on your recent health data and vital signs, your overall health status is good. 
                  Your heart rate and blood pressure are within normal ranges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-4 h-4" />
                      <p className="text-sm text-blue-100">Health Score</p>
                    </div>
                    <p className="text-2xl">87/100</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-4 h-4" />
                      <p className="text-sm text-blue-100">Activity Level</p>
                    </div>
                    <p className="text-2xl">Moderate</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <p className="text-sm text-blue-100">Trend</p>
                    </div>
                    <p className="text-2xl">Improving</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Health Vitals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Heart Rate */}
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Heart Rate</p>
                  <p className="text-2xl text-gray-900">72 <span className="text-sm text-gray-500">bpm</span></p>
                </div>
              </div>
              <ArrowDown className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Normal</Badge>
              <span className="text-gray-500">-2 from avg</span>
            </div>
          </Card>

          {/* Blood Pressure */}
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Blood Pressure</p>
                  <p className="text-2xl text-gray-900">120/80 <span className="text-sm text-gray-500">mmHg</span></p>
                </div>
              </div>
              <ArrowDown className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Optimal</Badge>
              <span className="text-gray-500">Stable</span>
            </div>
          </Card>

          {/* Blood Sugar */}
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Droplet className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Blood Sugar</p>
                  <p className="text-2xl text-gray-900">90 <span className="text-sm text-gray-500">mg/dL</span></p>
                </div>
              </div>
              <ArrowUp className="w-4 h-4 text-orange-500" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Normal</Badge>
              <span className="text-gray-500">+5 from avg</span>
            </div>
          </Card>

          {/* BMI */}
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">BMI</p>
                  <p className="text-2xl text-gray-900">22.4 <span className="text-sm text-gray-500">kg/m²</span></p>
                </div>
              </div>
              <ArrowDown className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Healthy</Badge>
              <span className="text-gray-500">-0.3 change</span>
            </div>
          </Card>
        </div>

        {/* Charts and Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Heart Rate Trend Chart */}
          <Card className="lg:col-span-2 p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-gray-900 mb-1">Heart Rate Trend</h3>
                <p className="text-sm text-gray-500">Last 24 hours</p>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={heartRateData}>
                <defs>
                  <linearGradient id="colorHeartRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorHeartRate)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Blood Sugar Weekly Chart */}
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="mb-6">
              <h3 className="text-gray-900 mb-1">Blood Sugar</h3>
              <p className="text-sm text-gray-500">Weekly average</p>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={bloodSugarData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card className="mt-6 p-6 bg-white border-0 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-gray-900 mb-1">Recent Health Reports</h3>
              <p className="text-sm text-gray-500">View and manage your medical reports</p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Upload className="w-4 h-4 mr-2" />
              Upload Report
            </Button>
          </div>

          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{report.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{report.date}</span>
                      <span>•</span>
                      <span>{report.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    {report.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
