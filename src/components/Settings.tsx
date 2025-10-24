import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { 
  User, 
  Bell, 
  Lock, 
  Shield, 
  Palette,
  Globe,
  HelpCircle,
  LogOut,
  Save
} from 'lucide-react';

export function Settings() {
  return (
    <div className="flex-1 w-full max-w-full min-w-0 bg-gray-50 overflow-auto">
      <div className="p-3 sm:p-6 w-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-1">Settings</h1>
          <p className="text-gray-500">Manage your account and application preferences</p>
        </div>

        <div className="w-full max-w-4xl space-y-4">
          {/* Profile Settings */}
          <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900">Profile Information</h3>
                <p className="text-sm text-gray-500">Update your personal details</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Sarah" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Johnson" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="sarah.johnson@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="mt-1" />
              </div>
              <div className="flex">
                <Button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto justify-center">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          </Card>

          {/* Notifications */} 
          <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-500">Manage how you receive notifications</p>
              </div>
            </div>
 
             <div className="space-y-4">
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-gray-900">Health Alerts</p>
                   <p className="text-sm text-gray-500">Receive alerts about your health status</p>
                 </div>
                 <Switch defaultChecked />
               </div>
               <Separator />
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-gray-900">Medication Reminders</p>
                   <p className="text-sm text-gray-500">Get reminded to take your medications</p>
                 </div>
                 <Switch defaultChecked />
               </div>
               <Separator />
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-gray-900">Appointment Reminders</p>
                   <p className="text-sm text-gray-500">Receive notifications for upcoming appointments</p>
                 </div>
                 <Switch defaultChecked />
               </div>
               <Separator />
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-gray-900">Weekly Health Summary</p>
                   <p className="text-sm text-gray-500">Get a weekly summary of your health data</p>
                 </div>
                 <Switch />
               </div>
             </div>
           </Card>
 
          {/* Privacy & Security */} 
          <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                 <Lock className="w-5 h-5 text-purple-600" />
               </div>
               <div>
                 <h3 className="text-gray-900">Privacy & Security</h3>
                 <p className="text-sm text-gray-500">Control your privacy and security settings</p>
               </div>
             </div>
 
             <div className="space-y-4">
               <div>
                 <Button variant="outline" className="w-full justify-start">
                   <Lock className="w-4 h-4 mr-2" />
                   Change Password
                 </Button>
               </div>
               <div>
                 <Button variant="outline" className="w-full justify-start">
                   <Shield className="w-4 h-4 mr-2" />
                   Two-Factor Authentication
                 </Button>
               </div>
               <Separator />
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-gray-900">Share Data with Healthcare Providers</p>
                   <p className="text-sm text-gray-500">Allow authorized providers to access your data</p>
                 </div>
                 <Switch defaultChecked />
               </div>
             </div>
           </Card>
 
          {/* Preferences */} 
          <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                 <Palette className="w-5 h-5 text-orange-600" />
               </div>
               <div>
                 <h3 className="text-gray-900">Preferences</h3>
                 <p className="text-sm text-gray-500">Customize your app experience</p>
               </div>
             </div>
 
             <div className="space-y-4">
               <div>
                 <Label htmlFor="language">Language</Label>
                 <select id="language" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg">
                   <option>English</option>
                   <option>Spanish</option>
                   <option>French</option>
                   <option>German</option>
                 </select>
               </div>
               <div>
                 <Label htmlFor="timezone">Timezone</Label>
                 <select id="timezone" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg">
                   <option>Eastern Time (ET)</option>
                   <option>Central Time (CT)</option>
                   <option>Mountain Time (MT)</option>
                   <option>Pacific Time (PT)</option>
                 </select>
               </div>
               <Separator />
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-gray-900">Dark Mode</p>
                   <p className="text-sm text-gray-500">Use dark theme for the interface</p>
                 </div>
                 <Switch />
               </div>
             </div>
           </Card>
 
          {/* Help & Support */} 
          <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                 <HelpCircle className="w-5 h-5 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-gray-900">Help & Support</h3>
                 <p className="text-sm text-gray-500">Get help and contact support</p>
               </div>
             </div>
 
             <div className="space-y-3">
               <Button variant="outline" className="w-full justify-start">
                 Help Center
               </Button>
               <Button variant="outline" className="w-full justify-start">
                 Contact Support
               </Button>
               <Button variant="outline" className="w-full justify-start">
                 Privacy Policy
               </Button>
               <Button variant="outline" className="w-full justify-start">
                 Terms of Service
               </Button>
             </div>
           </Card>
 
          {/* Logout */} 
          <Card className="p-3 sm:p-4 bg-white border-0 shadow-sm">
            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </Card>
 
          {/* Version Info */} 
          <div className="text-center text-sm text-gray-500 mt-2">
            <p>MediScan AI v1.0.0</p>
            <p className="mt-1">© 2025 MediScan AI. All rights reserved.</p>
          </div>
         </div>
       </div>
     </div>
   );
 }
